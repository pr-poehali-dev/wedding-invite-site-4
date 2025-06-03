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
            Пожалуйста, сообщите о своем присутствии до 1 сентября 2025 года
          </p>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <div className="text-2xl mb-2">👶➡️🏠</div>
            <p className="font-montserrat text-sm text-green-800 leading-relaxed font-medium">
              На нашей свадьбе планируется очень активная развлекательная
              программа для взрослых. Поэтому просим Вас оставить деток в
              надёжных руках в этот вечер.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-montserrat text-base py-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => window.open("tel:+79001234567", "_self")}
            >
              📞 Позвонить: +7 (900) 123-45-67
            </Button>

            <Button
              variant="outline"
              className="w-full border-2 border-green-300 text-green-700 hover:bg-green-50 font-montserrat text-base py-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open("https://wa.me/79001234567", "_blank")}
            >
              💬 Написать в WhatsApp
            </Button>
          </div>

          <div className="pt-6 border-t border-green-200">
            <p className="font-montserrat text-xs text-gray-500 italic">
              С любовью и нетерпением ждем встречи с вами! 💚
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RSVPSection;
