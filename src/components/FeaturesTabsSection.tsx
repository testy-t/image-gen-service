import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Zap, Coins, Image, Sparkles, Shield, BarChart3 } from "lucide-react";

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState("speed");
  
  const features = [
    {
      id: "speed",
      title: "Скорость",
      description: "Генерируйте уникальные изображения за считанные секунды вместо часов ожидания работы дизайнера. Автоматизация процесса позволяет мгновенно получать готовые результаты для любых маркетинговых кампаний.",
      icon: <Zap size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "economy",
      title: "Экономия",
      description: "Существенное снижение затрат на создание визуального контента - всего 1 рубль за мегапиксель, без скрытых платежей и комиссий. Заказ фотосессии или работа дизайнера обойдется в десятки тысяч рублей, а генерация стоит копейки.",
      icon: <Coins size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "uniqueness",
      title: "Уникальность",
      description: "Каждое изображение создается с нуля специально под ваш запрос. Никаких шаблонов или повторений - только оригинальный контент, который идеально соответствует вашим требованиям и брендбуку.",
      icon: <Image size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "integration",
      title: "Интеграция",
      description: "Простое API-подключение без необходимости дополнительных инвестиций в программное обеспечение. Интегрируйте генерацию изображений напрямую в ваши существующие системы и рабочие процессы.",
      icon: <Sparkles size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1581092335397-9fa52cc72c30?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "security",
      title: "Безопасность",
      description: "Прямые платежи на ИП, полное соответствие законодательству РФ. Все данные и сгенерированные изображения защищены и принадлежат только вам, без каких-либо ограничений на использование.",
      icon: <Shield size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "scalability",
      title: "Масштабируемость",
      description: "Нет ограничений по объему и количеству запросов. Нуждаетесь в сотне изображений или в тысяче? Система справится с любой нагрузкой и объемом заказов, поддерживая ваши самые амбициозные маркетинговые кампании.",
      icon: <BarChart3 size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://images.unsplash.com/photo-1534143826428-c657f89f8fed?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  // Находим активный feature по id
  const activeFeature = features.find(feature => feature.id === activeTab);
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выгоды для мобильного оператора</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flux Ru предлагает революционное решение для вашего маркетингового департамента
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="speed" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent p-0">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="flex flex-col items-center py-3 px-2 data-[state=active]:bg-white data-[state=active]:text-[#9b87f5] data-[state=active]:shadow-md rounded-lg transition-all gap-2"
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <span className="text-xs font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-hidden">
              {activeFeature && (
                <div 
                  key={activeFeature.id}
                  className="flex flex-col md:flex-row gap-8 items-center animate-fadeIn"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#9b87f5]/10 p-3 rounded-xl">
                        {activeFeature.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{activeFeature.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {activeFeature.description}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={activeFeature.imageUrl} 
                        alt={activeFeature.title}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Tabs>
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

export default FeaturesTabsSection;
