import React from 'react';
import { Globe, Smartphone, Database, Cloud, Cpu, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies like React, Next.js, and TypeScript.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable backend systems and APIs using Node.js, Python, and modern database technologies.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management on AWS, Google Cloud, and Azure for optimal performance.',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker']
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that provide exceptional user experiences across all devices.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-100 border border-dark-200 rounded-xl p-8 hover:bg-dark-200 transition-all duration-300 hover:scale-105 group">
              <div className="bg-dark-200 border border-dark-300 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                <service.icon className="text-accent-500" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-dark-500 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-dark-200 border border-dark-300 text-dark-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-accent-500/20 hover:text-accent-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;