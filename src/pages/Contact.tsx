import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Sparkles, MessageCircle, HelpCircle } from "lucide-react"

export default function ContactPage() {
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
              <MessageCircle className="w-4 h-4 animate-pulse" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground text-balance">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions? Need a quote? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
                  <Phone className="w-4 h-4" />
                  <span>Contact Details</span>
                </div>
                <h2 className="text-3xl font-bold text-card-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're available during business hours to answer your questions and schedule repairs. Feel free to
                  call, email, or visit us in person.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="group p-6 bg-card border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        Phone
                      </h3>
                      <p className="text-muted-foreground font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 bg-card border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-accent transition-colors">
                        Email
                      </h3>
                      <p className="text-muted-foreground font-medium">info@iconnect.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 bg-card border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-secondary transition-colors">
                        Address
                      </h3>
                      <p className="text-muted-foreground font-medium">123 Tech Street</p>
                      <p className="text-muted-foreground font-medium">Silicon Valley, CA 94000</p>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 bg-card border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        Business Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p className="font-medium">Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p className="font-medium">Saturday: 10:00 AM - 6:00 PM</p>
                        <p className="font-medium">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
                <MapPin className="w-4 h-4" />
                <span>Our Location</span>
              </div>
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Find Us</h2>
              <Card className="p-6 bg-card border-border h-[600px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative z-10">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <MapPin className="text-white" size={40} />
                    </div>
                    <div>
                      <p className="text-card-foreground font-bold text-xl mb-3">Visit Our Service Center</p>
                      <p className="text-muted-foreground font-medium mb-1">123 Tech Street</p>
                      <p className="text-muted-foreground font-medium">Silicon Valley, CA 94000</p>
                    </div>
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <p className="text-sm text-muted-foreground">
                          Interactive map coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical repair take?",
                answer: "Most repairs are completed within 24-48 hours. Same-day service is available for urgent cases. We'll provide an estimated timeline when you bring in your device.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                question: "Do you offer a warranty?",
                answer: "Yes! All repairs come with a 90-day warranty covering both parts and labor. If you experience any issues with our repair work, bring it back and we'll fix it free of charge.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                question: "What brands do you service?",
                answer: "We service all major brands including Apple, Samsung, Google, OnePlus, Dell, HP, Lenovo, and more. If you have a specific model, please contact us to confirm we can service it.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                question: "Is there a diagnostic fee?",
                answer: "Our diagnostic service is completely free if you proceed with the repair. If you decide not to repair, there's a small $25 diagnostic fee.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((faq, idx) => (
              <Card 
                key={idx} 
                className="group p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${faq.gradient} rounded-lg flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <HelpCircle className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}