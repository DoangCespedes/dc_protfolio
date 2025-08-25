
import { 
  Monitor, 
  Smartphone, 
  Server, 
  Brain, 
  Cog, 
  Cloud,
  // ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Desarrollo Frontend',
      description: 'Aplicaciones web modernas y responsivas con React, TypeScript y las mejores prácticas de UX/UI.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      color: 'blue'
    },
    {
      icon: Server,
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables con Node.js, bases de datos optimizadas y arquitectura limpia.',
      features: ['Node.js & Express', 'APIs REST/GraphQL', 'Bases de Datos', 'Microservicios'],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Desarrollo Mobile',
      description: 'Aplicaciones móviles nativas y multiplataforma con React Native y tecnologías modernas.',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Deploy'],
      color: 'purple'
    },
    {
      icon: Brain,
      title: 'Integración con IA',
      description: 'Implementación de soluciones de inteligencia artificial y machine learning en tus aplicaciones.',
      features: ['APIs de IA', 'Machine Learning', 'Chatbots', 'Automatización'],
      color: 'orange'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Despliegue automatizado, contenedores Docker, Kubernetes y infraestructura en la nube.',
      features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS/Azure', 'Monitoring'],
      color: 'indigo'
    },
    {
      icon: Cog,
      title: 'Automatización',
      description: 'Procesos automatizados, testing, deployment continuo y optimización de workflows.',
      features: ['Testing Automatizado', 'Deployment', 'Workflows', 'Optimización'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones completas de desarrollo web y mobile con tecnologías modernas y arquitecturas escalables para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-xl ${getColorClasses(service.color)} transition-colors`}>
                  <service.icon className="h-8 w-8" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2 group">
                <span>Más Información</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Trabajemos juntos para crear la solución perfecta para tu negocio.
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;