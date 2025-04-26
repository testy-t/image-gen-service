
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/ea8cc35c-52a7-4de2-973d-11c37ad63b2e.svg" alt="Telegram" className="w-5 h-5 group-hover:brightness-125 transition-all" />
  );
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-lg">RussFlux</span>
            </div>
            <p className="text-gray-400 max-w-md text-left">
              Революционный сервис генерации изображений по 1₽ за мегапиксель
            </p>
          </div>
          
          <div className="flex flex-row gap-8 items-start">
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 text-left">Навигация</h4>
              <ul className="space-y-2 text-left">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Выгоды</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 text-left">Контакт</h4>
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
          <p>© {currentYear} RussFlux. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
