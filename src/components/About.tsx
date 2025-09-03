import { Card, CardContent } from '@/components/ui/card';

export function About() {

  return (
    <section id="apropos" className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative group">
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