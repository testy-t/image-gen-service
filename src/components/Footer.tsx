const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-lg">Flux Schnell</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Революционный сервис генерации изображений 
              для маркетинговых отделов мобильных операторов
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@fluxschnell.ru</li>
                <li>Телефон: +7 (800) 123-45-67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Правовая информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Flux Schnell. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
