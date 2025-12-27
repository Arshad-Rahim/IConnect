import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle2, Sparkles, User, Mail as MailIcon, Phone, Smartphone } from "lucide-react"

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    brand: "",
    model: "",
    issue: "",
    preferredDate: "",
    preferredTime: "",
    additionalNotes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Booking submitted:", formData)
    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="p-12 bg-gradient-to-br from-card to-primary/5 border-border text-center shadow-2xl animate-fade-in-up">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
                <CheckCircle2 className="text-white" size={48} />
              </div>
              <h1 className="text-4xl font-bold text-card-foreground mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Thank you for choosing iConnect. We've received your booking request and will contact you within 24
                hours to confirm your appointment.
              </p>
              <div className="space-y-3 text-left bg-muted/30 p-6 rounded-xl mb-8 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name:
                  </span>
                  <span className="text-card-foreground font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Device:
                  </span>
                  <span className="text-card-foreground font-semibold">
                    {formData.brand} {formData.model}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date:
                  </span>
                  <span className="text-card-foreground font-semibold">{formData.preferredDate}</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => setSubmitted(false)}
              >
                Book Another Service
              </Button>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.15),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,200,0.15),transparent_50%)] animate-pulse-slow" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Quick & Easy Booking</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground text-balance">
              Book Your Repair
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Schedule your device repair in minutes. Fill out the form below and we'll confirm your appointment within
              24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form - Enhanced */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-border shadow-xl animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Personal Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Device Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Smartphone className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Device Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="deviceType" className="text-sm font-medium">Device Type *</Label>
                    <Select
                      required
                      value={formData.deviceType}
                      onValueChange={(value) => handleInputChange("deviceType", value)}
                    >
                      <SelectTrigger className="border-2 focus:border-primary transition-colors">
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile">Mobile Phone</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand" className="text-sm font-medium">Brand *</Label>
                    <Input
                      id="brand"
                      required
                      placeholder="e.g., Apple, Samsung, Dell"
                      value={formData.brand}
                      onChange={(e) => handleInputChange("brand", e.target.value)}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="model" className="text-sm font-medium">Model *</Label>
                    <Input
                      id="model"
                      required
                      placeholder="e.g., iPhone 14 Pro, Samsung Galaxy S23, MacBook Pro 2022"
                      value={formData.model}
                      onChange={(e) => handleInputChange("model", e.target.value)}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="issue" className="text-sm font-medium">Issue Description *</Label>
                    <Select
                      required
                      value={formData.issue}
                      onValueChange={(value) => handleInputChange("issue", value)}
                    >
                      <SelectTrigger className="border-2 focus:border-primary transition-colors">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="screen">Screen Damage</SelectItem>
                        <SelectItem value="battery">Battery Issues</SelectItem>
                        <SelectItem value="charging">Charging Problems</SelectItem>
                        <SelectItem value="water">Water Damage</SelectItem>
                        <SelectItem value="software">Software Issues</SelectItem>
                        <SelectItem value="hardware">Hardware Problems</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Appointment Details</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-medium">Preferred Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="date"
                        type="date"
                        required
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-medium">Preferred Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={18} />
                      <Select
                        required
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange("preferredTime", value)}
                      >
                        <SelectTrigger className="pl-10 border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9-11">9:00 AM - 11:00 AM</SelectItem>
                          <SelectItem value="11-13">11:00 AM - 1:00 PM</SelectItem>
                          <SelectItem value="13-15">1:00 PM - 3:00 PM</SelectItem>
                          <SelectItem value="15-17">3:00 PM - 5:00 PM</SelectItem>
                          <SelectItem value="17-19">5:00 PM - 7:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="notes" className="text-sm font-medium">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information about your device or issue..."
                      rows={4}
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit Booking Request
                <CheckCircle2 className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service. We'll contact you within 24 hours to confirm
                your appointment.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Info Cards - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Quick Confirmation",
                desc: "We'll confirm your appointment within 24 hours via email or phone",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Clock,
                title: "Fast Service",
                desc: "Most repairs completed within 24-48 hours of drop-off",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: CheckCircle2,
                title: "No Obligation",
                desc: "Free diagnostic with no commitment required if you choose not to repair",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="group p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}