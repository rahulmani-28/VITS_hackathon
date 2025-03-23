// // // "use client"

// // // import { useState } from "react"
// // // import Link from "next/link"
// // // import { Button } from "@/components/ui/button"
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Input } from "@/components/ui/input"
// // // import { Label } from "@/components/ui/label"
// // // import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// // // import { Progress } from "@/components/ui/progress"

// // // export default function SustainabilityPage() {
// // //   const [polymerName, setPolymerName] = useState("")
// // //   const [result, setResult] = useState<null | {
// // //     name: string
// // //     overallScore: number
// // //     categories: {
// // //       biodegradability: number
// // //       toxicity: number
// // //       recyclability: number
// // //     }
// // //     recommendations: string[]
// // //   }>(null)
// // //   const [loading, setLoading] = useState(false)
// // //   const [error, setError] = useState("")

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setLoading(true)
// // //     setError("")
// // //     setResult(null)

// // //     try {
// // //       const response = await fetch("http://127.0.0.1:5000/predict", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ polymerName }),
// // //       })

// // //       const data = await response.json()
// // //       if (response.ok) {
// // //         setResult(data)
// // //       } else {
// // //         setError("Polymer not found. Please try another.")
// // //       }
// // //     } catch (err) {
// // //       setError("API request failed.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const getScoreColor = (score: number) => {
// // //     if (score >= 80) return "bg-green-600"
// // //     if (score >= 60) return "bg-yellow-500"
// // //     if (score >= 40) return "bg-orange-500"
// // //     return "bg-red-600"
// // //   }

// // //   return (
// // //     <div className="container mx-auto p-6">
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Sustainability Scoring</CardTitle>
// // //           <CardDescription>Enter the polymer name to evaluate its sustainability.</CardDescription>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <Label htmlFor="polymer-name">Polymer Name</Label>
// // //             <Input
// // //               id="polymer-name"
// // //               placeholder="e.g., PLA, PET, PCL, PHB"
// // //               value={polymerName}
// // //               onChange={(e) => setPolymerName(e.target.value)}
// // //               required
// // //             />
// // //             {error && (
// // //               <Alert variant="destructive">
// // //                 <AlertTitle>Error</AlertTitle>
// // //                 <AlertDescription>{error}</AlertDescription>
// // //               </Alert>
// // //             )}
// // //             <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 w-full">
// // //               {loading ? "Analyzing..." : "Check Sustainability"}
// // //             </Button>
// // //           </form>
// // //         </CardContent>
// // //       </Card>

// // //       {result && (
// // //         <Card className="mt-6">
// // //           <CardHeader>
// // //             <CardTitle>{result.name}</CardTitle>
// // //             <CardDescription>Overall Score: {result.overallScore}</CardDescription>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <div className="space-y-4">
// // //               {Object.entries(result.categories).map(([category, score]) => (
// // //                 <div key={category} className="space-y-1">
// // //                   <div className="flex justify-between">
// // //                     <span className="text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
// // //                     <span className="text-sm font-medium">{score}/100</span>
// // //                   </div>
// // //                   <Progress value={score} className={getScoreColor(score)} />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <h4 className="font-medium mt-4">Recommendations:</h4>
// // //             <ul className="list-disc pl-5 space-y-1">
// // //               {result.recommendations.map((recommendation, index) => (
// // //                 <li key={index}>{recommendation}</li>
// // //               ))}
// // //             </ul>
// // //           </CardContent>
// // //         </Card>
// // //       )}
// // //     </div>
// // //   )
// // // }


// // "use client"

// // import { useState } from "react"
// // import Link from "next/link"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// // import { Progress } from "@/components/ui/progress"

// // export default function SustainabilityPage() {
// //   const [polymerName, setPolymerName] = useState("")
// //   const [result, setResult] = useState<null | {
// //     name: string
// //     overallScore: number
// //     categories: {
// //       biodegradability: number
// //       toxicity: number
// //       recyclability: number
// //     }
// //     recommendations: string[]
// //   }>(null)
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState("")

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setError("")
// //     setResult(null)

