import React from "react";
import { Zap, Coins, Image, Sparkles, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap size={32} className="text-[#9b87f5]" />,
      title: "Скорость",
      description: "Генерация изображений за секунды вместо часов работы дизайнера"
    },
    {
      icon: <Coins size={32} className="text-[#9b87f5]" />,
      title: "Экономия",
      description: "Всего 1 ₽ за мегапиксель при любом объеме заказа"
    },
    {
      icon: <Image size={32} className="text-[#9b87f5]" />,
      title: "Уникальность",
      description: "Каждое изображение создается с нуля под вашу задачу"
    },
    {
      icon: <Sparkles size={32} className="text-[#9b87f5]" />,
      title: "Интеграция",
      description: "Простое API-подключение без дополнительных вложений"
    },
    {
      icon: <Shield size={32} className="text-[#9b87f5]" />,
      title: "Безопасность",
      description: "Прямые платежи, полное соответствие законодательству РФ"
    },
    {
      icon: <BarChart3 size={32} className="text-[#9b87f5]" />,
      title: "Масштабируемость",
      description: "Без ограничений по объему и количеству запросов"
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выгоды для мобильного оператора</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flux Ru предлагает революционное решение для вашего маркетингового департамента
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="bg-white p-3 rounded-xl inline-flex items-center justify-center mb-4 shadow-sm group-hover:shadow transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-[#9b87f5]/10 p-4 rounded-full">
                <img 
                  src="https://cdn.poehali.dev/files/ea8cc35c-52a7-4de2-973d-11c37ad63b2e.svg" 
                  alt="Telegram" 
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Готовы начать?</h3>
                <p className="text-gray-600 mb-4">
                  Протестируйте сервис на реальных кейсах в течение 1 дня. Без обязательств.
                </p>
                <a 
                  href="https://t.me/qanelph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9b87f5] font-medium hover:text-[#7E69AB] transition-colors"
                >
                  Связаться в Telegram <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
