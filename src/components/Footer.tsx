import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sparkles, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card to-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="text-primary-foreground font-bold text-xl">iC</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                iConnect
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional mobile and laptop repair services with expert technicians and quality guaranteed.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Trusted by 1000+ customers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Book Service", href: "/booking" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "Screen Repair",
                "Battery Replacement",
                "Software Updates",
                "Water Damage",
                "Data Recovery",
              ].map((service) => (
                <li key={service} className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <span>info@iconnect.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#", gradient: "from-blue-500 to-blue-600" },
                { icon: Twitter, href: "#", gradient: "from-sky-400 to-sky-500" },
                { icon: Instagram, href: "#", gradient: "from-pink-500 to-purple-500" },
                { icon: Linkedin, href: "#", gradient: "from-blue-600 to-blue-700" },
              ].map((social, idx) => (
                
               <a   key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {new Date().getFullYear()} iConnect. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for quality repairs
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}