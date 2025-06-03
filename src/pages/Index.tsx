import WeddingBackground from "@/components/WeddingBackground";
import WeddingHeader from "@/components/WeddingHeader";
import WeddingDetails from "@/components/WeddingDetails";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  return (
    <WeddingBackground>
      <div className="container mx-auto max-w-4xl">
        <WeddingHeader />
        <WeddingDetails />
        <RSVPSection />
      </div>
    </WeddingBackground>
  );
};

export default Index;
