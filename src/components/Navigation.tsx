import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Content Library', path: '/content-library' },
    { name: 'Resources', path: '/resources' },
    { name: 'Holistically Rx', path: '/holistically-rx' },
    { name: 'Docs of Cannabis', path: '/docs-of-cannabis' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Navigation — no super header artifact */}
      <nav className="professional-nav sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" aria-label="Dr. Erick Kaufman homepage">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-medical-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm" aria-hidden="true">EK</span>
              </div>
              <span className="font-semibold text-professional-navy text-base sm:text-lg truncate">
                Erick Kaufman MD
              </span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                  isActive(item.path)
                    ? 'text-medical-primary border-b-2 border-medical-primary'
                    : 'text-medical-gray-600 hover:text-medical-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Fullscript Supplements Link */}
            <a
              href="https://us.fullscript.com/welcome/ckaufman1759530062"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm lg:text-base text-medical-gray-600 hover:text-medical-primary transition-colors duration-200"
            >
              Supplements
            </a>
            <Button
              onClick={() => {
                const event = new CustomEvent('openAIChat');
                window.dispatchEvent(event);
              }}
              className="bg-medical-primary text-primary-foreground hover:bg-medical-accent ml-4 text-sm px-4 py-2"
            >
              <Bot className="mr-2 h-4 w-4" />
              Ask AI Erick
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-gray-600"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-medical-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-medical-primary bg-medical-primary-light/20'
                      : 'text-medical-gray-600 hover:text-medical-primary hover:bg-medical-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Fullscript Link */}
              <a
                href="https://us.fullscript.com/welcome/ckaufman1759530062"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-medical-gray-600 hover:text-medical-primary hover:bg-medical-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Supplements
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={() => {
                    const event = new CustomEvent('openAIChat');
                    window.dispatchEvent(event);
                    setIsOpen(false);
                  }}
                  className="bg-medical-primary text-primary-foreground hover:bg-medical-accent w-full"
                >
                  <Bot className="mr-2 h-4 w-4" />
                  Ask AI Erick
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
