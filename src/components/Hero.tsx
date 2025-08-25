import { ArrowRight, Code2, Smartphone, Server } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ref para la imagen animada
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.7, opacity: 0, rotate: -10, y: 40 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
        }
      );

      // Hover effect: levitar y brillar
      const img = imgRef.current;
      const onEnter = () => {
        gsap.to(img, {
          y: -18,
          scale: 1.07,
          boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25), 0 0 32px 4px #a78bfa',
          filter: 'brightness(1.15) saturate(1.2) drop-shadow(0 0 16px #6366f1)',
          rotate: 2,
          duration: 0.45,
          ease: 'power2.out',
        });
      };
      const onLeave = () => {
        gsap.to(img, {
          y: 0,
          scale: 1,
          boxShadow: '0 4px 16px 0 rgba(80,80,255,0.10)',
          filter: 'brightness(1) saturate(1) drop-shadow(0 0 0 #6366f1)',
          rotate: 0,
          duration: 0.45,
          ease: 'power2.inOut',
        });
      };
      img.addEventListener('mouseenter', onEnter);
      img.addEventListener('mouseleave', onLeave);
      return () => {
        img.removeEventListener('mouseenter', onEnter);
        img.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  const title = titleRef.current;
  if (title) {
    const handleMouseEnter = () => {
      gsap.to(title, {
        y: -10,
        scale: 1.05,
        rotation: -2,
        ease: 'power2.out',
        duration: 0.3,
      });
    };
    const handleMouseLeave = () => {
      gsap.to(title, {
        y: 0,
        scale: 1,
        rotation: 0,
        ease: 'power2.inOut',
        duration: 0.3,
      });
    };

    title.addEventListener('mouseenter', handleMouseEnter);
    title.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      title.removeEventListener('mouseenter', handleMouseEnter);
      title.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
}, []);

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Desarrollo
                <span className="text-blue-600"> Web & Mobile Full Stack</span>
                <br />
                con Tecnologías Modernas
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Transformo ideas en soluciones digitales potentes con JavaScript, React, Node.js, AI e integración DevOps. Desarrollo web y mobile de alto rendimiento.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <Code2 className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Frontend</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <Server className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Backend</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <Smartphone className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span className="font-medium">Iniciar Proyecto</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                Conocer Más
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                ref={imgRef}
                src="/professional.jpg"
                alt="Desarrollador Full Stack"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer"
                style={{ boxShadow: '0 4px 16px 0 rgba(80,80,255,0.10)' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;