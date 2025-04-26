
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/660bc550-01fb-4be0-be7c-576aeeac262e.svg" alt="Telegram" className="w-5 h-5 group-hover:brightness-125 transition-all" />
  );
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-lg">Flux Ru</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Революционный сервис генерации изображений по 1₽ за мегапиксель
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Выгоды</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="font-bold mb-4">Контакт</h4>
              <a 
                href="https://t.me/qanelph" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <TelegramIcon />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Flux Ru. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
