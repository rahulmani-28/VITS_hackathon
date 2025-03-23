from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS  # ✅ Enable CORS for frontend requests

# Initialize Flask App
app = Flask(__name__)
CORS(app)  # ✅ Allow cross-origin requests

# Load sustainability dataset
try:
    df = pd.read_excel("D:\GreenIQ\GreenIQ\\backend\Data_5k.xlsx")
except FileNotFoundError:
    print("❌ Error: Data file not found! Check the file path.")
    df = pd.DataFrame()  # Empty DataFrame to prevent crashes

# ✅ Define biodegradability function
def calculate_biodegradability(mw, hbondacc, complexity):
    return 1 / (1 + mw) + 0.5 * hbondacc - 0.3 * complexity

# ✅ Define toxicity function
def calculate_toxicity(polararea, hbonddonor, annothitcnt):
    return 0.5 * polararea + 0.5 * hbonddonor + 0.2 * annothitcnt

# ✅ Define recyclability function
def calculate_recyclability(mw, complexity, hbondacc):
    return 0.4 * (1 / (1 + mw)) + 0.3 * (1 / (1 + complexity)) + 0.3 * hbondacc

# ✅ Define sustainability score calculation
def calculate_sustainability_score(biodegradability, toxicity, recyclability):
    normalized_toxicity = 1 - min(1, max(0, toxicity / 100))
    normalized_biodegradability = min(1, max(0, biodegradability))
    normalized_recyclability = min(1, max(0, recyclability))
    return 0.4 * normalized_biodegradability + 0.3 * normalized_toxicity + 0.3 * normalized_recyclability

# ✅ Normalize function
def normalize(series):
    return (series - series.min()) / (series.max() - series.min())

# ✅ Precompute and store sustainability scores
if not df.empty:
    df['biodegradability_raw'] = df.apply(lambda row: calculate_biodegradability(row['mw'], row['hbondacc'], row['complexity']), axis=1)
    df['toxicity_raw'] = df.apply(lambda row: calculate_toxicity(row['polararea'], row['hbonddonor'], row['annothitcnt']), axis=1)
    df['recyclability_raw'] = df.apply(lambda row: calculate_recyclability(row['mw'], row['complexity'], row['hbondacc']), axis=1)

    df['biodegradability'] = normalize(df['biodegradability_raw'])
    df['toxicity'] = 1 - normalize(df['toxicity_raw'])  # Inverted because higher toxicity is worse
    df['recyclability'] = normalize(df['recyclability_raw'])

    df['sustainability_score'] = df.apply(
        lambda row: calculate_sustainability_score(row['biodegradability'], row['toxicity_raw'], row['recyclability']),
        axis=1
    )

# ✅ API Route: Predict Sustainability
@app.route("/predict", methods=["POST"])
def predict_sustainability():
    data = request.json
    polymer_name = data.get("polymerName")

    if not polymer_name:
        return jsonify({"error": "No polymer name provided"}), 400

    # ✅ Search for the polymer in the database
    result = df[df['cmpdname'].str.contains(polymer_name, case=False, na=False)]

    if result.empty:
        return jsonify({"error": "Polymer not found"}), 404

    compound = result.iloc[0]

    # ✅ Compute sustainability metrics
    biodegradability = compound['biodegradability']
    toxicity = compound['toxicity']
    recyclability = compound['recyclability']
    sustainability_score = compound['sustainability_score']

    return jsonify({
        "name": compound["cmpdname"],
        "overallScore": round(sustainability_score * 100, 2),
        "categories": {
            "biodegradability": round(biodegradability * 100, 2),
            "toxicity": round(toxicity * 100, 2),
            "recyclability": round(recyclability * 100, 2),
        },
        "recommendations": [
            "Optimize processing conditions for better recyclability",
            "Implement sustainable waste management for this polymer",
            "Explore eco-friendly alternatives where possible"
        ]
    })

# ✅ Run Flask Server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
