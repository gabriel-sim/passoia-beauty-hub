import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LooksSection from "@/components/LooksSection";
import ProductSection from "@/components/ProductSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <LooksSection />
        <ProductSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
