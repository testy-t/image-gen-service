import { Button } from "@/components/ui/button";

const ContactForm = () => {
  // Иконка Telegram
  const TelegramIcon = () => (
    <img src="https://cdn.poehali.dev/files/ea8cc35c-52a7-4de2-973d-11c37ad63b2e.svg" alt="Telegram" className="w-5 h-5" />
  );
  
  // Открытие Telegram
  const openTelegram = () => {
    window.open('https://t.me/qanelph', '_blank');
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Остались вопросы?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Мы всегда открыты для сотрудничества и готовы ответить на все ваши вопросы
        </p>
        <Button 
          className="bg-[#9b87f5] hover:bg-[#7E69AB] flex items-center gap-2"
          onClick={openTelegram}
        >
          <TelegramIcon />
          <span>Связаться с нами</span>
        </Button>
      </div>
    </section>
  );
};

export default ContactForm;
