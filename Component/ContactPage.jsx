"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, GraduationCap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Macotech</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re here to help with your questions about admissions, academics, health tech programs, 
            and student life. Reach out to us via phone, email, or the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>General Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Campus Address</p>
                    <p className="text-muted-foreground">
                      Madonna College of Health Technology
                      <br />
                      Umuahia South, Abia State
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Main Office</p>
                    <p className="text-muted-foreground">+234 800 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">General Email</p>
                    <p className="text-muted-foreground">info@macotech.edu.ng</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts / FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Departments & FAQs</CardTitle>
                <CardDescription>
                  Find department contacts and answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="admissions">
                    <AccordionTrigger>Admissions Office</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Questions about applications, entry requirements, or admission status.
                      </p>
                      <p><strong>Phone:</strong> +234 800 234 5678</p>
                      <p><strong>Email:</strong> admissions@macotech.edu.ng</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="programs">
                    <AccordionTrigger>Available Programs</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        We offer accredited programs in Community Health, Public Health, Pharmacy Technicians,
                        Medical Lab Science, and more. Full-time and part-time options available.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fees">
                    <AccordionTrigger>School Fees & Payment Plans</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Tuition varies by program. Payment can be made per semester,
                        with flexible installment options for some courses.
                      </p>
                      <p><strong>Email:</strong> bursary@macotech.edu.ng</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="housing">
                    <AccordionTrigger>Accommodation & Student Life</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        On-campus hostels are available for both male and female students. 
                        Student services also cover welfare, extracurriculars, and support.
                      </p>
                      <p><strong>Email:</strong> studentlife@macotech.edu.ng</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq">
                    <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <p><strong>Q:</strong> Do you accept international students?</p>
                      <p>A: Yes, international applicants are welcome and guided through visa processing.</p>
                      <p><strong>Q:</strong> Can I apply online?</p>
                      <p>A: Yes, applications can be started through our admissions portal.</p>
                      <p><strong>Q:</strong> Can I Write the exams Online?</p>
                      <p>A: Though the Application can be online via the site, the exams is wriitten offline in the college auditorium.</p>
                      <p><strong>Q:</strong> What are the entry requirements?</p>
                      <p>A: WAEC/NECO with credits in English, Mathematics, Biology, and Chemistry.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we’ll respond within 24–48 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleInputChange} placeholder="Please provide details about your inquiry..." />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
          <Card>
            <CardHeader>
              <CardTitle>Campus Location</CardTitle>
              <CardDescription>Visit us at our Umuahia campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.127691572358!2d7.485!3d5.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10428e3fdbb7ad7d%3A0x71d6a02c8df2e3f2!2sMadonna%20College%20of%20Health%20Technology%20Umuahia!5e0!3m2!1sen!2sng!4v1693392234567!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
