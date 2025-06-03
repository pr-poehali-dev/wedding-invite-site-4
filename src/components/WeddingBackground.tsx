const WeddingBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl text-green-200 opacity-30 animate-pulse">
        🌸
      </div>
      <div className="absolute top-32 right-16 text-4xl text-emerald-200 opacity-40 animate-pulse delay-1000">
        💐
      </div>
      <div className="absolute bottom-20 left-20 text-5xl text-green-200 opacity-25 animate-pulse delay-2000">
        🌹
      </div>
      <div className="absolute bottom-40 right-12 text-3xl text-emerald-200 opacity-35 animate-pulse delay-500">
        🕊️
      </div>

      {/* Floating Hearts */}
      <div className="absolute top-1/4 left-1/4 text-2xl text-green-300 opacity-20 animate-bounce">
        💕
      </div>
      <div className="absolute top-3/4 right-1/3 text-xl text-emerald-300 opacity-25 animate-bounce delay-1000">
        💖
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16">{children}</div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 opacity-50"></div>
    </div>
  );
};

export default WeddingBackground;
