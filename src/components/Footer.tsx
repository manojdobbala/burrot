import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-dark-100 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Burrot<span className="text-accent-500">.</span>
            </h3>
            <p className="text-dark-500 leading-relaxed">
              Delivering innovative software solutions that drive business success and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors p-2 bg-dark-100 rounded-full border border-dark-200 hover:bg-dark-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors p-2 bg-dark-100 rounded-full border border-dark-200 hover:bg-dark-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors p-2 bg-dark-100 rounded-full border border-dark-200 hover:bg-dark-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors p-2 bg-dark-100 rounded-full border border-dark-200 hover:bg-dark-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-dark-500">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">AI & ML</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-dark-500">
              <li><a href="#" className="hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-dark-500">
              <li className="hover:text-accent-500 transition-colors cursor-pointer">contact@burrot.com</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">+1 (555) 123-4567</li>
                              <li className="hover:text-accent-500 transition-colors cursor-pointer">Dallas, Texas - USA<br />Khammam, Telangana, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-500 text-sm">
            © 2024 Burrot. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-dark-500 hover:text-accent-500 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;