import novidadesImg from "@/assets/novidades.png";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-20 px-4 bg-gradient-to-b from-soft-pink to-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          NOVIDADES PARA VOCÊ
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={novidadesImg}
              alt="Novidades Passoia"
              className="w-full h-[30vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
