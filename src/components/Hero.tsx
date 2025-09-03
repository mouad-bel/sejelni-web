import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#CAA53E]/15 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-reverse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#CAA53E]/25 rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-8 h-8 bg-white/15 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-10 w-24 h-24 bg-[#CAA53E]/8 rounded-full animate-float-reverse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-80 left-1/3 w-6 h-6 bg-white/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-80 right-1/3 w-10 h-10 bg-[#CAA53E]/20 rounded-full animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-30 left-1/2 w-14 h-14 bg-white/8 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-30 right-1/2 w-18 h-18 bg-[#CAA53E]/12 rounded-full animate-float-reverse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-50 left-1/4 w-10 h-10 bg-white/12 rounded-full animate-pulse-glow" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-50 right-1/4 w-16 h-16 bg-[#CAA53E]/10 rounded-full animate-rotate-slow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-70 left-2/3 w-12 h-12 bg-white/6 rounded-full animate-float" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-70 right-2/3 w-8 h-8 bg-[#CAA53E]/18 rounded-full animate-float-reverse" style={{animationDelay: '2.2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-[#CAA53E]/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-[#CAA53E]/30">
              🚀 Nouvelle version disponible
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Connectez-vous aux meilleures
              <span className="text-[#CAA53E] block">
              agences éducatives
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
            Sejelni vous aide à trouver et contacter des agences fiables pour concrétiser vos projets d’études, au Maroc ou à l’étranger. Comparez, choisissez, lancez-vous !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-[#CAA53E] hover:bg-[#CAA53E]/90 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group border-[#CAA53E] text-[#CAA53E] hover:bg-[#CAA53E] hover:text-white">
                <Play className="mr-2 h-4 w-4" />
                Voir la démo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/80">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8/5</div>
                <div className="text-sm text-white/80">Note moyenne</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 h-8 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-8">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dashboard Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-r from-[#0C1943]/20 to-[#CAA53E]/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}