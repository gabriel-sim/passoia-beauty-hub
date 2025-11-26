import labiosImg from "@/assets/labios.png";
import olhosImg from "@/assets/olhos.png";
import rostoImg from "@/assets/rosto.png";
import tendenciaImg from "@/assets/tendencia.png";

const LooksSection = () => {
  const cards = [
    { img: labiosImg, alt: "Lábios" },
    { img: olhosImg, alt: "Olhos" },
    { img: rostoImg, alt: "Rosto" },
    { img: tendenciaImg, alt: "Tendências" },
  ];

  return (
    <section id="look" className="py-20 px-4 bg-gradient-to-b from-background to-soft-pink">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LooksSection;
