// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { Leaf, AlertCircle } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// export default function ClassifyPage() {
//   const [inputType, setInputType] = useState("name")
//   const [polymerName, setPolymerName] = useState("")
//   const [polymerSmiles, setPolymerSmiles] = useState("")
//   const [result, setResult] = useState<null | {
//     name: string
//     biodegradable: boolean
//     timeframe: string
//     conditions: string[]
//     classification: string
//   }>(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     // Simulate API call with timeout
//     setTimeout(() => {
//       try {
//         // This is mock data - in a real application, this would come from an API
//         const mockResults = {
//           PLA: {
//             name: "Polylactic Acid (PLA)",
//             biodegradable: true,
//             timeframe: "3-6 months",
//             conditions: ["Industrial composting", "High temperature", "Microbial activity"],
//             classification: "Biodegradable polymer",
//           },
//           PET: {
//             name: "Polyethylene Terephthalate (PET)",
//             biodegradable: false,
//             timeframe: "450+ years",
//             conditions: ["UV exposure can cause fragmentation", "Does not fully biodegrade"],
//             classification: "Non-biodegradable polymer",
//           },
//           PCL: {
//             name: "Polycaprolactone (PCL)",
//             biodegradable: true,
//             timeframe: "2-3 years",
//             conditions: ["Soil burial", "Composting", "Aquatic environments"],
//             classification: "Biodegradable polymer",
//           },
//           PHB: {
//             name: "Polyhydroxybutyrate (PHB)",
//             biodegradable: true,
//             timeframe: "1-2 years",
//             conditions: ["Soil", "Marine environments", "Anaerobic digestion"],
//             classification: "Biodegradable polymer",
//           },
//         }

//         const input = inputType === "name" ? polymerName.toUpperCase() : "PLA" // Default to PLA for SMILES input in this demo

//         if (mockResults[input]) {
//           setResult(mockResults[input])
//         } else {
//           setResult({
//             name: inputType === "name" ? polymerName : "Unknown polymer",
//             biodegradable: false,
//             timeframe: "Unknown",
//             conditions: ["Insufficient data"],
//             classification: "Unknown classification",
//           })
//         }

//         setLoading(false)
//       } catch (err) {
//         setError("An error occurred while processing your request. Please try again.")
//         setLoading(false)
//       }
//     }, 1500)
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center border-b">
//         <Link className="flex items-center justify-center" href="/">
//           <Leaf className="h-6 w-6 text-green-600" />
//           <span className="ml-2 text-lg font-semibold">GreenIQ</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
//             Home
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/classify">
//             Classify
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sustainability">
//             Sustainability
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/compare">
//             Compare
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1 py-12">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center mb-8">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Polymer Classification</h1>
//               <p className="text-gray-500 md:text-xl">Determine the biodegradability characteristics of polymers</p>
//             </div>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Input Polymer Information</CardTitle>
//                 <CardDescription>
//                   Enter either the polymer name or SMILES notation to analyze its biodegradability
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit}>
//                   <Tabs defaultValue="name" className="w-full" onValueChange={setInputType}>
//                     <TabsList className="grid w-full grid-cols-2">
//                       <TabsTrigger value="name">Polymer Name</TabsTrigger>
//                       <TabsTrigger value="smiles">SMILES Notation</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="name" className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="polymer-name">Polymer Name</Label>
//                         <Input
//                           id="polymer-name"
//                           placeholder="e.g., PLA, PET, PCL, PHB"
//                           value={polymerName}
//                           onChange={(e) => setPolymerName(e.target.value)}
//                           required={inputType === "name"}
//                         />
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="smiles" className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="smiles">SMILES Notation</Label>
//                         <Textarea
//                           id="smiles"
//                           placeholder="Enter SMILES notation"
//                           className="min-h-[100px]"
//                           value={polymerSmiles}
//                           onChange={(e) => setPolymerSmiles(e.target.value)}
//                           required={inputType === "smiles"}
//                         />
//                       </div>
//                     </TabsContent>
//                   </Tabs>

//                   {error && (
//                     <Alert variant="destructive" className="mt-4">
//                       <AlertCircle className="h-4 w-4" />
//                       <AlertTitle>Error</AlertTitle>
//                       <AlertDescription>{error}</AlertDescription>
//                     </Alert>
//                   )}

