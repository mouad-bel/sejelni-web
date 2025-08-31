import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
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
    <section id="avis" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi plus de 50 000 utilisateurs font confiance à Sejelni 
            pour optimiser leur productivité au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-200 mb-2" />
                  <p className="text-gray-700 leading-relaxed">
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
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez des milliers d'utilisateurs satisfaits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus de 50 000 professionnels utilisent Sejelni quotidiennement 
              pour optimiser leur productivité et celle de leurs équipes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Disponibilité</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}