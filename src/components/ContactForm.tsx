import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Success Message */}
        {submitted && (
          <div className="mb-8 animate-bounce-in text-center">
            <div className="inline-flex items-center gap-3 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl px-8 py-5 text-green-300">
              <CheckCircle className="w-8 h-8" />
              <span className="text-xl font-semibold">Thank you! We'll get back to you soon.</span>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className={`relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-500 ${submitted ? 'scale-95 opacity-60' : ''}`}>
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-blue-600/30 animate-pulse-slow" />

          <div className="relative p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
              <p className="text-purple-200">We'd love to hear from you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-2 rounded-full transition-all duration-300 transform origin-left peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90"
                >
                  <User className="inline w-4 h-4 mr-1" />
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-2 rounded-full transition-all duration-300 transform origin-left peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90"
                >
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address
                </label>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="peer w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-2 rounded-full transition-all duration-300 transform origin-left peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90"
                >
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative group/btn bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-70"
              >
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>

        {/* Optional decorative orbs */}
        <div className="absolute top-10 -left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <style >{`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.7s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
        .animate-blob { animation: blob 12s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default ContactForm;