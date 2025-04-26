import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Image as ImageIcon, DollarSign } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Генерация изображений по <span className="text-[#9b87f5]">1 ₽</span> для мобильных операторов
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Flux Schnell — сервис для мгновенной генерации уникальных изображений по текстовому запросу. Идеально для маркетинговых кампаний, рекламы и контент-стратегий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={onContactClick}
              >
                Начать сотрудничество <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5]"
              >
                Узнать больше
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center gap-2">
                <Zap className="text-[#9b87f5]" />
                <span>Мгновенная генерация</span>
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon className="text-[#9b87f5]" />
                <span>Уникальный контент</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="text-[#9b87f5]" />
                <span>Экономия бюджета</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3R8fHx8fHwxNzE0MjMyMjg4&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Сгенерированное изображение" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3R8fHx8fHwxNzE0MjMyMjg5&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Сгенерированное изображение" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-2 hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2NlYW58fHx8fHwxNzE0MjMyMjk0&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Сгенерированное изображение" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform -translate-y-2 hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbHx8fHx8fDE3MTQyMzIyOTg&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Сгенерированное изображение" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
