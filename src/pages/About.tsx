import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Card } from "@/components/ui/card"
import { Award, Users, Clock, Target, Heart, Lightbulb, Sparkles, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to ensure quality service.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in repair quality and customer service.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay updated with the latest repair techniques and technologies.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Honest pricing and clear communication throughout the repair process.",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { label: "Years in Business", value: "10+", icon: TrendingUp, gradient: "from-blue-500 to-cyan-500" },
    { label: "Devices Repaired", value: "50K+", icon: Award, gradient: "from-green-500 to-emerald-500" },
    { label: "Happy Customers", value: "25K+", icon: Users, gradient: "from-purple-500 to-pink-500" },
    { label: "Success Rate", value: "98%", icon: Target, gradient: "from-orange-500 to-red-500" },
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
              <span>Since 2014</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground text-balance">
              About iConnect
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Your trusted partner for mobile and laptop repairs since 2014. We combine expertise, quality, and speed to
              deliver exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <stat.icon className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
                <Heart className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-card-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, iConnect started with a simple mission: to provide honest, reliable, and high-quality
                  device repair services to our community. What began as a small shop has grown into a trusted service
                  center serving thousands of customers annually.
                </p>
                <p>
                  Our team of certified technicians brings over a decade of combined experience in mobile and laptop
                  repair. We've repaired over 50,000 devices, from simple screen replacements to complex motherboard
                  repairs.
                </p>
                <p>
                  Today, we continue to invest in the latest repair technologies and training to ensure we can handle
                  any device issue that comes through our doors. Our commitment to quality, transparency, and customer
                  satisfaction remains unwavering.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-200">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        Expert Team
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our certified technicians undergo continuous training to stay ahead of evolving technology.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Clock className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                        Fast Service
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We understand your time is valuable. Most repairs are completed within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Award className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-secondary transition-colors">
                        Quality Parts
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We use only genuine or OEM-quality parts, backed by our 90-day warranty.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Award className="w-4 h-4" />
              <span>What Drives Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card 
                  key={index} 
                  className="group p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse-slow" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
              <Target className="w-4 h-4 animate-pulse" />
              <span>Our Purpose</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground text-balance">
              Our Mission
            </h2>
            
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              To provide the most reliable, efficient, and customer-focused device repair services, ensuring every
              customer leaves satisfied and every device performs at its best. We believe in building lasting
              relationships through honest service and exceptional results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[
                "Quality Service",
                "Customer Satisfaction",
                "Expert Technicians",
                "Fair Pricing",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}