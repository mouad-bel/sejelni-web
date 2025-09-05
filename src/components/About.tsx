// import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('apropos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="apropos" className="py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-18 h-18 bg-[#CAA53E]/12 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-40 right-24 w-10 h-10 bg-white/10 rounded-full animate-float-reverse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-32 left-24 w-16 h-16 bg-[#CAA53E]/8 rounded-full animate-pulse-glow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-70 right-12 w-12 h-12 bg-white/12 rounded-full animate-float" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute bottom-60 right-16 w-8 h-8 bg-[#CAA53E]/15 rounded-full animate-float-reverse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-90 left-1/3 w-14 h-14 bg-white/7 rounded-full animate-rotate-slow" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-25 left-1/2 w-20 h-20 bg-[#CAA53E]/6 rounded-full animate-float" style={{animationDelay: '3.9s'}}></div>
        <div className="absolute bottom-25 right-1/2 w-12 h-12 bg-white/8 rounded-full animate-float-reverse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-55 left-1/4 w-16 h-16 bg-[#CAA53E]/9 rounded-full animate-pulse-glow" style={{animationDelay: '4.3s'}}></div>
        <div className="absolute bottom-55 right-1/4 w-10 h-10 bg-white/9 rounded-full animate-rotate-slow" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute top-85 left-2/3 w-14 h-14 bg-[#CAA53E]/7 rounded-full animate-float" style={{animationDelay: '2.1s'}}></div>
        <div className="absolute bottom-85 right-2/3 w-18 h-18 bg-white/6 rounded-full animate-float-reverse" style={{animationDelay: '3.6s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0">
            <img 
              src="/about-image.png"
              alt="À propos de Sejelni - Plateforme éducative"
              className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl transition-all duration-300 group-hover:bg-black/40"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center py-16">
            <div className="space-y-8 lg:ml-8">
              <div className="group">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:text-[#CAA53E]">
                  À propos de Sejelni
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100">
                Trouvez l'agence idéale
pour votre projet éducatif
Sejelni.ma est une plateforme marocaine qui connecte les étudiants avec des agences certifiées spécialisées dans les inscriptions universitaires au Maroc et à l'étranger.
Nous facilitons le processus de candidature, permettons aux étudiants de comparer les agences, et leur offrons un accompagnement professionnel du début à la fin.


                </p>
                <p className="text-lg text-white/90 leading-relaxed transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-200">
                🎯 Notre mission : offrir aux étudiants une expérience simple, rapide et sécurisée dans leur projet d'études supérieures.
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Spacer for the right side */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}