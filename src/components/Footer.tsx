import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div> */}
            <div className="flex items-center space-x-0 select-none cursor-pointer">
            <span className="text-3xl font-extrabold text-blue-600 drop-shadow-lg animate-pulse">&lt;</span>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent px-1 tracking-tight" style={{letterSpacing: '0.04em'}}>Doang</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white px-0.5 tracking-tight">MCL</span>
            <span className="text-3xl font-extrabold text-blue-600 drop-shadow-lg animate-pulse">/&gt;</span>
          </div>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              Desarrollador Full Stack especializado en crear soluciones tecnológicas 
              innovadoras y escalables para empresas de todos los tamaños.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>Desarrollo Web</li>
              <li>Desarrollo Mobile</li>
              <li>Integración con IA</li>
              <li>DevOps & Cloud</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'AI'].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 dark:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-300 mb-4 md:mb-0">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>y mucho código</span>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
          © 2024 DevPortfolio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;