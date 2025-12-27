import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Laptop,
  Wrench,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  HeadphonesIcon,
} from "lucide-react";

export default function HomePage() {
  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
      name: "Lenovo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "OnePlus",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/oneplus-mobile-logo-icon.svg",
    }, // FIXED: Reliable direct SVG link
    {
      name: "Asus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
    },
    {
      name: "Acer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Amazing service! They fixed my iPhone screen in just 2 hours. Professional and affordable.",
      device: "iPhone 13 Pro",
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "My laptop was running slow. They upgraded the SSD and now it's like new! Highly recommend.",
      device: "Dell XPS 15",
    },
    {
      name: "Emily Rodriguez",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Water damaged my phone. They saved all my data and fixed it perfectly. Thank you!",
      device: "Samsung Galaxy S23",
    },
  ];

  const repairProcess = [
    {
      step: "01",
      title: "Book Appointment",
      description: "Schedule your repair online or walk-in",
      image:
        "https://img.freepik.com/free-photo/woman-holding-smartphone-with-blank-screen_53876-96186.jpg",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Free Diagnosis",
      description: "Expert technicians inspect your device",
      image:
        "https://img.freepik.com/free-photo/repairman-doing-phone-reparation_23-2149048881.jpg",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Quick Repair",
      description: "Fast, professional repair with quality parts",
      image:
        "https://img.freepik.com/free-photo/person-repairing-phone_23-2149046069.jpg",
      gradient: "from-orange-500 to-red-500",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Thorough testing before returning to you",
      image:
        "https://img.freepik.com/free-photo/technician-repairing-smartphone-motherboard_23-2149046077.jpg",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://i.pcmag.com/imagery/articles/03sBveXSkc2hMTcT8Q0Gam2-23.fit_lim.v1713298822.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.15),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,200,0.15),transparent_50%)] animate-pulse-slow" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float-delayed" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-float" />
          <div className="absolute top-60 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 animate-fade-in-up backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Expert Device Repair & Service Center</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight animate-fade-in-up animation-delay-100">
              Your Devices,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-text">
                Our Expertise
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
              Professional mobile and laptop repair services with certified
              technicians, rapid turnaround, and a satisfaction guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up animation-delay-300">
              <a href="/booking">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Book Repair Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent hover:bg-primary/5 border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  View Services
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">10+ Years</div>
                  <div className="text-muted-foreground text-xs">
                    Experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">1000+</div>
                  <div className="text-muted-foreground text-xs">
                    Happy Clients
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">4.9/5</div>
                  <div className="text-muted-foreground text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto relative z-10 mt-16 animate-fade-in-up animation-delay-500">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/866046380CellPhoneRepairTechnician.jpg=ws1280x960"
                alt="Phone Repair"
                className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Phones
              </p>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/webp_man_repairing_laptop.webp"
                alt="Laptop Repair"
                className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Laptops
              </p>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src="https://thumbs.dreamstime.com/b/close-up-technician-repairing-smartphone-motherboard-tweezers-soldering-iron-workbench-electronics-repair-co-409749142.jpg"
                alt="Repair Tools"
                className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Tools
              </p>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src="https://ifixindia.in/wp-content/uploads/2025/06/Satisfied-customer-receiving-their-repaired-iPhone-at-iFix-India-Bangalore-service-center-1024x585.jpeg"
                alt="Fast Fix"
                className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Fast Fix
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service - PERFECTLY SEAMLESS & SMOOTH INFINITE MARQUEE */}
      <section className="py-16 px-4 bg-card/50 border-y border-border overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Trusted Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-3">
              Brands We Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert repair services for all major brands
            </p>
          </div>

          {/* Seamless infinite marquee */}
          <div className="relative h-40">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...brands, ...brands].map((brand, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="mx-12 flex-shrink-0 group cursor-pointer"
                  >
                    <div className="w-40 h-32 bg-background rounded-2xl border border-border flex items-center justify-center p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-110">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections unchanged */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Shield className="w-4 h-4" />
              <span>Our Promise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-3">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence in every repair, every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Fast Turnaround",
                desc: "Most repairs completed within 24-48 hours. Same-day service available for urgent cases.",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-500",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "All repairs backed by 90-day warranty. We use only genuine or OEM-quality parts.",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-500",
              },
              {
                icon: Wrench,
                title: "Expert Technicians",
                desc: "Certified professionals with 10+ years of experience in device repair and diagnostics.",
                gradient: "from-orange-500/10 to-red-500/10",
                iconBg: "bg-orange-500/10",
                iconColor: "text-orange-500",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className={`group p-8 bg-gradient-to-br ${feature.gradient} border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`${feature.iconColor} w-7 h-7`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Wrench className="w-4 h-4" />
              <span>What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Comprehensive repair solutions for all your mobile and laptop
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group p-8 bg-card border-border hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "url('https://www.icracked-it.com/wp-content/uploads/2021/10/advanced-phone-repair.jpg')",
                }}
              />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Smartphone className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Mobile Repair
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Screen Replacement",
                    "Battery Replacement",
                    "Camera Repair",
                    "Charging Port Fix",
                    "Water Damage Recovery",
                    "Software Issues",
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors animate-fade-in-left"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-500" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/services">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="group p-8 bg-card border-border hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-100 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "url('https://ancgroup.com/wp-content/uploads/2022/06/AppliedNetwork-Blog-computer-repairman-installing-new-hard-disk-drive-in-laptop-1.jpg')",
                }}
              />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Laptop className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Laptop Repair
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Screen Replacement",
                    "Keyboard Repair",
                    "Hard Drive Upgrade",
                    "Virus Removal",
                    "Hardware Diagnostics",
                    "Performance Optimization",
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors animate-fade-in-left"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-purple-500" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/services">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-24 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Clock className="w-4 h-4" />
              <span>How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Our Repair Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple, transparent, and efficient - from booking to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {repairProcess.map((process, idx) => (
              <Card
                key={idx}
                className="group p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer overflow-hidden relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {process.step}
                </div>

                <div className="relative z-10">
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${process.gradient} rounded-xl mb-4 shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">
                      {process.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/customer-service-concept-with-smartphone_23-2149174293.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Star className="w-4 h-4" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="group p-8 bg-gradient-to-br from-card to-primary/5 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="w-4 h-4" />
                  <span>{testimonial.device}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Star className="w-4 h-4" />
              <span>Our Advantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Why Choose iConnect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              We combine cutting-edge technology with expert craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Quick Service",
                desc: "24-48 hour turnaround on most repairs",
                gradient: "from-blue-500 to-cyan-500",
                count: "24-48h",
              },
              {
                icon: Shield,
                title: "Warranty Protected",
                desc: "90-day warranty on all repair work",
                gradient: "from-purple-500 to-pink-500",
                count: "90 Days",
              },
              {
                icon: Star,
                title: "Top Rated",
                desc: "4.9/5 stars from 1000+ customers",
                gradient: "from-orange-500 to-red-500",
                count: "4.9★",
              },
              {
                icon: Wrench,
                title: "Expert Team",
                desc: "Certified technicians with 10+ years experience",
                gradient: "from-green-500 to-emerald-500",
                count: "10+ Yrs",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group text-center space-y-4 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative inline-block">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-background border-2 border-border rounded-lg px-2 py-1 text-xs font-bold text-foreground shadow-lg">
                    {item.count}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/electronics-repair-workbench-detailed-view-cluttered-various-electronic-devices-including-tablets-smartphones-395622318.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse-slow" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground text-balance">
              Ready to Fix Your Device?
            </h2>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Book your repair appointment today and get your device back in
              perfect condition
            </p>

            <a href="/booking">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:opacity-90 text-lg px-12 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Schedule Service Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>

            <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free Diagnostics</span>
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
  );
}
