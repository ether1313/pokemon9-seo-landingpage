
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with their corresponding slugs
  const navItems = [
    { label: 'Review', path: '/pokemon9-casino-review', sectionId: 'casino-review' },
    { label: 'Registration', path: '/pokemon9-casino-registration', sectionId: 'registration' },
    { label: 'Bonuses', path: '/pokemon9-casino-bonuses', sectionId: 'bonuses' },
    { label: 'Games', path: '/pokemon9-casino-games', sectionId: 'games' },
    { label: 'Payments', path: '/pokemon9-casino-payments', sectionId: 'payments' },
    { label: 'FAQ', path: '/', sectionId: 'faq' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // If on homepage, scroll to section; otherwise navigate to homepage first
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a2e] shadow-lg shadow-[#ff0000]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo/pokemon9-logo.png" 
                alt="POKEMON9" 
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.sectionId)}
                className={`transition-colors duration-200 text-md font-medium whitespace-nowrap cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-[#ffd700]'
                    : 'text-gray-300 hover:text-[#ffd700]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a 
              href="https://pokemon9.org/RFESTER88" 
              className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 py-2.5 rounded-full font-bold transition-all duration-200 text-sm whitespace-nowrap cursor-pointer"
            >
              <span>Join Now</span>
              <div className="w-5 h-5 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
                <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#333]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#333] rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-[#ffd700] cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a2e] border-t border-[#ff0000]/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.sectionId)}
                className={`block w-full text-left py-2 text-sm font-medium cursor-pointer transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#ffd700]'
                    : 'text-gray-300 hover:text-[#ffd700]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://pokemon9.org/RFESTER88" 
              className="cta-pulse block bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 py-2.5 rounded-full font-bold transition-all duration-200 text-sm text-center whitespace-nowrap cursor-pointer"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
