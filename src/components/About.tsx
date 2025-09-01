import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Award, label: 'Projects Completed', value: '300+' },
    { icon: Clock, label: 'Years Experience', value: '8+' },
    { icon: Target, label: 'Success Rate', value: '98%' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Burrot</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                Burrot has been at the forefront of software development for over 8 years.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of expert developers, designers, and strategists work collaboratively to deliver 
                solutions that not only meet your current needs but also scale with your future growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-accent-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Agile development methodology for faster delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">24/7 support and maintenance services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Transparent communication throughout the project</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Cutting-edge technologies and best practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team working together"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors group">
                  <div className="bg-gray-100 border border-gray-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/20 transition-colors">
                    <stat.icon className="text-accent-500" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;