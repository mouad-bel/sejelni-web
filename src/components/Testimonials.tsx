import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  const values = [
    {
      title: "Mission",
      description: "Connecter les étudiants marocains avec les meilleures agences éducatives pour faciliter leur accès aux études supérieures au Maroc et à l'étranger.",
      backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Équipe",
      description: "Une équipe d'experts en éducation internationale et en accompagnement étudiant, passionnée par la réussite académique des jeunes marocains.",
      backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Innovation",
      description: "Nous développons constamment de nouvelles solutions technologiques pour simplifier le processus de candidature et d'inscription universitaire.",
      backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Excellence",
      description: "Notre engagement envers la qualité de service et la satisfaction des étudiants guide chacune de nos recommandations d'agences partenaires.",
      backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechStart",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Grâce à Sejelni, j'ai trouvé l'agence parfaite pour mes études au Canada. L'accompagnement a été exceptionnel du début à la fin.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Pierre Martin",
      role: "Directeur Projet, InnovCorp",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Service impeccable ! Mon conseiller m'a aidé à naviguer tous les aspects de ma candidature. Je recommande vivement.",
      rating: 5,
      company: "InnovCorp"
    },
    {
      name: "Sophie Leroy",
      role: "Chef de Projet, DigitalPro",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Après avoir testé plusieurs solutions, Sejelni s'est imposé comme le choix évident.",
      rating: 5,
      company: "DigitalPro"
    },
    {
      name: "Antoine Moreau",
      role: "Fondateur, StartupLab",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Une plateforme qui change la donne. J'ai pu comparer plusieurs agences et choisir celle qui correspondait le mieux à mes besoins.",
      rating: 5,
      company: "StartupLab"
    },
    {
      name: "Camille Bernard",
      role: "Manager, BigCorp",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Excellent service client et suivi personnalisé. Mon rêve d'étudier au MIT est devenu réalité grâce à leur équipe.",
      rating: 5,
      company: "BigCorp"
    },
    {
      name: "Lucas Petit",
      role: "CTO, WebAgency",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Après avoir utilisé Sejelni, j'ai été accepté dans trois grands programmes médicaux. Le soutien à la candidature a été inestimable.",
      rating: 5,
      company: "WebAgency"
    }
  ];

  return (
    <section id="avis" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez pourquoi plus de 50 000 utilisateurs font confiance à Sejelni 
            pour optimiser leur productivité au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-[#CAA53E]/20 hover:shadow-xl hover:border-[#CAA53E]/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#CAA53E] mb-2" />
                  <p className="text-white/90 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/80">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-[#CAA53E]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nos valeurs fondamentales section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Nos valeurs fondamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-0 relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundImage: value.backgroundImage }}
                  >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-center p-6 text-white text-center">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-xl font-bold mb-3 opacity-95 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                        {value.title}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-lg mt-20 border border-[#CAA53E]/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez des milliers d'étudiants satisfaits
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Plus de 50 000 étudiants font confiance à Sejelni pour trouver 
              les meilleures agences éducatives et concrétiser leurs projets d'études.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#CAA53E] mb-2">50K+</div>
              <div className="text-white/80">Étudiants accompagnés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CAA53E] mb-2">4.8/5</div>
              <div className="text-white/80">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CAA53E] mb-2">200+</div>
              <div className="text-white/80">Agences partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CAA53E] mb-2">24/7</div>
              <div className="text-white/80">Support étudiant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}