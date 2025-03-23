"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function ComparePage() {
  const [polymer1, setPolymer1] = useState("");
  const [polymer2, setPolymer2] = useState("");
  const [results, setResults] = useState<null | {
    polymer1: { name: string; overallScore: number };
    polymer2: { name: string; overallScore: number };
    recommendation: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const [response1, response2] = await Promise.all([
        fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ polymerName: polymer1 }),
        }),
        fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ polymerName: polymer2 }),
        }),
      ]);

      const data1 = await response1.json();
      const data2 = await response2.json();

      if (!response1.ok || !response2.ok) {
        setError("One or both polymers not found. Please try different names.");
        setLoading(false);
        return;
      }

      const polymer1Data = { name: data1.name, overallScore: data1.overallScore };
      const polymer2Data = { name: data2.name, overallScore: data2.overallScore };

      let recommendation = "";
      if (polymer1Data.overallScore > polymer2Data.overallScore) {
        recommendation = `${polymer1Data.name} is more sustainable than ${polymer2Data.name} with a score of ${polymer1Data.overallScore} vs. ${polymer2Data.overallScore}.`;
      } else if (polymer2Data.overallScore > polymer1Data.overallScore) {
        recommendation = `${polymer2Data.name} is more sustainable than ${polymer1Data.name} with a score of ${polymer2Data.overallScore} vs. ${polymer1Data.overallScore}.`;
      } else {
        recommendation = `Both polymers have the same sustainability score (${polymer1Data.overallScore}).`;
      }

      setResults({ polymer1: polymer1Data, polymer2: polymer2Data, recommendation });
    } catch (err) {
      setError("API request failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-lg font-semibold">GreenIQ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Home</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/classify">Classify</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sustainability">Sustainability</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/compare">Compare</Link>
        </nav>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Polymer Comparison</h1>
            <p className="text-gray-500 md:text-xl">Compare the sustainability of two polymers side by side</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Compare Polymers</CardTitle>
              <CardDescription>Enter two polymer names to compare their sustainability characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="polymer-1">First Polymer</Label>
                    <Input id="polymer-1" placeholder="e.g., PLA" value={polymer1} onChange={(e) => setPolymer1(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="polymer-2">Second Polymer</Label>
                    <Input id="polymer-2" placeholder="e.g., PET" value={polymer2} onChange={(e) => setPolymer2(e.target.value)} required />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                  {loading ? "Comparing..." : "Compare Polymers"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {results && (
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{results.polymer1.name}</CardTitle>
                  <CardDescription>Sustainability Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-green-600 text-center">{results.polymer1.overallScore}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{results.polymer2.name}</CardTitle>
                  <CardDescription>Sustainability Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-green-600 text-center">{results.polymer2.overallScore}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {results && (
            <Card className="mt-6">
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium mb-2">Recommendation</h4>
                  <p>{results.recommendation}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setResults(null)}>Clear Results</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
