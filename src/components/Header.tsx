import { useState, useRef, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import gsap from 'gsap';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV DoangC.pdf';
    link.download = 'CV_DoangC.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Ref para el logo animado
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current.children,
        { y: -40, opacity: 0, rotate: -20 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div ref={logoRef} className="flex items-center space-x-0 select-none cursor-pointer">
            <span className="text-3xl font-extrabold text-blue-600 drop-shadow-lg animate-pulse">&lt;</span>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent px-1 tracking-tight" style={{letterSpacing: '0.04em'}}>Doang</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white px-0.5 tracking-tight">MCL</span>
            <span className="text-3xl font-extrabold text-blue-600 drop-shadow-lg animate-pulse">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contacto
            </button>
            <DarkModeToggle />
            <button
              onClick={downloadCV}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Descargar CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                Contacto
              </button>
              <div className="pt-2">
                <DarkModeToggle />
              </div>
              <button
                onClick={downloadCV}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2 w-fit"
              >
                <Download className="h-4 w-4" />
                <span>Descargar CV</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;