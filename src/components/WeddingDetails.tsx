import { Card } from "@/components/ui/card";

const WeddingDetails = () => {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl p-8 md:p-12 rounded-3xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-3xl">💒</div>
            <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-gray-800">
              Венчание
            </h2>
            <div className="space-y-2">
              <p className="font-montserrat text-xl text-gray-700 font-medium">
                15 июля 2024
              </p>
              <p className="font-montserrat text-lg text-gray-600">в 14:00</p>
              <p className="font-montserrat text-base text-gray-600">
                Храм Христа Спасителя
              </p>
              <p className="font-montserrat text-sm text-gray-500">
                ул. Волхонка, 15, Москва
              </p>
            </div>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto"></div>

          <div className="space-y-4">
            <div className="text-3xl">🥂</div>
            <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-gray-800">
              Торжество
            </h2>
            <div className="space-y-2">
              <p className="font-montserrat text-xl text-gray-700 font-medium">
                15 июля 2024
              </p>
              <p className="font-montserrat text-lg text-gray-600">в 18:00</p>
              <p className="font-montserrat text-base text-gray-600">
                Ресторан "Золотая осень"
              </p>
              <p className="font-montserrat text-sm text-gray-500">
                Петровский бульвар, 12, Москва
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WeddingDetails;
