import React from "react";
import { cn } from "@/lib/utils";
import { Zap, Coins, Image, Sparkles, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Скорость",
      description: "Генерация изображений за секунды вместо часов работы дизайнера",
      icon: <Zap size={24} className="text-[#9b87f5]" />,
    },
    {
      title: "Экономия",
      description: "Всего 1 ₽ за мегапиксель при любом объеме заказа",
      icon: <Coins size={24} className="text-[#9b87f5]" />,
    },
    {
      title: "Уникальность",
      description: "Каждое изображение создается с нуля под вашу задачу",
      icon: <Image size={24} className="text-[#9b87f5]" />,
    },
    {
      title: "Интеграция",
      description: "Простое API-подключение без дополнительных вложений",
      icon: <Sparkles size={24} className="text-[#9b87f5]" />,
    },
    {
      title: "Безопасность",
      description: "Прямые платежи, полное соответствие законодательству РФ",
      icon: <Shield size={24} className="text-[#9b87f5]" />,
    },
    {
      title: "Масштабируемость",
      description: "Без ограничений по объему и количеству запросов",
      icon: <BarChart3 size={24} className="text-[#9b87f5]" />,
    },
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выгоды для мобильного оператора</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RussFlux предлагает революционное решение для вашего маркетингового департамента
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-[#9b87f5]/10 p-4 rounded-full">
                <img 
                  src="https://cdn.poehali.dev/files/a3222366-d8fc-4e3d-b3e3-6563b4f6ca1c.png" 
                  alt="RussFlux" 
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

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-b py-10 px-6 relative group/feature dark:border-neutral-800 hover:bg-white hover:shadow-lg transition-all duration-300",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#9b87f5]/5 to-transparent pointer-events-none rounded-lg" />
      
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="mb-4 relative z-10 text-neutral-600">
            <div className="bg-white p-3 rounded-xl inline-flex items-center justify-center shadow-sm group-hover/feature:shadow transform group-hover/feature:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          
          <div className="text-lg font-bold mb-2 relative z-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#9b87f5] transition-all duration-200 origin-center" />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
              {title}
            </span>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10">
            {description}
          </p>
        </div>
        
        <div className="mt-6 relative z-10">
          <div className="w-full h-24 rounded-lg overflow-hidden">
            <img 
              src={`https://source.unsplash.com/featured/?${title.toLowerCase()},digital,ai`} 
              alt={title}
              className="w-full h-full object-cover transform group-hover/feature:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
