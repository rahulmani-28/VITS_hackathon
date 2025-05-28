"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ClassifyPage() {
  const [inputType, setInputType] = useState("name");
  const [polymerName, setPolymerName] = useState("");
  const [polymerSmiles, setPolymerSmiles] = useState("");
  const [result, setResult] = useState<null | {
    name: string;
    biodegradable: boolean;
    timeframe: string;
    conditions: string[];
    classification: string;
    biodegradabilityScore: number; // Added score
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      try {
        // Mock data with biodegradabilityScore (0-100 scale)
        const mockResults = {
          PLA: {
            name: "Polylactic Acid (PLA)",
            biodegradable: true,
            timeframe: "3-6 months",
            conditions: ["Industrial composting", "High temperature", "Microbial activity"],
            classification: "Biodegradable polymer",
            biodegradabilityScore: 85,
          },
          PET: {
            name: "Polyethylene Terephthalate (PET)",
            biodegradable: false,
            timeframe: "450+ years",
            conditions: ["UV exposure can cause fragmentation", "Does not fully biodegrade"],
            classification: "Non-biodegradable polymer",
            biodegradabilityScore: 10,
          },
          PCL: {
            name: "Polycaprolactone (PCL)",
            biodegradable: true,
            timeframe: "2-3 years",
            conditions: ["Soil burial", "Composting", "Aquatic environments"],
            classification: "Biodegradable polymer",
            biodegradabilityScore: 75,
          },
          PHB: {
            name: "Polyhydroxybutyrate (PHB)",
            biodegradable: true,
            timeframe: "1-2 years",
            conditions: ["Soil", "Marine environments", "Anaerobic digestion"],
            classification: "Biodegradable polymer",
            biodegradabilityScore: 80,
          },
        };

        const input = inputType === "name" ? polymerName.toUpperCase() : "PLA";

        if (mockResults[input]) {
          setResult(mockResults[input]);
        } else {
          setResult({
            name: inputType === "name" ? polymerName : "Unknown polymer",
            biodegradable: false,
            timeframe: "Unknown",
            conditions: ["Insufficient data"],
            classification: "Unknown classification",
            biodegradabilityScore: 0,
          });
        }

        setLoading(false);
      } catch (err) {
        setError("An error occurred while processing your request. Please try again.");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header and nav omitted for brevity */}
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {/* Title and description omitted for brevity */}

          <div className="grid gap-8 md:grid-cols-2">
            {/* Input form card omitted for brevity */}

            <Card>
              <CardHeader>
                <CardTitle>Classification Results</CardTitle>
                <CardDescription>Biodegradability analysis and classification</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{result.name}</h3>
                      <div className="flex items-center mt-2">
                        <div
                          className={`w-3 h-3 rounded-full mr-2 ${result.biodegradable ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <span className={result.biodegradable ? "text-green-600" : "text-red-600"}>
                          {result.biodegradable ? "Biodegradable" : "Non-biodegradable"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Classification</h4>
                      <p>{result.classification}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Degradation Timeframe</h4>
                      <p>{result.timeframe}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Degradation Conditions</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {result.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Biodegradability Score</h4>
                      <p>{result.biodegradabilityScore} / 100</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 mb-4"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <p>No polymer analyzed yet</p>
                    <p className="text-sm mt-2">Enter polymer details and click Analyze</p>
                  </div>
                )}
              </CardContent>
              {result && (
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setResult(null)}>
                    Clear Results
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
      {/* Footer omitted for brevity */}
    </div>
  );
}
