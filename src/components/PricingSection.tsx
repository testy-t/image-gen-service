import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onContactClick: () => void;
}

const PricingSection = ({ onContactClick }: PricingSectionProps) => {
  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/660bc550-01fb-4be0-be7c-576aeeac262e.svg" alt="Telegram" className="w-5 h-5" />
  );

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Всего 1 ₽ за мегапиксель, независимо от объема. Без скрытых платежей или комиссий.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-[#9b87f5]/5 to-[#6E59A5]/5 rounded-2xl border border-[#9b87f5]/20 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Единый тариф для всех объемов</h3>
                <p className="text-gray-600">Подходит для любых маркетинговых задач</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#9b87f5]">1 ₽</div>
                <div className="text-sm text-gray-500">за мегапиксель</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3">Включено в тариф:</h4>
                <ul className="space-y-2">
                  {[
                    "Неограниченное количество запросов",
                    "Высокое качество изображений",
                    "Все форматы и разрешения",
                    "Приоритетная техническая поддержка",
                    "API-интеграция",
                    "Персональный менеджер"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#9b87f5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Идеально подходит для:</h4>
                <ul className="space-y-2">
                  {[
                    "Баннеров для рекламных кампаний",
                    "Иллюстраций для Push-уведомлений",
                    "Визуалов для социальных сетей",
                    "Оформления акций и спецпредложений",
                    "Создания промо-материалов",
                    "Массовой генерации контента"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#9b87f5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 mb-8">
              <div className="text-sm font-medium mb-2">Пример расчета:</div>
              <div className="text-gray-600 text-sm">
                Изображение 1000×1000 (1 мегапиксель) = <span className="font-bold">1 ₽</span>
              </div>
              <div className="text-gray-600 text-sm">
                Изображение 2000×2000 (4 мегапикселя) = <span className="font-bold">4 ₽</span>
              </div>
              <div className="text-gray-600 text-sm">
                Изображение 3000×2000 (6 мегапикселей) = <span className="font-bold">6 ₽</span>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] flex items-center gap-2"
                onClick={() => window.open('https://t.me/qanelph', '_blank')}
              >
                <TelegramIcon />
                <span>Начать сотрудничество</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
