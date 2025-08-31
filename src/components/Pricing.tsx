import { Check, X, Crown, Zap, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Pricing() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleShowAllQuestions = () => {
    setShowAllQuestions(!showAllQuestions);
  };

  const faqData = [
    {
      question: "Comment fonctionne la plateforme Sejelni ?",
      answer: "Sejelni connecte les étudiants avec des agences éducatives certifiées. Vous pouvez comparer les services, consulter les avis et choisir l'agence qui correspond le mieux à vos besoins."
    },
    {
      question: "Les agences sont-elles vérifiées ?",
      answer: "Oui, toutes nos agences partenaires sont rigoureusement vérifiées et certifiées. Nous vérifions leurs accréditations, licences et antécédents avant de les ajouter à notre plateforme."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, nous sommes transparents sur tous les coûts. Chaque agence affiche clairement ses tarifs et vous savez exactement ce que vous payez avant de vous engager."
    },
    {
      question: "Puis-je annuler un service ?",
      answer: "Les conditions d'annulation varient selon l'agence et le service choisi. Nous vous recommandons de lire attentivement les conditions avant de confirmer."
    },
    {
      question: "Comment contacter le support client ?",
      answer: "Notre équipe de support est disponible 24/7. Vous pouvez nous contacter par chat, email ou téléphone pour toute question ou assistance."
    },
    {
      question: "Les services sont-ils disponibles partout au Maroc ?",
      answer: "Oui, nos services sont disponibles dans tout le Maroc. Nos agences partenaires couvrent toutes les régions et peuvent vous accompagner peu importe votre localisation."
    }
  ];

  const displayedQuestions = showAllQuestions ? faqData : faqData.slice(0, 3);

  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      duration: "À vie",
      description: "Parfait pour découvrir Sejelni",
      features: [
        { text: "Jusqu'à 3 utilisateurs", included: true },
        { text: "5 projets maximum", included: true },
        { text: "Stockage 1GB", included: true },
        { text: "Support par email", included: true },
        { text: "Analytics de base", included: true },
        { text: "Intégrations tierces", included: false },
        { text: "Support prioritaire", included: false },
        { text: "Analytics avancés", included: false },
        { text: "API access", included: false }
      ],
      popular: false,
      cta: "Commencer gratuitement"
    },
    {
      name: "Pro",
      price: "29€",
      duration: "/mois",
      description: "Pour les équipes en croissance",
      features: [
        { text: "Jusqu'à 25 utilisateurs", included: true },
        { text: "Projets illimités", included: true },
        { text: "Stockage 100GB", included: true },
        { text: "Support prioritaire", included: true },
        { text: "Analytics avancés", included: true },
        { text: "Intégrations tierces", included: true },
        { text: "Automatisations", included: true },
        { text: "Rapports personnalisés", included: true },
        { text: "API access", included: false }
      ],
      popular: true,
      cta: "Essai gratuit 14 jours"
    },
    {
      name: "Enterprise",
      price: "99€",
      duration: "/mois",
      description: "Pour les grandes organisations",
      features: [
        { text: "Utilisateurs illimités", included: true },
        { text: "Projets illimités", included: true },
        { text: "Stockage 1TB", included: true },
        { text: "Support 24/7 dédié", included: true },
        { text: "Analytics enterprise", included: true },
        { text: "Intégrations avancées", included: true },
        { text: "Automatisations avancées", included: true },
        { text: "Rapports personnalisés", included: true },
        { text: "API access complet", included: true }
      ],
      popular: false,
      cta: "Contacter les ventes"
    }
  ];

  return (
    <section id="tarifs" className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choisissez le plan qui correspond parfaitement à vos besoins. 
            Tous nos plans incluent une garantie satisfaction de 30 jours.
          </p>
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Économisez 20% avec la facturation annuelle
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-xl scale-105' 
                  : 'hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Le plus populaire
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.duration}
                  </span>
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquemment posées
            </h3>
           
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {displayedQuestions.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl bg-white"
                >
                  <h4 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openQuestions.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openQuestions.includes(index) ? 'max-h-40' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {showAllQuestions ? "Vous avez vu toutes les questions." : "Vous ne trouvez pas la réponse à votre question ?"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={toggleShowAllQuestions}>
                {showAllQuestions ? "Voir moins de questions" : "Voir toutes les questions"}
              </Button>
              <Button>
                Contacter le support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}