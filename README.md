
# 🌱 GreenIQ: Sustainability Scoring of Polymers

GreenIQ is a React + Flask-based web application that calculates and visualizes the **sustainability score** of a given polymer. It helps scientists, researchers, and developers assess the **environmental impact** of polymers based on biodegradability, recyclability, and toxicity.

---

## 📸 Demo Screenshot

![GreenIQ Sustainability Scoring Interface](./assets/greeniq_ui_screenshot.jpg)

---

## 🧠 How It Works

Users input a polymer name (e.g., *PLA*, *PET*, *Acetyl-DL-carnitine*), and the system:

1. Uses a trained **Random Forest Regressor** to predict:
   - **Biodegradability**
   - **Recyclability**
   - **Toxicity**
2. Normalizes values to a 0–100 scale.
3. Computes a **Sustainability Score** using the formula:

```math
Sustainability Score = 0.4 × Biodegradability + 0.3 × (1 - Toxicity) + 0.3 × Recyclability
```

> 🔄 Lower toxicity contributes positively (i.e., less toxic → higher sustainability).

---

## 📦 Tech Stack

--------------------------------------------------------
| Area       | Technology                              |
|------------|-----------------------------------------|
| Frontend   | React + TailwindCSS                     |
| Backend    | Flask (Python)                          |
| ML Model   | Random Forest Regressor (Scikit-learn)  |
| Data       | Precompiled polymer features (CSV/JSON) |
-------------------------------------------------------
---

## 🔍 Features

- Easy-to-use input form
- Live sustainability scoring
- Bar visualization of each metric
- Circular gauge for final score
- Examples: `PLA`, `PET`, `PHB`, `PCL`

---

## 🤝 Credits

- Developed by: Thatikonda Vigneshwar and Team
- ML Guidance: Faculty Mentors and Hackathon Panel
- Framework inspired by polymer informatics and green chemistry

---

## 📎 Repository

[🔗 GreenIQ GitHub](https://github.com/rahulmani-28/GreenIQ)

---