//                   <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700" disabled={loading}>
//                     {loading ? "Analyzing..." : "Analyze Polymer"}
//                   </Button>
//                 </form>
//               </CardContent>
//               <CardFooter className="flex justify-between text-sm text-gray-500">
//                 <p>Try examples: PLA, PET, PCL, PHB</p>
//               </CardFooter>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Classification Results</CardTitle>
//                 <CardDescription>Biodegradability analysis and classification</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {result ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-semibold text-lg">{result.name}</h3>
//                       <div className="flex items-center mt-2">
//                         <div
//                           className={`w-3 h-3 rounded-full mr-2 ${result.biodegradable ? "bg-green-500" : "bg-red-500"}`}
//                         ></div>
//                         <span className={result.biodegradable ? "text-green-600" : "text-red-600"}>
//                           {result.biodegradable ? "Biodegradable" : "Non-biodegradable"}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <h4 className="font-medium">Classification</h4>
//                       <p>{result.classification}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <h4 className="font-medium">Degradation Timeframe</h4>
//                       <p>{result.timeframe}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <h4 className="font-medium">Degradation Conditions</h4>
//                       <ul className="list-disc pl-5 space-y-1">
//                         {result.conditions.map((condition, index) => (
//                           <li key={index}>{condition}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-12 w-12 mb-4"
//                     >
//                       <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
//                       <line x1="12" y1="9" x2="12" y2="13" />
//                       <line x1="12" y1="17" x2="12.01" y2="17" />
//                     </svg>
//                     <p>No polymer analyzed yet</p>
//                     <p className="text-sm mt-2">Enter polymer details and click Analyze</p>
//                   </div>
//                 )}
//               </CardContent>
//               {result && (
//                 <CardFooter>
//                   <Button variant="outline" className="w-full" onClick={() => setResult(null)}>
//                     Clear Results
//                   </Button>
//                 </CardFooter>
//               )}
//             </Card>
//           </div>
//         </div>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
//         <p className="text-xs text-gray-500">© 2025 BioDegradePro. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

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
    biodegradabilityScore: number;  // ✅ Added biodegradability score
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ polymerName }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult({
          name: data.name,
          biodegradable: data.categories.biodegradability > 50,  // ✅ Consider 50%+ as biodegradable
          timeframe: "Unknown", // Can be updated with additional logic
          conditions: [
            "Industrial composting recommended",
            "Avoid landfill disposal"
          ],
          classification: data.categories.biodegradability > 50 ? "Biodegradable Polymer" : "Non-Biodegradable Polymer",
          biodegradabilityScore: data.categories.biodegradability,  // ✅ Save biodegradability score
        });
      } else {
        setError(data.error || "Polymer not found. Please try another.");
      }
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Polymer Classification</h1>
            <p className="text-gray-500 md:text-xl">Determine the biodegradability characteristics of polymers</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input Polymer Information</CardTitle>
                <CardDescription>
                  Enter either the polymer name or SMILES notation to analyze its biodegradability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Tabs defaultValue="name" className="w-full" onValueChange={setInputType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="name">Polymer Name</TabsTrigger>
                      <TabsTrigger value="smiles">SMILES Notation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="name" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="polymer-name">Polymer Name</Label>
                        <Input
                          id="polymer-name"
                          placeholder="e.g., PLA, PET, PCL, PHB"
                          value={polymerName}
                          onChange={(e) => setPolymerName(e.target.value)}
                          required={inputType === "name"}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700" disabled={loading}>
                    {loading ? "Analyzing..." : "Analyze Polymer"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">Try examples: PLA, PET, PCL, PHB</CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Classification Results</CardTitle>
                <CardDescription>Biodegradability analysis and classification</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{result.name}</h3>

                    {/* ✅ Display biodegradability score */}
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium">Biodegradability Score:</p>
                      <span className="text-lg font-bold">{result.biodegradabilityScore.toFixed(1)}/100</span>
                    </div>

                    <div className="flex items-center mt-2">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${
                          result.biodegradabilityScore > 50 ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span className={result.biodegradabilityScore > 50 ? "text-green-600" : "text-red-600"}>
                        {result.biodegradabilityScore > 50 ? "Biodegradable" : "Non-biodegradable"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Classification</h4>
                      <p>{result.classification}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Degradation Conditions</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {result.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 flex flex-col items-center justify-center h-[300px]">
                    <p>No polymer analyzed yet</p>
                    <p className="text-sm mt-2">Enter polymer details and click Analyze</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
