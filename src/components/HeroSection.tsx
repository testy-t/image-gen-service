import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Image as ImageIcon, DollarSign } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const carouselImages = [
    {
      url: "https://cdn.poehali.dev/files/b178ad60-86c9-4eae-85db-41b123dca920.png",
      alt: "Портрет в красных тонах"
    },
    {
      url: "https://cdn.poehali.dev/files/ef34964d-411a-466f-ac4e-03baef17fd3f.png",
      alt: "Морской пейзаж с волнами и камнями"
    },
    {
      url: "https://cdn.poehali.dev/files/5a6a2979-bb52-49ee-9300-f7839899b84c.png",
      alt: "Неоновый астронавт"
    }
  ];

  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/ea8cc35c-52a7-4de2-973d-11c37ad63b2e.svg" alt="Telegram" className="w-5 h-5" />
  );

  return (
    <section className="py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            {/* Заголовок идет первым с переносом на мобильных */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center md:text-left">
              Оптовый Flux в России,<br className="md:hidden" /> <span className="text-[#9b87f5]">1 ₽</span> за мегапиксель
            </h1>
            
            {/* Карусель для мобильных устройств (после заголовка) */}
            <div className="w-full md:hidden mb-6 relative">
              <Carousel className="w-full max-w-[400px] mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden shadow-xl">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full object-cover aspect-square"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
              </Carousel>
              <div className="text-center text-sm text-gray-500 mt-2">
                Примеры сгенерированных изображений за <span className="font-bold">1 рубль</span>
              </div>
            </div>
            
            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => window.open('https://t.me/qanelph', '_blank')}
              >
                <TelegramIcon />
                <span>Начать сотрудничество</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5] flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowRight size={18} />
                <span>Узнать больше</span>
              </Button>
            </div>
            
            {/* Описание и цена - после кнопок */}
            <p className="text-lg md:text-xl mb-4 text-gray-700 text-center md:text-left">
              RussFlux — сервис для мгновенной генерации уникальных изображений по текстовому запросу.
            </p>
            <p className="text-lg mb-6 text-gray-700 bg-[#F0F7FF] p-3 rounded-lg border border-[#E0EEFF] text-center md:text-left">
              Картинка 1000×1000 пикселей = <span className="font-bold text-[#9b87f5]">1 рубль</span>
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 md:mt-12">
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
          
          {/* Карусель для десктопов (показывается справа) */}
          <div className="hidden md:flex-1 md:flex">
            <div className="w-full relative">
              <Carousel className="w-full max-w-[600px] mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full object-cover aspect-square"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
              </Carousel>
              <div className="text-center text-sm text-gray-500 mt-4">
                Примеры сгенерированных изображений за <span className="font-bold">1 рубль</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
