import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Fonctionnalités', action: () => scrollToSection('fonctionnalites') },
      { name: 'Tarifs', action: () => scrollToSection('tarifs') },
      { name: 'Sécurité', href: '#' },
      { name: 'Intégrations', href: '#' },
    ],
    company: [
      { name: 'À propos', action: () => scrollToSection('apropos') },
      { name: 'Carrières', href: '#' },
      { name: 'Presse', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '#' },
      { name: 'Contact', action: () => scrollToSection('contact') },
      { name: 'Documentation', href: '#' },
      { name: 'API', href: '#' },
    ],
    legal: [
      { name: 'Mentions légales', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'Conditions d\'utilisation', href: '#' },
      { name: 'RGPD', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-[#0C1943] border-t border-[#CAA53E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="text-lg font-semibold text-[#CAA53E] mb-4 mt-0 leading-tight">Sejelni</div>
            <p className="text-white/80 mb-6 leading-relaxed">
              La solution complète pour optimiser votre productivité et 
              
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2" />
                contact@sejelni.net
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2" />
                +212 689 851 888
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 border border-[#CAA53E]/30 rounded-lg flex items-center justify-center hover:bg-[#CAA53E] hover:text-white hover:border-[#CAA53E] transition-all duration-300 shadow-sm hover:shadow-md text-white/80"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#CAA53E] mb-4 mt-0 leading-tight">Produit</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.product.map((link) => (
                <li key={link.name} className="p-0 m-0">
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 bg-transparent border-none outline-none text-left w-full p-0 m-0"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 text-left block p-0 m-0"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#CAA53E] mb-4 mt-0 leading-tight">Entreprise</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.company.map((link) => (
                <li key={link.name} className="p-0 m-0">
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 bg-transparent border-none outline-none text-left w-full p-0 m-0"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 text-left block p-0 m-0"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#CAA53E] mb-4 mt-0 leading-tight">Support</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.support.map((link) => (
                <li key={link.name} className="p-0 m-0">
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 bg-transparent border-none outline-none text-left w-full p-0 m-0"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 text-left block p-0 m-0"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#CAA53E] mb-4 mt-0 leading-tight">Légal</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.legal.map((link) => (
                <li key={link.name} className="p-0 m-0">
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#CAA53E] transition-colors duration-300 text-left block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#CAA53E]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Sejelni. Tous droits réservés.
            </p>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/212689851888?text=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d%27informations"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>


    </footer>
  );
}