// //     try {
// //       const response = await fetch("http://127.0.0.1:5000/predict", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ polymerName }),
// //       })

// //       console.log("API Request:", polymerName)  // Debugging
// //       console.log("API Response:", response)  // Debugging

// //       const data = await response.json()
// //       if (response.ok) {
// //         console.log("API Data:", data)  // Debugging
// //         setResult(data)
// //       } else {
// //         setError(data.error || "Polymer not found. Please try another.")
// //       }
// //     } catch (err) {
// //       console.error("API request failed:", err)
// //       setError("API request failed. Check console for details.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const getScoreColor = (score: number) => {
// //     if (score >= 80) return "bg-green-600"
// //     if (score >= 60) return "bg-yellow-500"
// //     if (score >= 40) return "bg-orange-500"
// //     return "bg-red-600"
// //   }

// //   return (
// //     <div className="container mx-auto p-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Sustainability Scoring</CardTitle>
// //           <CardDescription>Enter the polymer name to evaluate its sustainability.</CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <Label htmlFor="polymer-name">Polymer Name</Label>
// //             <Input
// //               id="polymer-name"
// //               placeholder="e.g., PLA, PET, PCL, PHB"
// //               value={polymerName}
// //               onChange={(e) => setPolymerName(e.target.value)}
// //               required
// //             />
// //             {error && (
// //               <Alert variant="destructive">
// //                 <AlertTitle>Error</AlertTitle>
// //                 <AlertDescription>{error}</AlertDescription>
// //               </Alert>
// //             )}
// //             <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 w-full">
// //               {loading ? "Analyzing..." : "Check Sustainability"}
// //             </Button>
// //           </form>
// //         </CardContent>
// //       </Card>

// //       {result && (
// //         <Card className="mt-6">
// //           <CardHeader>
// //             <CardTitle>{result.name}</CardTitle>
// //             <CardDescription>Overall Score: {result.overallScore}</CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-4">
// //               {Object.entries(result.categories).map(([category, score]) => (
// //                 <div key={category} className="space-y-1">
// //                   <div className="flex justify-between">
// //                     <span className="text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
// //                     <span className="text-sm font-medium">{score}/100</span>
// //                   </div>
// //                   <Progress value={score} className={getScoreColor(score)} />
// //                 </div>
// //               ))}
// //             </div>
// //             <h4 className="font-medium mt-4">Recommendations:</h4>
// //             <ul className="list-disc pl-5 space-y-1">
// //               {result.recommendations.map((recommendation, index) => (
// //                 <li key={index}>{recommendation}</li>
// //               ))}
// //             </ul>
// //           </CardContent>
// //         </Card>
// //       )}
// //     </div>
// //   )
// // }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Leaf, AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Progress } from "@/components/ui/progress";

