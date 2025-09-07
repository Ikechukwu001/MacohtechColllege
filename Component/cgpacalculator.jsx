"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Calculator,
  BookOpen,
  GraduationCap,
  Award,
  Info,
  Plus,
  Trash2,
  BarChart3,
} from "lucide-react"

export default function CGPACalculatorPage() {
  const [courses, setCourses] = useState([
    { id: 1, courseName: "", creditHours: "", grade: "", gradePoints: 0 },
  ])
  const [result, setResult] = useState(null)

  const gradeScale = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    F: 0.0,
  }

  const addCourse = () => {
    const newId = Math.max(...courses.map((c) => c.id)) + 1
    setCourses([
      ...courses,
      { id: newId, courseName: "", creditHours: "", grade: "", gradePoints: 0 },
    ])
  }

  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id))
    }
  }

  const updateCourse = (id, field, value) => {
    setCourses(
      courses.map((course) => {
        if (course.id === id) {
          const updated = { ...course, [field]: value }
          if (field === "grade") {
            updated.gradePoints = gradeScale[value] || 0
          }
          return updated
        }
        return course
      }),
    )
  }

  const calculateCGPA = () => {
    const validCourses = courses.filter(
      (course) =>
        course.creditHours &&
        course.grade &&
        !isNaN(Number.parseFloat(course.creditHours)),
    )

    if (validCourses.length === 0) {
      alert("Please add at least one valid course with credit hours and grade.")
      return
    }

    const totalCreditHours = validCourses.reduce(
      (sum, course) => sum + Number.parseFloat(course.creditHours),
      0,
    )

    const totalGradePoints = validCourses.reduce(
      (sum, course) =>
        sum + Number.parseFloat(course.creditHours) * course.gradePoints,
      0,
    )

    const cgpa = totalGradePoints / totalCreditHours

    setResult({
      cgpa: cgpa.toFixed(2),
      totalCreditHours,
      totalGradePoints: totalGradePoints.toFixed(2),
      coursesCount: validCourses.length,
    })
  }

  const resetCalculator = () => {
    setCourses([
      { id: 1, courseName: "", creditHours: "", grade: "", gradePoints: 0 },
    ])
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-macoohtech-50 via-background to-macoohtech-100">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            CGPA Calculator
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Track your academic performance with Macohtech’s professional CGPA
            tool
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Understanding Academic Performance
            </h2>
            <p className="text-lg text-muted-foreground">
              Get clear insights into GPA and CGPA calculations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-xl ">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 " />
                  <CardTitle className="text-xl">What is GPA?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  GPA is a measure of your performance in a specific semester,
                  calculated by dividing total grade points by credit hours.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl ">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-6 w-6 " />
                  <CardTitle className="text-xl">What is CGPA?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  CGPA reflects your cumulative academic performance across all
                  semesters, showing the weighted average of your grades.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl ">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 " />
                  <CardTitle className="text-xl">Key Differences</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>📌 GPA: One semester</li>
                  <li>📌 CGPA: All semesters</li>
                  <li>📌 Both: 0.0 – 4.0 scale</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 shadow-lg ">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Enter Your Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-xl shadow-sm bg-white/70"
                >
                  <div className="md:col-span-2">
                    <Label>Course Name</Label>
                    <Input
                      placeholder="Mathematics 101"
                      value={course.courseName}
                      onChange={(e) =>
                        updateCourse(course.id, "courseName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Credit Hours</Label>
                    <Input
                      type="number"
                      placeholder="3"
                      min="0"
                      step="0.5"
                      value={course.creditHours}
                      onChange={(e) =>
                        updateCourse(course.id, "creditHours", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Grade</Label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={course.grade}
                      onChange={(e) =>
                        updateCourse(course.id, "grade", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      {Object.keys(gradeScale).map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button
                      onClick={() => removeCourse(course.id)}
                      variant="destructive"
                      size="sm"
                      disabled={courses.length === 1}
                      className="w-full"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  onClick={calculateCGPA}
                  size="lg"
                  className="bg-blue-600 hover:bg-black"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate CGPA
                </Button>
                <Button
                  onClick={resetCalculator}
                  size="lg"
                  variant="outline"
                  className="bg-black text-white"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="py-16 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border-black/10 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">
                  Your Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold mb-2">
                      {result.cgpa}
                    </div>
                    <p className="text-muted-foreground">CGPA</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold  mb-2">
                      {result.totalCreditHours}
                    </div>
                    <p className="text-muted-foreground">Credits</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold mb-2">
                      {result.totalGradePoints}
                    </div>
                    <p className="text-muted-foreground">Points</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold mb-2">
                      {result.coursesCount}
                    </div>
                    <p className="text-muted-foreground">Courses</p>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="mt-8 p-4 bg-white rounded-lg shadow">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Performance Insight
                  </h4>
                  {Number.parseFloat(result.cgpa) >= 3.7 && (
                    <p className="text-green-600 font-medium">
                      Excellent! You’re in the top tier 🚀
                    </p>
                  )}
                  {Number.parseFloat(result.cgpa) >= 3.0 &&
                    Number.parseFloat(result.cgpa) < 3.7 && (
                      <p className="text-blue-600 font-medium">
                        Good job! Keep up the solid work 👍
                      </p>
                    )}
                  {Number.parseFloat(result.cgpa) >= 2.0 &&
                    Number.parseFloat(result.cgpa) < 3.0 && (
                      <p className="text-yellow-600 font-medium">
                        Fair performance. You can improve 📘
                      </p>
                    )}
                  {Number.parseFloat(result.cgpa) < 2.0 && (
                    <p className="text-red-600 font-medium">
                      Below average. Seek guidance 📉
                    </p>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">
                    Formula: CGPA = Total Grade Points ÷ Total Credit Hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <section className="py-12 px-4 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need More Academic Support?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Macohtech helps you stay on track with smart tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="">
              Academic Resources
            </Button>
            <Button
              variant="outline"
              className=""
            >
              Study Tips
            </Button>
          </div>
        </div>
          <Button
    onClick={addCourse}
    size="lg"
    className="fixed bottom-6 right-6 rounded-full shadow-lg bg-black hover:bg-macoohtech-700 text-white p-5 flex items-center justify-center animate-bounce"
  >
    <Plus className="h-6 w-6" />
  </Button>

        
      </section>
    </div>
  )
}
