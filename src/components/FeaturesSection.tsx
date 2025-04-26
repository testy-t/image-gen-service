import { Clock, Coins, PaintBucket, Zap, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-[#9b87f5]" />,
      title: "Скорость",
      description: "Готовые мультимедийные креативы за секунды. Мгновенная генерация любых изображений."
    },
    {
      icon: <Coins className="w-10 h-10 text-[#9b87f5]" />,
      title: "Экономия",
      description: "Всего 1 ₽ за изображение при любом объёме. Снижение затрат на фотосъёмку и дизайн-фриланс."
    },
    {
      icon: <PaintBucket className="w-10 h-10 text-[#9b87f5]" />,
      title: "Уникальность",
      description: "Каждый визуал создаётся «с нуля» под вашу кампанию. Неповторимые изображения по текстовому промпту."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#9b87f5]" />,
      title: "Интеграция",
      description: "Быстрое подключение по API, никаких дополнительных вложений в софт. Простая интеграция в ваши системы."
    },
    {
      icon: <Shield className="w-10 h-10 text-[#9b87f5]" />,
      title: "Безопасность",
      description: "Оплата напрямую на ИП, без посредников и задержек. Полное соблюдение законодательства РФ."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#9b87f5]" />,
      title: "Масштабируемость",
      description: "Сколько нужно — столько и генерируем. Без ограничений по объему и количеству запросов."
    }
  ];
  
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выгоды для мобильного оператора</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flux Schnell предлагает революционное решение для маркетингового департамента вашей компании
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
