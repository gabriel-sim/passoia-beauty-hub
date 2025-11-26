import mastercardImg from "@/assets/mastercard.png";
import visaImg from "@/assets/visa.png";
import pixImg from "@/assets/pix.png";
import boletoImg from "@/assets/boleto.png";
import instaImg from "@/assets/insta.png";
import facebookImg from "@/assets/facebook.png";
import youtubeImg from "@/assets/youtube.png";
import twitterImg from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-gold">ATENDIMENTO</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-gold transition-colors duration-300"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-gold transition-colors duration-300"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-gold transition-colors duration-300"
                >
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-gold transition-colors duration-300"
                >
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Payment Methods */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-gold">FORMAS DE PAGAMENTO</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <img src={boletoImg} alt="Boleto" className="h-8 w-auto object-contain" />
              <img src={pixImg} alt="Pix" className="h-8 w-auto object-contain" />
              <img src={visaImg} alt="Visa" className="h-8 w-auto object-contain" />
              <img src={mastercardImg} alt="Mastercard" className="h-8 w-auto object-contain" />
            </div>
          </div>

          {/* Column 3 - Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-rose-gold">SIGA-NOS NAS REDES SOCIAIS</h3>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              >
                <img src={twitterImg} alt="Twitter" className="h-8 w-8 object-contain" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="YouTube"
              >
                <img src={youtubeImg} alt="YouTube" className="h-8 w-8 object-contain" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <img src={facebookImg} alt="Facebook" className="h-8 w-8 object-contain" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <img src={instaImg} alt="Instagram" className="h-8 w-8 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; 2025 Passoia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
