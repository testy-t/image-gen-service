import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/ea8cc35c-52a7-4de2-973d-11c37ad63b2e.svg" alt="Telegram" className="w-5 h-5" />
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="font-bold text-xl">Flux Ru</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-[#9b87f5] transition-colors">Выгоды</a>
          <a href="#process" className="font-medium hover:text-[#9b87f5] transition-colors">Как это работает</a>
          <a href="#pricing" className="font-medium hover:text-[#9b87f5] transition-colors">Цены</a>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] flex items-center gap-2"
            onClick={() => window.open('https://t.me/qanelph', '_blank')}
          >
            <TelegramIcon />
            <span>Связаться с нами</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="py-2 font-medium hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Выгоды
            </a>
            <a 
              href="#process" 
              className="py-2 font-medium hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Как это работает
            </a>
            <a 
              href="#pricing" 
              className="py-2 font-medium hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Цены
            </a>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] w-full flex items-center justify-center gap-2"
              onClick={() => {
                window.open('https://t.me/qanelph', '_blank');
                setIsMenuOpen(false);
              }}
            >
              <TelegramIcon />
              <span>Связаться с нами</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
