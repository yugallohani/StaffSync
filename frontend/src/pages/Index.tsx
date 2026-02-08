import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import LoginSection from "@/components/homepage/LoginSection";
import Footer from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
