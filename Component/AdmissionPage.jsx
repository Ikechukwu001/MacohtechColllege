"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, DollarSign, CheckCircle } from "lucide-react"

export default function AdmissionPage() {
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    startDate: "",
    previousEducation: "",
    essay: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application submitted:", applicationData)
  }

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Admissions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey at <span className="font-semibold">Madonna College of Health Technology, Umuahia</span>.  
            We are committed to training highly skilled health professionals who will make a difference in healthcare
            delivery across Nigeria and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Admission Information */}
          <div className="space-y-8">
            {/* Why Choose MACOHTECH */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Why Choose MACOHTECH?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Accredited Health Programs</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-muted-foreground">Years of Academic Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm text-muted-foreground">Health Technology Courses</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">Strong</div>
                    <div className="text-sm text-muted-foreground">Clinical & Practical Training</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admission Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Admission Requirements</CardTitle>
                <CardDescription>Guidelines for applying to MACOHTECH</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="certificate">
                    <AccordionTrigger>Certificate & Diploma Programs</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground">Required Documents:</h4>
                        <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                          <li>• WAEC/NECO/NABTEB O’Level results (minimum 5 credits incl. English, Maths, Biology, Chemistry, Physics)</li>
                          <li>• Birth certificate or age declaration</li>
                          <li>• Local government identification</li>
                          <li>• Two recent passport photographs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Minimum Requirements:</h4>
                        <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                          <li>• Five (5) credit passes at not more than two sittings</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="higher-diploma">
                    <AccordionTrigger>Higher Diploma Programs</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground">Required Documents:</h4>
                        <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                          <li>• National Diploma (ND) in related field</li>
                          <li>• O’Level result as stated above</li>
                          <li>• Transcript or statement of result</li>
                          <li>• NYSC discharge/exemption letter (if applicable)</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Important Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Admission Opens</p>
                      <p className="text-sm text-muted-foreground">Application forms available</p>
                    </div>
                    <p className="font-bold text-accent">April</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Screening/Entrance Exam</p>
                      <p className="text-sm text-muted-foreground">For new applicants</p>
                    </div>
                    <p className="font-bold text-accent">July</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Resumption Date</p>
                      <p className="text-sm text-muted-foreground">Academic session begins</p>
                    </div>
                    <p className="font-bold text-accent">September</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Application</CardTitle>
                <CardDescription>
                  Fill this form to apply to Madonna College of Health Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" value={applicationData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" value={applicationData.lastName} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" name="email" value={applicationData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" name="phone" value={applicationData.phone} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="program">Choose Program *</Label>
                    <select
                      id="program"
                      name="program"
                      value={applicationData.program}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2 bg-input"
                    >
                      <option value="">Select a program</option>
                      <option value="community-health">Community Health Extension Worker (CHEW)</option>
                      <option value="pharmacy-tech">Pharmacy Technician</option>
                      <option value="medical-lab">Medical Laboratory Technician</option>
                      <option value="health-info">Health Information Management</option>
                      <option value="environmental-health">Environmental Health Technology</option>
                      <option value="public-health">Public Health</option>
                      <option value="dispensing-opticianry">Dispensing Opticianry</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="previousEducation">Previous Education *</Label>
                    <Input
                      id="previousEducation"
                      name="previousEducation"
                      value={applicationData.previousEducation}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., WAEC, NECO, Diploma..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="essay">Personal Statement</Label>
                    <Textarea
                      id="essay"
                      name="essay"
                      rows={5}
                      value={applicationData.essay}
                      onChange={handleInputChange}
                      placeholder="Why do you want to study at MACOHTECH?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Submit Application
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    You will be contacted with further instructions after submission.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Fees & Financial Aid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>School Fees & Support</span>
                </CardTitle>
                <CardDescription>Affordable training for healthcare professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">Flexible Payment</h4>
                  <p className="text-sm text-muted-foreground">Installment payment options available</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">Scholarships</h4>
                  <p className="text-sm text-muted-foreground">Limited scholarships for outstanding students</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">Support</h4>
                  <p className="text-sm text-muted-foreground">Counseling and guidance for students in need</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
