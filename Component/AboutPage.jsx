"use client"

import Image from "next/image";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Heart,
  Users,
  Award,
  Stethoscope,
  BookOpen,
  Globe,
  Shield,
  Star,
  GraduationCap,
  Building2,
  Phone,
  Mail,
  MapPin,
  Tablets,
  TestTube2
} from "lucide-react"

export default function AboutPage() {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 1,
      title: "Community Health Extension Worker",
      icon: Heart,
      description: "Comprehensive training in community health, disease prevention, and health promotion.",
      duration: "3 years",
      degree: "CHEW",
    },
    {
      id: 2,
      title: "Public Health",
      icon: Users,
      description: "Community-focused health promotion and disease prevention strategies.",
      duration: "4 years",
      degree: "ND AND HND",
    },
    {
      id: 3,
      title: "Pharmacy Technician",
      icon: Tablets,
      description: "Pharmaceutical sciences, medication management, and patient care.",
      duration: "3 years",
      degree: "P.Tech",
    },
    {
      id: 4,
      title: "Medical Laboratory Technician",
      icon: TestTube2,
      description: "Laboratory diagnostics, clinical testing, and biomedical research techniques.",
      duration: "3 years",
      degree: "MLT",
    },
  ]

  const stats = [
    { number: "500+", label: "Graduates", icon: GraduationCap },
    { number: "98%", label: "Employment Rate After School", icon: Award },
    { number: "10+", label: "Clinical Partners", icon: Building2 },
    { number: "4.9/5", label: "Student Rating", icon: Star },
  ]

  const values = [
    {
      title: "Excellence",
      icon: Award,
      description: "Commitment to the highest standards in healthcare education and practice.",
    },
    {
      title: "Compassion",
      icon: Heart,
      description: "Fostering empathy and patient-centered care in all healthcare interactions.",
    },
    {
      title: "Innovation",
      icon: Stethoscope,
      description: "Embracing new technologies and methods to advance healthcare delivery.",
    },
    {
      title: "Integrity",
      icon: Shield,
      description: "Maintaining ethical standards and professional accountability in all endeavors.",
    },
  ]

  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      title: "Dean of Nursing",
      image: "/images/HeroImage1.jpg",
      credentials: "PhD, RN, FAAN",
    },
    {
      name: "Dr. Michael Chen",
      title: "Public Health Director",
      image: "/images/HeroImage1.jpg",
      credentials: "MD, MPH, FACPM",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Healthcare Administration Chair",
      image: "/images/HeroImage1.jpg",
      credentials: "PhD, MHA, FACHE",
    },
    {
      name: "Dr. James Wilson",
      title: "Medical Technology Director",
      image: "/images/HeroImage1.jpg",
      credentials: "PhD, MT(ASCP), FACB",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            Excellence <span className="text-pink-500">in Healthcare</span> Education
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            For over 35 years, we have been preparing compassionate healthcare professionals who make a difference in
            communities worldwide through innovative education, research, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-500/90">
              Explore Programs
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To advance health and wellness through transformative education, innovative research, and meaningful
                community engagement. We prepare healthcare professionals who lead with compassion, think critically,
                and serve with purpose.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-black" />
                  <span>Evidence-based curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-pink-500" />
                  <span>Global health perspective</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-pink-500" />
                  <span>Community-centered approach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/macohtechCollege.jpeg"
                alt="Healthcare Education Building"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Measurable outcomes that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <IconComponent className="h-8 w-8 text-pink-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do in education, research, and service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-pink-500" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Academic Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare education programs designed for tomorrow's leaders
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon
              const isSelected = selectedProgram === program.id

              return (
                <Card
                  key={program.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isSelected ? "ring-2 ring-accent shadow-lg" : ""
                  }`}
                  onClick={() => setSelectedProgram(isSelected ? null : program.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary">{program.degree}</Badge>
                          <Badge variant="outline">{program.duration}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    {isSelected && (
                      <div className="animate-fade-in">
                        <Button className="w-full">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Distinguished Faculty</h2>
            <p className="text-lg text-muted-foreground">
              Learn from experienced educators and practitioners who are leaders in their fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-pink-500 font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">We're here to help you take the next step in your career</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-pink-500 mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground"> +234 801 234 5678</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-pink-500 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@madonnacollegehealth.edu.ng</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-pink-500 mb-4" />
              <h3 className="font-semibold mb-2">Visit</h3>
              <p className="text-muted-foreground">
                Olokoro Umuahia South
                <br />
                Abia State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
