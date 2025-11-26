import bannerImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full h-[60vh] relative overflow-hidden">
      <img
        src={bannerImg}
        alt="Passoia Beauty Collection"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
