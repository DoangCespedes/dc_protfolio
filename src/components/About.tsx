import React from 'react';
import { Code, Database, Cloud, Brain, Zap, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend', description: 'React, TypeScript, Tailwind CSS' },
    { icon: Database, name: 'Backend', description: 'Node.js, Express, APIs REST' },
    { icon: Cloud, name: 'DevOps', description: 'Docker, Kubernetes, AWS' },
    { icon: Brain, name: 'AI Integration', description: 'Machine Learning, APIs IA' },
    { icon: Zap, name: 'Automatización', description: 'CI/CD, Testing, Deployment' },
    { icon: Shield, name: 'Seguridad', description: 'Auth, Encryption, Best Practices' }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experiencia & Pasión por la Tecnología
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Con años de experiencia en desarrollo web y mobile, me especializo en crear 
              aplicaciones escalables y modernas utilizando las últimas tecnologías. Mi enfoque 
              se centra en la calidad del código, la experiencia del usuario y la innovación constante.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Desde aplicaciones React complejas hasta APIs robustas con Node.js, y desde 
              integraciones con IA hasta despliegues automatizados con Docker y Kubernetes, 
              manejo todo el ciclo de desarrollo de software.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Docker', 'AI'].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300">Tecnologías</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <skill.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;