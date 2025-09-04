import { Check, X, Crown, ChevronDown, Building2, Lock, ArrowLeft, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Pricing() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
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



  const plans = [
    {
      name: "Pro",
      price: "249 DH",
      duration: "à vie",
      description: "La solution complète pour votre réussite académique",
      features: [
        { text: "Accompagnement personnalisé", included: true },
        { text: "Accès à toutes les agences certifiées", included: true },
        { text: "Support prioritaire 24/7", included: true },
        { text: "Suivi complet de votre dossier", included: true },
        { text: "Conseils d'experts en éducation", included: true },
        { text: "Garantie satisfaction 30 jours", included: true },
        { text: "Accès aux bourses et aides", included: true },
        { text: "Préparation aux entretiens", included: true },
        { text: "Assistance visa et documents", included: true }
      ],
      popular: true,
      cta: "Commencer maintenant"
    }
  ];

  return (
    <section id="tarifs" className="py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 left-18 w-16 h-16 bg-[#CAA53E]/8 rounded-full animate-float" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-38 right-22 w-12 h-12 bg-white/10 rounded-full animate-float-reverse" style={{animationDelay: '3.1s'}}></div>
        <div className="absolute bottom-26 left-22 w-14 h-14 bg-[#CAA53E]/12 rounded-full animate-pulse-glow" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-68 right-14 w-10 h-10 bg-white/12 rounded-full animate-float" style={{animationDelay: '2.4s'}}></div>
        <div className="absolute bottom-52 right-18 w-18 h-18 bg-[#CAA53E]/7 rounded-full animate-float-reverse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute top-88 left-1/3 w-6 h-6 bg-white/15 rounded-full animate-rotate-slow" style={{animationDelay: '3.7s'}}></div>
        <div className="absolute bottom-75 right-1/4 w-22 h-22 bg-[#CAA53E]/6 rounded-full animate-pulse-glow" style={{animationDelay: '2.9s'}}></div>
        <div className="absolute top-28 left-1/2 w-20 h-20 bg-white/7 rounded-full animate-float" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-28 right-1/2 w-12 h-12 bg-[#CAA53E]/9 rounded-full animate-float-reverse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute top-48 left-1/4 w-16 h-16 bg-white/8 rounded-full animate-pulse-glow" style={{animationDelay: '4.6s'}}></div>
        <div className="absolute bottom-48 right-1/4 w-14 h-14 bg-[#CAA53E]/10 rounded-full animate-rotate-slow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-78 left-2/3 w-8 h-8 bg-white/11 rounded-full animate-float" style={{animationDelay: '2.7s'}}></div>
        <div className="absolute bottom-78 right-2/3 w-18 h-18 bg-[#CAA53E]/5 rounded-full animate-float-reverse" style={{animationDelay: '3.9s'}}></div>
        <div className="absolute top-98 left-1/5 w-10 h-10 bg-white/9 rounded-full animate-pulse-glow" style={{animationDelay: '1.1s'}}></div>
        <div className="absolute bottom-98 right-1/5 w-24 h-24 bg-[#CAA53E]/4 rounded-full animate-rotate-slow" style={{animationDelay: '4.9s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Tarif simple et transparent
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Découvrez notre plan Pro qui inclut toutes les fonctionnalités essentielles 
            pour votre réussite académique avec une garantie satisfaction de 30 jours.
          </p>

        </div>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-lg">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="relative bg-white/10 backdrop-blur-sm border border-[#CAA53E]/20 hover:shadow-xl hover:border-[#CAA53E]/40 transition-all duration-300 hover:scale-105 w-full"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#CAA53E] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Le plus populaire
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/80">
                    {plan.duration}
                  </span>
                </div>
                <p className="text-white/90">
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
                      <span className={feature.included ? 'text-white' : 'text-white/60'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-[#CAA53E] hover:bg-[#CAA53E]/90"
                  onClick={() => setShowPaymentModal(true)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-[#CAA53E]/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Questions fréquemment posées
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-transparent rounded-xl transition-all duration-300 border border-[#CAA53E] hover:bg-[#CAA53E] hover:shadow-lg">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-transparent hover:bg-transparent transition-all duration-300 rounded-xl group"
                >
                  <h4 className="text-lg font-semibold text-[#CAA53E] pr-4 group-hover:text-white transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#CAA53E] transition-all duration-300 ${
                      openQuestions.includes(index) ? 'rotate-180 text-white' : 'group-hover:text-white'
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openQuestions.includes(index) ? 'max-h-60' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 bg-transparent">
                    <p className="text-white/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </div>

      {/* Bank Transfer Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 text-[#CAA53E] mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Virement bancaire</h3>
                </div>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors bg-white hover:bg-gray-50 p-1 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Plan Summary */}
              <div className="bg-[#0C1943]/5 rounded-lg p-4 mb-6 border border-[#CAA53E]/20">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Plan Pro</h4>
                    <p className="text-sm text-gray-600">Accès permanent</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#CAA53E]">249 DH</div>
                    <div className="text-sm text-gray-600">paiement unique</div>
                  </div>
                </div>
              </div>

              {/* Bank Information */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Informations de virement</h4>
                
                {/* Combined Bank Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Nom de la banque
                      </label>
                      <span className="text-gray-900 font-medium">Attijariwafa Bank</span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Titulaire du compte
                      </label>
                      <span className="text-gray-900 font-medium">SEJELNI SARL</span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Numéro de compte
                      </label>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-mono text-lg">007 780 000 1234567890 12</span>
                        <button
                          onClick={() => copyToClipboard('007 780 000 1234567890 12', 'account')}
                          className="flex items-center text-[#CAA53E] hover:text-[#CAA53E]/80 transition-colors bg-white px-3 py-1 rounded-md border border-[#CAA53E]/20 hover:bg-[#CAA53E]/5"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          {copiedField === 'account' ? 'Copié!' : 'Copier'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-blue-900 mb-2">Instructions importantes :</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Effectuez le virement avec la référence exacte</li>
                  <li>• Votre compte sera activé sous 24h après réception</li>
                  <li>• Conservez le reçu de virement comme preuve</li>
                  <li>• Contactez-nous si vous avez des questions</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex items-center bg-green-50 p-3 rounded-lg mb-6">
                <Lock className="w-4 h-4 text-green-600 mr-2" />
                <p className="text-sm text-green-700">
                  Besoin d'aide ? Contactez-nous au 0671434207
                </p>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full flex items-center justify-center text-[#CAA53E] hover:text-[#CAA53E]/80 transition-colors bg-white hover:bg-[#CAA53E]/10 py-3 px-4 rounded-lg border border-[#CAA53E]/20 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux tarifs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}