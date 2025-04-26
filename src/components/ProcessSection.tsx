import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Подключение",
      description: "Быстрая интеграция по API с вашими существующими системами. Минимальные технические требования."
    },
    {
      number: "02",
      title: "Использование",
      description: "Передайте текстовый запрос и получите готовое изображение для любых маркетинговых нужд за секунды."
    },
    {
      number: "03",
      title: "Оплата",
      description: "Оплачивайте только реальное использование. 1 ₽ за изображение, независимо от объема заказа."
    }
  ];
  
  return (
    <section id="process" className="py-16 bg-gradient-to-r from-[#f2fcff] to-[#f5f0ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Простой процесс интеграции и использования сервиса Flux Schnell
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="p-8 bg-white rounded-xl shadow-lg h-full">
                <div className="text-5xl font-bold text-[#9b87f5]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#9b87f5]" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Готовы протестировать?</h3>
              <p className="text-gray-600 mb-4">
                Мы предлагаем пилотный запуск и тестирование сервиса на реальных кейсах в течение 1 дня.
                Вы сможете оценить скорость и качество работы системы на практике.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>Без обязательств</li>
                <li>Техническая поддержка 24/7</li>
                <li>Полный доступ ко всем функциям</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MTQyMzIzMDM&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Тестирование сервиса" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
