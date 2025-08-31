import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sejelni</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('fonctionnalites')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('avis')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('tarifs')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 bg-transparent border-none outline-none"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 !bg-transparent">Se connecter</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">Commencer</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('fonctionnalites')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection('tarifs')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg bg-transparent border-none outline-none"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" className="w-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 !bg-transparent">
                  Se connecter
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Commencer</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}