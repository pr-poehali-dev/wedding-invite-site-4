import { Card } from "@/components/ui/card";

const DressCodeSection = () => {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl p-8 md:p-12 rounded-3xl">
        <div className="text-center space-y-6">
          <div className="text-4xl mb-4">👗</div>

          <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-gray-800">
            Дресс-код
          </h3>

          <div className="space-y-4">
            <p className="font-montserrat text-lg text-gray-700 font-medium">
              Бежево-зеленая гамма
            </p>

            <div className="flex justify-center space-x-4 py-4">
              <div className="w-12 h-12 rounded-full bg-green-200 border-2 border-green-300"></div>
              <div className="w-12 h-12 rounded-full bg-emerald-300 border-2 border-emerald-400"></div>
              <div
                className="w-12 h-12 rounded-full bg-beige-200 border-2 border-beige-300"
                style={{ backgroundColor: "#F5F5DC" }}
              ></div>
              <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-200"></div>
            </div>

            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              Будем рады видеть вас в нарядах зелёных и бежевых оттенков! 💚
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DressCodeSection;
