import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Content Library', path: '/content-library' },
    { name: 'Resources', path: '/resources' },
    { name: 'Holistically Rx', path: '/holistically-rx' },
    { name: 'Docs of Cannabis', path: '/docs-of-cannabis' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Super Header */}
      <div className="bg-medical-gray-50 border-b border-medical-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-10">
            <Link to="/" className="flex items-center space-x-2 group hover:opacity-80 transition-opacity">
              <span className="text-medical-gray-600 text-sm">←</span>
              <span className="font-medium text-medical-gray-600 text-sm">
                Back to ErickKaufman.com
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="professional-nav sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" aria-label="Dr. Erick Kaufman homepage">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-medical-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm" aria-hidden="true">EK</span>
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
            <Button
              onClick={() => {
                console.log('Dispatching openAIChat event from navigation');
                const event = new CustomEvent('openAIChat');
                window.dispatchEvent(event);
              }}
              className="bg-medical-primary text-white hover:bg-medical-accent ml-4 text-sm px-4 py-2"
            >
              <Bot className="mr-2 h-4 w-4" />
              Ask AI Erick
            </Button>
            <Button 
              variant="outline" 
              className="medical-button-primary ml-2 text-sm px-4 py-2"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on LinkedIn
              </a>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-medical-gray-200">
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
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={() => {
                    console.log('Dispatching openAIChat event from mobile navigation');
                    const event = new CustomEvent('openAIChat');
                    window.dispatchEvent(event);
                    setIsOpen(false);
                  }}
                  className="bg-medical-primary text-white hover:bg-medical-accent w-full"
                >
                  <Bot className="mr-2 h-4 w-4" />
                  Ask AI Erick
                </Button>
                <Button 
                  variant="outline" 
                  className="medical-button-primary w-full"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on LinkedIn
                  </a>
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