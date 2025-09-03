import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-dark-100 border border-dark-200 p-3 rounded-full">
                    <Mail className="text-accent-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-dark-500">contactburrot@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-dark-100 border border-dark-200 p-3 rounded-full">
                    <Phone className="text-accent-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-dark-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-dark-100 border border-dark-200 p-3 rounded-full">
                    <MapPin className="text-accent-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Office</h4>
                    <p className="text-dark-500">Dallas, Texas - USA<br />Khammam, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
              <p className="mb-6">
                Schedule a free consultation to discuss your project requirements and get a custom quote.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="bg-dark-100 border border-dark-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent placeholder-dark-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent placeholder-dark-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent placeholder-dark-400"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent placeholder-dark-400"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-500 text-black px-8 py-4 rounded-lg hover:bg-accent-400 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;