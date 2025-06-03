import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RSVPSection = () => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl p-8 rounded-3xl">
        <div className="space-y-6">
          <div className="text-4xl mb-4">💌</div>

          <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-gray-800">
            Подтвердите присутствие
          </h3>

          <p className="font-montserrat text-gray-600 text-sm md:text-base leading-relaxed">
            Пожалуйста, сообщите о своем присутствии до 1 июля 2024 года
          </p>

          <div className="space-y-3 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-montserrat text-base py-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => window.open("tel:+79001234567", "_self")}
            >
              📞 Позвонить: +7 (900) 123-45-67
            </Button>

            <Button
              variant="outline"
              className="w-full border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-montserrat text-base py-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open("https://wa.me/79001234567", "_blank")}
            >
              💬 Написать в WhatsApp
            </Button>
          </div>

          <div className="pt-6 border-t border-purple-200">
            <p className="font-montserrat text-xs text-gray-500 italic">
              С любовью и нетерпением ждем встречи с вами! 💕
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RSVPSection;
