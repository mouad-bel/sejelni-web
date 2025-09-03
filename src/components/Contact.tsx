import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "contact@sejelni.net",
      description: "Envoyez-nous un email, nous répondons sous 2h"
    },
    {
      icon: Phone,
      title: "+33 1 23 45 67 89",
      description: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: MapPin,
      title: "123 Avenue des Champs-Élysées",
      description: "75008 Paris, France"
    },
    {
      icon: Clock,
      title: "Lun - Ven: 9h00 - 18h00",
      description: "Support 24/7 pour les clients Enterprise"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-14 w-18 h-18 bg-[#CAA53E]/10 rounded-full animate-float" style={{animationDelay: '2.6s'}}></div>
        <div className="absolute top-42 right-18 w-14 h-14 bg-white/8 rounded-full animate-float-reverse" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute bottom-28 left-18 w-16 h-16 bg-[#CAA53E]/12 rounded-full animate-pulse-glow" style={{animationDelay: '3.3s'}}></div>
        <div className="absolute top-72 right-12 w-12 h-12 bg-white/12 rounded-full animate-float" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-54 right-20 w-20 h-20 bg-[#CAA53E]/7 rounded-full animate-float-reverse" style={{animationDelay: '2.1s'}}></div>
        <div className="absolute top-92 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-rotate-slow" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-82 right-1/3 w-24 h-24 bg-[#CAA53E]/6 rounded-full animate-pulse-glow" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute top-55 left-1/2 w-10 h-10 bg-white/10 rounded-full animate-float" style={{animationDelay: '3.8s'}}></div>
        <div className="absolute top-26 left-1/3 w-22 h-22 bg-white/6 rounded-full animate-float" style={{animationDelay: '4.7s'}}></div>
        <div className="absolute bottom-26 right-1/3 w-12 h-12 bg-[#CAA53E]/9 rounded-full animate-float-reverse" style={{animationDelay: '1.9s'}}></div>
        <div className="absolute top-46 left-1/5 w-16 h-16 bg-white/9 rounded-full animate-pulse-glow" style={{animationDelay: '5.1s'}}></div>
        <div className="absolute bottom-46 right-1/5 w-14 h-14 bg-[#CAA53E]/11 rounded-full animate-rotate-slow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-66 left-2/3 w-18 h-18 bg-white/7 rounded-full animate-float" style={{animationDelay: '2.9s'}}></div>
        <div className="absolute bottom-66 right-2/3 w-10 h-10 bg-[#CAA53E]/8 rounded-full animate-float-reverse" style={{animationDelay: '4.0s'}}></div>
        <div className="absolute top-86 left-1/6 w-6 h-6 bg-white/13 rounded-full animate-pulse-glow" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-86 right-1/6 w-26 h-26 bg-[#CAA53E]/5 rounded-full animate-rotate-slow" style={{animationDelay: '5.3s'}}></div>
        <div className="absolute top-36 left-3/4 w-12 h-12 bg-white/8 rounded-full animate-float" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-36 right-3/4 w-20 h-20 bg-[#CAA53E]/6 rounded-full animate-float-reverse" style={{animationDelay: '2.3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une question ? Notre équipe est là pour vous accompagner. 
            N'hésitez pas à nous contacter pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border border-[#CAA53E]/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Envoyez-nous un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full bg-white/90 border-[#CAA53E]/30 text-[#0C1943] placeholder:text-[#0C1943]/60 focus:border-[#CAA53E] focus:ring-[#CAA53E]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full bg-white/90 border-[#CAA53E]/30 text-[#0C1943] placeholder:text-[#0C1943]/60 focus:border-[#CAA53E] focus:ring-[#CAA53E]/20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                        Entreprise
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full bg-white/90 border-[#CAA53E]/30 text-[#0C1943] placeholder:text-[#0C1943]/60 focus:border-[#CAA53E] focus:ring-[#CAA53E]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                        Sujet *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Sujet de votre demande"
                        className="w-full bg-white/90 border-[#CAA53E]/30 text-[#0C1943] placeholder:text-[#0C1943]/60 focus:border-[#CAA53E] focus:ring-[#CAA53E]/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full bg-white/90 border-[#CAA53E]/30 text-[#0C1943] placeholder:text-[#0C1943]/60 focus:border-[#CAA53E] focus:ring-[#CAA53E]/20"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group bg-[#CAA53E] hover:bg-[#CAA53E]/90 text-white border-0">
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col h-full">
            <Card className="bg-white/10 backdrop-blur-sm border border-[#CAA53E]/20 shadow-xl h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-6 flex-1">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center group cursor-pointer transition-all duration-300 hover:bg-white/5 p-3 rounded-lg hover:scale-105">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#CAA53E]/20 text-[#CAA53E] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#CAA53E] group-hover:text-white group-hover:scale-110 mr-4">
                        <info.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-[#CAA53E]">
                          {info.title}
                        </h4>
                        <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white/90">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}