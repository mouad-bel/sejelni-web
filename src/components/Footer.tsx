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
    <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Sejelni</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La solution complète pour optimiser votre productivité et 
              transformer votre façon de travailler.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                contact@sejelni.net
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +33 1 23 45 67 89
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md text-gray-600"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none outline-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none outline-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none outline-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Sejelni. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-sm">
              Fait avec ❤️ en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}