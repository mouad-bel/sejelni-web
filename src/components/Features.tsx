import { Card, CardContent } from '@/components/ui/card';

export function Features() {
  const features = [
    {
      title: "Agences Vérifiées",
      description: "Toutes nos agences partenaires sont certifiées et vérifiées pour garantir la qualité de leurs services.",
      backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Destinations Multiples",
      description: "Accédez à plus de 50 destinations d'études dans le monde entier avec nos agences spécialisées.",
      backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Rechercher une Agence",
      description: "Trouvez et comparez les meilleures agences éducatives selon vos besoins et préférences.",
      backgroundImage: "url('https://images.unsplash.com/photo-1551434678-0740a4f6f6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Services Complets",
      description: "Accédez à tous les services disponibles : conseil, accompagnement, gestion des dossiers et plus encore.",
      backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Mes Postulations",
      description: "Gérez vos achats et services en un seul endroit avec un suivi complet de vos démarches.",
      backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
    {
      title: "Support 24/7",
      description: "Notre équipe de support est disponible 24h/24 et 7j/7 pour répondre à vos questions.",
      backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#CAA53E] mb-6">
            Pourquoi choisir nos agences partenaires ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Nous offrons une plateforme complète pour connecter les étudiants avec les meilleures agences éducatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-0 relative h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: feature.backgroundImage }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center p-6 text-white text-center">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-4 opacity-95 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:text-base max-w-xs mx-auto">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#0C1943] to-[#CAA53E] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Prêt à partir étudier à l'étranger ?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez nos agences partenaires et commencez votre aventure 
            d'études internationales dès aujourd'hui.
          </p>
          <button className="bg-[#CAA53E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#CAA53E]/90 transition-colors duration-300">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
}