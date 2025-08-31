import { Card, CardContent } from '@/components/ui/card';

export function About() {
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

  return (
    <section id="apropos" className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Notre équipe"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center py-16">
            <div className="space-y-8 lg:ml-8">
              <div className="group">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 transform translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-300">
                  À propos de Sejelni
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                Trouvez l'agence idéale
pour votre projet éducatif
Sejelni.ma est une plateforme marocaine qui connecte les étudiants avec des agences certifiées spécialisées dans les inscriptions universitaires au Maroc et à l'étranger.
Nous facilitons le processus de candidature, permettons aux étudiants de comparer les agences, et leur offrons un accompagnement professionnel du début à la fin.


                </p>
                <p className="text-lg text-white/90 leading-relaxed transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                🎯 Notre mission : offrir aux étudiants une expérience simple, rapide et sécurisée dans leur projet d'études supérieures.
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Spacer for the right side */}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
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
      </div>
    </section>
  );
}