import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Zap, Coins, Image, Sparkles, Shield, BarChart3 } from "lucide-react";

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState("economy");
  
  const features = [
    {
      id: "economy",
      title: "Экономия",
      description: "Существенное снижение затрат на создание визуального контента - всего 1 рубль за мегапиксель, без скрытых платежей и комиссий. Заказ фотосессии или работа дизайнера обойдется в десятки тысяч рублей, а генерация стоит копейки.",
      icon: <Coins size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/17447968-8ba9-4cc6-94f6-e5501187f927.png"
    },
    {
      id: "speed",
      title: "Скорость",
      description: "Генерируйте уникальные изображения за считанные секунды вместо часов ожидания работы дизайнера. Автоматизация процесса позволяет мгновенно получать готовые результаты для любых маркетинговых кампаний.",
      icon: <Zap size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/26041d01-9221-4b43-aecf-0e81d9298494.png"
    },
    {
      id: "uniqueness",
      title: "Уникальность",
      description: "Каждое изображение создается с нуля специально под ваш запрос. Никаких шаблонов или повторений - только оригинальный контент, который идеально соответствует вашим требованиям и брендбуку.",
      icon: <Image size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/95d46a3f-11e9-4aa8-8662-9966c43a0285.png"
    },
    {
      id: "integration",
      title: "Интеграция",
      description: "Простое API-подключение без необходимости дополнительных инвестиций в программное обеспечение. Интегрируйте генерацию изображений напрямую в ваши существующие системы и рабочие процессы.",
      icon: <Sparkles size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/f444771a-94ef-4218-9416-0547fc10fe39.png"
    },
    {
      id: "security",
      title: "Безопасность",
      description: "Прямые платежи на ИП, полное соответствие законодательству РФ. Все данные и сгенерированные изображения защищены и принадлежат только вам, без каких-либо ограничений на использование.",
      icon: <Shield size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/6affc9d8-1365-4e5d-b437-5830135cb6fa.png"
    },
    {
      id: "scalability",
      title: "Масштабируемость",
      description: "Нет ограничений по объему и количеству запросов. Нуждаетесь в сотне изображений или в тысяче? Система справится с любой нагрузкой и объемом заказов, поддерживая ваши самые амбициозные маркетинговые кампании.",
      icon: <BarChart3 size={32} className="text-[#9b87f5]" />,
      imageUrl: "https://cdn.poehali.dev/files/bfdc3d6d-31ea-4e1c-af96-ab13c4303c0e.png"
    }
  ];
  
  // Находим активный feature по id
  const activeFeature = features.find(feature => feature.id === activeTab);
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выгоды для вашего бизнеса</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RussFlux — революционный генератор изображений по 1₽ за мегапиксель
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="economy" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-3 bg-transparent p-0 mb-8">
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
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-hidden">
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
                  
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-[320px] aspect-square rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={activeFeature.imageUrl} 
                        alt={activeFeature.title}
                        className="w-full h-full object-contain bg-[#f7f9fc]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabsSection;
