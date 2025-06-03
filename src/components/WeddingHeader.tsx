import { useEffect, useState } from "react";

const WeddingHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="mb-6">
        <div className="text-6xl mb-2">💕</div>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto mb-8"></div>
      </div>

      <h1 className="font-cormorant md:text-7xl text-gray-800 mb-4 leading-tight text-center text-5xl font-normal">
        Александр & Мария
      </h1>

      <p className="font-montserrat text-lg md:text-xl text-gray-600 tracking-wider uppercase mb-6">
        Приглашают вас разделить радость
      </p>

      <div className="text-4xl mb-4">🌸</div>
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mx-auto"></div>
    </div>
  );
};

export default WeddingHeader;
