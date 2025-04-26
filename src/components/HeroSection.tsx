import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Image as ImageIcon, DollarSign, MessageSquare } from "lucide-react";
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

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Оптовый Flux в России, <span className="text-[#9b87f5]">1 ₽</span> за мегапиксель
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-700">
              Flux Ru — сервис для мгновенной генерации уникальных изображений по текстовому запросу.
            </p>
            <p className="text-lg mb-8 text-gray-700 bg-[#F0F7FF] p-3 rounded-lg border border-[#E0EEFF]">
              Картинка 1000×1000 пикселей = <span className="font-bold text-[#9b87f5]">1 рубль</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white flex items-center gap-2"
                onClick={() => window.open('https://t.me/qanelph', '_blank')}
              >
                <MessageSquare size={18} />
                <span>Начать сотрудничество</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5] flex items-center gap-2"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowRight size={18} />
                <span>Узнать больше</span>
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
          
          <div className="flex-1">
            <div className="mb-2 text-center text-sm text-gray-500">
              Примеры сгенерированных изображений (1000×1000 пикс.)
            </div>
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
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="static translate-y-0 -ml-0" />
                <CarouselNext className="static translate-y-0 -mr-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
