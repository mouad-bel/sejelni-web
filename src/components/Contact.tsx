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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#CAA53E]/20 text-[#CAA53E] rounded-lg flex items-center justify-center">
                        <info.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-white/80">
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