// export default function SustainabilityPage() {
//   const [polymerName, setPolymerName] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ polymerName }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setResult(data);
//       } else {
//         setError(data.error || "Polymer not found. Please try another.");
//       }
//     } catch (err) {
//       setError("API request failed. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getScoreColor = (score) => {
//     if (score >= 80) return "bg-green-600";
//     if (score >= 60) return "bg-yellow-500";
//     if (score >= 40) return "bg-orange-500";
//     return "bg-red-600";
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center border-b">
//         <Link className="flex items-center justify-center" href="/">
//           <Leaf className="h-6 w-6 text-green-600" />
//           <span className="ml-2 text-lg font-semibold">BioDegradePro</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Home</Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/classify">Classify</Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sustainability">Sustainability</Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/compare">Compare</Link>
//         </nav>
//       </header>
//       <main className="flex-1 py-12">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center mb-8">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sustainability Scoring</h1>
//               <p className="text-gray-500 md:text-xl">Evaluate the environmental impact and sustainability of polymers</p>
//             </div>
//           </div>
//           <div className="grid gap-8 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Input Polymer Information</CardTitle>
//                 <CardDescription>Enter the polymer name to get a comprehensive sustainability score</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit}>
//                   <div className="space-y-4">
//                     <Label htmlFor="polymer-name">Polymer Name</Label>
//                     <Input
//                       id="polymer-name"
//                       placeholder="e.g., PLA, PET, PCL, PHB"
//                       value={polymerName}
//                       onChange={(e) => setPolymerName(e.target.value)}
//                       required
//                     />
//                     {error && (
//                       <Alert variant="destructive">
//                         <AlertCircle className="h-4 w-4" />
//                         <AlertTitle>Error</AlertTitle>
//                         <AlertDescription>{error}</AlertDescription>
//                       </Alert>
//                     )}
//                     <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
//                       {loading ? "Analyzing..." : "Calculate Sustainability Score"}
//                     </Button>
//                   </div>
//                 </form>
//               </CardContent>
//               <CardFooter className="text-sm text-gray-500">Try examples: PLA, PET, PCL, PHB</CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Sustainability Results</CardTitle>
//                 <CardDescription>Comprehensive sustainability analysis and scoring</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {result ? (
//                   <div className="space-y-6">
//                     <h3 className="font-semibold text-lg">{result.name}</h3>
//                     <p className="text-4xl font-bold text-green-600">{result.overallScore}</p>
//                     <div className="space-y-4">
//                       {Object.entries(result.categories).map(([key, value]) => (
//                         <div key={key} className="mb-2">
//                           <p className="text-sm font-semibold">{key}</p>
//                           <div className="w-full bg-gray-200 rounded-full h-3">
//                             <div className={`h-3 rounded-full ${getScoreColor(value)}`} style={{ width: `${value}%` }}></div>
//                           </div>
//                           <p className="text-sm">{value}/100</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-gray-400 flex flex-col items-center justify-center h-full">
//                     <p>No sustainability analysis yet</p>
//                     <p className="text-sm">Enter polymer name and click Calculate</p>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

// Score Circle Component
const ScoreCircle = ({ score }: { score: number }) => {
  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return "border-green-500";
    if (score >= 50) return "border-yellow-500";
    return "border-red-500";
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-24 h-24 rounded-full border-4 ${getColor()} flex items-center justify-center`}>
        <span className="text-xl font-bold">{score}</span>
      </div>
      <p className="mt-2 text-gray-600">Overall Score</p>
    </div>
  );
};

export default function SustainabilityPage() {
  const [polymerName, setPolymerName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
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
        setResult(data);
      } else {
        setError(data.error || "Polymer not found. Please try another.");
      }
    } catch (err) {
      setError("API request failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-600";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-600";
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
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sustainability Scoring</h1>
              <p className="text-gray-500 md:text-xl">Evaluate the environmental impact and sustainability of polymers</p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input Polymer Information</CardTitle>
                <CardDescription>Enter the polymer name to get a comprehensive sustainability score</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <Label htmlFor="polymer-name">Polymer Name</Label>
                    <Input
                      id="polymer-name"
                      placeholder="e.g., PLA, PET, PCL, PHB"
                      value={polymerName}
                      onChange={(e) => setPolymerName(e.target.value)}
                      required
                    />
                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                      {loading ? "Analyzing..." : "Calculate Sustainability Score"}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">Try examples: PLA, PET, PCL, PHB</CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Results</CardTitle>
                <CardDescription>Comprehensive sustainability analysis and scoring</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <h3 className="font-semibold text-lg">{result.name}</h3>

                    {/* Score Circle Component */}
                    <div className="flex justify-center">
                      <ScoreCircle score={result.overallScore} />
                    </div>

                    <div className="space-y-4">
                      {Object.entries(result.categories).map(([key, value]) => (
                        <div key={key} className="mb-2">
                          <p className="text-sm font-semibold">{key}</p>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className={`h-3 rounded-full ${getScoreColor(value)}`} style={{ width: `${value}%` }}></div>
                          </div>
                          <p className="text-sm">{value}/100</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 flex flex-col items-center justify-center h-full">
                    <p>No sustainability analysis yet</p>
                    <p className="text-sm">Enter polymer name and click Calculate</p>
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
