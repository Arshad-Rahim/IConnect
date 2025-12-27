import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Laptop,
  MonitorSmartphone,
  Battery,
  HardDrive,
  Wifi,
  Camera,
  Speaker,
  Droplet,
  RefreshCw,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export default function ServicesPage() {
  const mobileServices = [
    {
      icon: MonitorSmartphone,
      title: "Screen Replacement",
      description: "Cracked or damaged screen? We replace screens for all major brands with high-quality parts.",
      price: "Starting at $79",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Poor battery life? We install genuine batteries to restore your device performance.",
      price: "Starting at $49",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Camera,
      title: "Camera Repair",
      description: "Blurry or non-functional camera? We fix both front and rear camera issues.",
      price: "Starting at $69",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Charging Port Repair",
      description: "Charging issues? We repair or replace damaged charging ports quickly.",
      price: "Starting at $59",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Droplet,
      title: "Water Damage Recovery",
      description: "Device got wet? Our water damage treatment can save your phone.",
      price: "Starting at $89",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: RefreshCw,
      title: "Software Issues",
      description: "OS problems, crashes, or glitches? We handle all software-related issues.",
      price: "Starting at $39",
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  const laptopServices = [
    {
      icon: MonitorSmartphone,
      title: "Screen Replacement",
      description: "Broken laptop screen? We replace LCD, LED, and touchscreens for all models.",
      price: "Starting at $149",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Laptop,
      title: "Keyboard Repair",
      description: "Sticky or broken keys? We replace individual keys or entire keyboards.",
      price: "Starting at $79",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: HardDrive,
      title: "Storage Upgrade",
      description: "Running out of space? We upgrade HDDs to SSDs for faster performance.",
      price: "Starting at $99",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Virus Removal",
      description: "Malware or virus infection? We clean and secure your system completely.",
      price: "Starting at $69",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Wifi,
      title: "Hardware Diagnostics",
      description: "Not sure what's wrong? Our comprehensive diagnostics identify all issues.",
      price: "Free with repair",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Speaker,
      title: "Performance Optimization",
      description: "Slow laptop? We optimize your system for peak performance.",
      price: "Starting at $49",
      gradient: "from-violet-500 to-purple-500",
    },
  ]

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
              <span>Professional Repair Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground text-balance">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Comprehensive repair solutions for all your device needs. Expert service, quality parts, and fast
              turnaround guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Services - Enhanced */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-card-foreground">Mobile Repair Services</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Professional repair services for all smartphone brands including iPhone, Samsung, Google Pixel, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group p-6 bg-card border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-primary font-bold text-lg">{service.price}</span>
                      <a href="/booking">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                        >
                          Book Now
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Laptop Services - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Laptop className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-card-foreground">Laptop Repair Services</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Expert repair services for all laptop brands including MacBook, Dell, HP, Lenovo, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group p-6 bg-card border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-accent font-bold text-lg">{service.price}</span>
                      <a href="/booking">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                        >
                          Book Now
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Shield className="w-4 h-4" />
              <span>Our Guarantee</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground mb-4">What You Get</h2>
            <p className="text-muted-foreground text-lg">Every repair comes with these benefits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "90-Day Warranty",
                desc: "All repairs backed by our comprehensive warranty",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                desc: "Most repairs completed within 24-48 hours",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: CheckCircle2,
                title: "Quality Parts",
                desc: "Genuine or OEM-quality parts guaranteed",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gradient-to-br from-card to-primary/5 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Custom Solutions Available</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground text-balance">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Don't see your specific issue listed? Contact us for a custom quote and solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {/* <a href="/booking">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Service
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a> */}
              <a href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}