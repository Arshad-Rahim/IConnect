import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/iconnect logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your actual phone number (with country code, no spaces/dashes)
  const phoneNumber = "+919605555117";
  const whatsappNumber = "9605555117"; // Usually same as phone

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-lg ring-1 ring-border/60 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <img
                src={logo}
                alt="iConnect"
                className="w-full h-full object-cover scale-[1.35] origin-center"
              />
            </div>

            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              iConnect
            </span> */}
          </a>

          {/* Desktop Navigation + Action Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors relative group py-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="/services"
              className="text-foreground hover:text-primary transition-colors relative group py-1"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors relative group py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors relative group py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20iConnect%2C%20I%20need%20help%20with%20my%20device.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {/* <a href="/booking">
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Service
                </Button>
              </a> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              <a
                href="/services"
                className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>

              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Action Buttons */}
              <div className="px-4 pt-2 space-y-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20iConnect%2C%20I%20need%20help%20with%20my%20device.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                {/* <a href="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Book Service
                  </Button>
                </a> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
