import React from 'react';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                <span className="text-accent-500 text-sm font-medium">🚀 Building the Future</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                Diverse Software
                <span className="text-accent-500"> Solutions</span>
                <br />
                for Every Need
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Burrot, we deliver cutting-edge software solutions tailored to your business requirements. 
                From web applications to enterprise systems, we've got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-accent-500 text-black px-8 py-4 rounded-lg hover:bg-accent-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium hover:scale-105">
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="border-2 border-gray-300 text-black px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium">
                View Our Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-gray-100 border border-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-gray-200 transition-colors">
                  <Code className="text-accent-500" size={24} />
                </div>
                <h3 className="font-semibold text-black">Custom Development</h3>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 border border-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-gray-200 transition-colors">
                  <Zap className="text-accent-500" size={24} />
                </div>
                <h3 className="font-semibold text-black">Fast Delivery</h3>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 border border-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-gray-200 transition-colors">
                  <Shield className="text-accent-500" size={24} />
                </div>
                <h3 className="font-semibold text-black">Secure & Reliable</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-accent-500/20 p-3 rounded-full">
                  <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">100+ Projects</p>
                  <p className="text-gray-600 text-sm">Successfully Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;