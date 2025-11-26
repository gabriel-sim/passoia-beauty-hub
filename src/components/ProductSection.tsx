import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import batomAbertoImg from "@/assets/batomaberto.png";
import batomFechadoImg from "@/assets/batomfechado.png";
import batom3Img from "@/assets/batom3.png";
import fotoMulherImg from "@/assets/fotomulher.png";
import estrelasImg from "@/assets/estrelas.png";
import bolacor1Img from "@/assets/bolacor.png";
import bolacor2Img from "@/assets/bolacor2.png";
import bolacor3Img from "@/assets/bolacor3.png";
import bolacor4Img from "@/assets/bolacor4.png";
import mulher1Img from "@/assets/mulher1.png";
import mulher2Img from "@/assets/mulher2.png";
import mulher3Img from "@/assets/mulher3.png";
import mulher4Img from "@/assets/mulher4.png";

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const products = [
    { img: batomAbertoImg, name: "Batom Matte Premium - Aberto", price: "R$ 89,90" },
    { img: batomFechadoImg, name: "Batom Matte Premium - Fechado", price: "R$ 89,90" },
    { img: batom3Img, name: "Batom Matte Premium - Edição Especial", price: "R$ 89,90" },
  ];

  const colors = [
    { img: bolacor1Img, modelImg: fotoMulherImg, name: "Lavanda Suave" },
    { img: bolacor2Img, modelImg: mulher2Img, name: "Vermelho Intenso" },
    { img: bolacor3Img, modelImg: mulher3Img, name: "Burgundy Elegante" },
    { img: bolacor4Img, modelImg: mulher4Img, name: "Nude Natural" },
  ];

  return (
    <section id="lancamentos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 - Product Gallery (hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(index)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 2 - Main Model Image */}
          <div className="lg:order-none order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={colors[selectedColorIndex].modelImg}
                alt="Model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 3 - Product Details */}
          <div className="flex flex-col gap-6 lg:order-none order-2">
            <div className="flex justify-center">
              <img src={estrelasImg} alt="5 estrelas" className="h-8 object-contain" />
            </div>

            <h3 className="text-3xl font-bold text-center text-primary">Matte Premium</h3>

            <div>
              <p className="text-lg font-semibold text-center mb-4 text-foreground">
                Cores Disponíveis
              </p>
              <div className="flex justify-center gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColorIndex(index)}
                    className={`rounded-full overflow-hidden w-16 h-16 border-4 transition-all duration-300 transform hover:scale-110 ${
                      selectedColorIndex === index
                        ? "border-primary shadow-lg"
                        : "border-border"
                    }`}
                  >
                    <img
                      src={color.img}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-soft-pink p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-burgundy">Detalhamento</h4>
              <p className="text-sm leading-relaxed text-foreground/80">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de
                cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte
                aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra
                ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos
                lábios.
              </p>
            </div>

            {/* Mobile Product Gallery */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProduct(index)}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedProduct !== null && products[selectedProduct].name}
            </DialogTitle>
          </DialogHeader>
          {selectedProduct !== null && (
            <div className="space-y-4">
              <img
                src={products[selectedProduct].img}
                alt={products[selectedProduct].name}
                className="w-full rounded-lg"
              />
              <div className="bg-soft-pink p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">
                  {products[selectedProduct].price}
                </p>
                <p className="text-sm text-foreground/80">
                  Batom Matte Premium com fórmula inovadora, acabamento aveludado e alta
                  pigmentação. Hidrata enquanto entrega cor intensa.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductSection;
