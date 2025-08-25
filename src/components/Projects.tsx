
import {  ExternalLink, 
          // Github, 
          // Smartphone, 
          Globe, 
          // Server, 
          // Brain 
        } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real Seguros',
      description: 'Plataforma completa para una compañia aseguradora residenciada en Venezuela, con cotización, pasarela de pagos compra de pólizas y gestión de clientes.',
      image: '../../public/RealSeguros.png',
      technologies: ['React', 'Next.js', 'Strapi','Fastify.js', 'PL/SQL', 'Docker'],
      type: 'Web App',
      icon: Globe,
      link: 'https://real-seguros.com',
      features: ['Cotizador de polizas', 'Pasarela de pagos', 'Panel administrativo', 'Responsive']
    },
    {
      title: 'Seguros Piramide',  
      description: 'Plataforma completa para una compañia aseguradora residenciada en Venezuela, con cotización, pasarela de pagos compra de pólizas y gestión de clientes.',
      image: '../../public/Piramide.png',
      technologies: ['React', 'Gatsby', 'Strapi', 'Fastify.js', 'PL/SQL', 'Docker'],
      type: 'Web App',
      icon: Globe,
      link: 'https://segurospiramide.com/',
      features: ['Cotizador de polizas', 'Pasarela de pagos', 'Panel administrativo', 'Responsive']
    },
    {
      title: 'Oceanica de Seguros',
      description: 'Plataforma completa para una compañia aseguradora residenciada en Venezuela, con cotización, pasarela de pagos compra de pólizas y gestión de clientes.',
      image: '../../public/Oceanica.png',
      technologies: ['React', 'Gatsby', 'Strapi',  'Fastify.js', 'PL/SQL', 'Docker'],
      type: 'Web App',
      icon: Globe,
      link: 'https://oceanicadeseguros.com/',
      features: ['Cotizador de polizas', 'Pasarela de pagos', 'Panel administrativo', 'Responsive']
    },
    {
      title: 'Seguros Constitución',
      description: 'Plataforma completa para una compañia aseguradora residenciada en Venezuela, con cotización, pasarela de pagos compra de pólizas y gestión de clientes.',
      image: '../../public/Constitucion.png',
      technologies: ['React', 'Next.js', 'Express', 'PL/SQL', 'Docker'],
      type: 'Web App',
      link: 'https://segurosconstitucion.com/',
      icon: Globe,
      features: ['Cotizador de polizas', 'Pasarela de pagos', 'Panel administrativo', 'Responsive']
    },
    // {
    //   title: 'Mobile Banking App',
    //   description: 'Aplicación móvil de banca digital con React Native y autenticación biométrica.',
    //   image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics'],
    //   type: 'Mobile App',
    //   icon: Smartphone,
    //   features: ['Auth biométrica', 'Transferencias', 'Notificaciones', 'Seguridad']
    // },
    // {
    //   title: 'AI Content Generator',
    //   description: 'Plataforma de generación de contenido con IA, integración con GPT y análisis de datos.',
    //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Python'],
    //   type: 'AI Platform',
    //   icon: Brain,
    //   features: ['Generación IA', 'Analytics', 'Multi-idioma', 'API REST']
    // },
    // {
    //   title: 'Microservices Architecture',
    //   description: 'Sistema distribuido con microservicios, Docker, Kubernetes y monitoreo avanzado.',
    //   image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis'],
    //   type: 'Backend System',
    //   icon: Server,
    //   features: ['Escalabilidad', 'Monitoring', 'Load Balancing', 'CI/CD']
    // }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Con años de experiencia apoyando a empresas de seguros en el desarrollo, mantenimiento y mejora de sus plataformas digitales, ademas de proyectos internos para el uso de las mismas, todo esto utilizando un stack de tecnologías modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                    <project.icon className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Características:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 text-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ir al sitio</span>
                  </a>
                  {/* <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors flex items-center justify-center space-x-2">
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 ¿Proyecto urgente?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Para proyectos con fechas límite ajustadas, contactame directamente por WhatsApp
            </p>
            <a
              href="https://wa.me/584123685108?text=Quiero%20agendar%20una%20cita%20para%20un%20proyecto"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              WhatsApp Directo 
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;