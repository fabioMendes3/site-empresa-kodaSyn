import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import landingPageImg from "../assets/landing-page.jpg";
import businessSiteImg from "../assets/business-site.jpg";
import institutionalImg from "../assets/institutional-site.jpg";
import companySiteImg from "../assets/company-site.jpg";
import webAppImg from "../assets/web-app.jpg";
import logoMasc from "../assets/log+masc.png";

const services = [
  {
    id: 1,
    title: "Landing Pages",
    tag: "Conversão",
    description:
      "Páginas estratégicas e impactantes para campanhas, lançamentos, captação de leads e apresentação de produtos ou serviços.",
    points: ["Alta conversão", "Design moderno", "Carregamento rápido"],
    image: landingPageImg,
  },
  {
    id: 2,
    title: "Sites para Negócios",
    tag: "Vendas & Presença",
    description:
      "Sites profissionais para lojas, restaurantes e negócios locais que precisam fortalecer a presença digital e atrair mais clientes.",
    points: ["Lojas", "Restaurantes", "Catálogos digitais"],
    image: businessSiteImg,
  },
  {
    id: 3,
    title: "Sites Institucionais",
    tag: "Autoridade",
    description:
      "Estruturas sólidas para apresentar sua marca, seus valores, seus serviços e transmitir mais confiança ao público.",
    points: ["Credibilidade", "Apresentação profissional", "Identidade forte"],
    image: institutionalImg,
  },
  {
    id: 4,
    title: "Sites para Empresas",
    tag: "Escala",
    description:
      "Projetos completos para empresas que precisam de uma presença robusta, sofisticada e alinhada com posicionamento de mercado.",
    points: ["Estrutura corporativa", "Visual premium", "Expansão digital"],
    image: companySiteImg,
  },
  {
    id: 5,
    title: "Aplicativos Web",
    tag: "Soluções Inteligentes",
    description:
      "Desenvolvimento de sistemas e aplicações web sob medida para automatizar processos, organizar operações e gerar eficiência.",
    points: ["Painéis", "Sistemas internos", "Automação de processos"],
    image: webAppImg,
  },
];

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const sideCards = useMemo(() => {
    const prevIndex = (activeIndex - 1 + services.length) % services.length;
    const nextIndex = (activeIndex + 1) % services.length;

    return {
      prev: services[prevIndex],
      next: services[nextIndex],
    };
  }, [activeIndex]);

  return (
    <section
      id="services"
      className="relative h-screen overflow-hidden bg-black pt-14 md:pt-24"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="absolute left-3 top-3 z-30 md:left-8 md:top-8">
        <img
          src={logoMasc}
          alt="KodaSyn"
          className="h-[82px] w-[164px] object-contain md:h-[200px] md:w-[400px]"
          draggable={false}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#25B7F3]/10 blur-[130px]" />
        <div className="absolute right-[12%] top-[14%] h-[320px] w-[320px] rounded-full bg-[#1193E6]/8 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[16%] h-[260px] w-[260px] rounded-full bg-[#0A4FB3]/10 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[14%] h-[300px] w-[300px] rounded-full bg-[#25B7F3]/8 blur-[140px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,147,230,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,147,230,0.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative z-20 mx-auto flex h-full max-w-[1880px] flex-col px-4 md:px-6">
        <div className="pt-1 text-center">
          <h2 className="mx-auto mt-2 max-w-[760px] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
            serviços e soluções
            <span className="block text-[#A9E4FF]/70">
              para a sua empresa
            </span>
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center pt-3 md:pt-6">
          <motion.div
            animate={{ opacity: 0.4, scale: 1 }}
            className="absolute left-[10%] hidden w-[190px] rounded-[20px] border border-[#1193E6]/10 bg-[#1193E6]/[0.04] p-4 backdrop-blur-md xl:block"
            style={{
              boxShadow:
                "0 0 22px rgba(17,147,230,0.08), inset 0 0 12px rgba(17,147,230,0.04)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9E4FF]/45">
              Anterior
            </p>
            <h3 className="mt-3 text-base font-semibold text-white/85">
              {sideCards.prev.title}
            </h3>
            <p className="mt-3 text-xs leading-7 text-cyan-50/55">
              {sideCards.prev.description}
            </p>
          </motion.div>

          <div className="relative mx-auto flex w-full max-w-[960px] items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#1193E6]/18 bg-[#1193E6]/[0.06] text-[#B6E9FF] backdrop-blur-md transition hover:scale-105 hover:border-[#25B7F3]/30 md:h-11 md:w-11"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="w-full px-11 md:px-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                    scale: 0.985,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    scale: 0.985,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden rounded-[18px] border border-[#1193E6]/16 bg-[#1193E6]/[0.05] px-3.5 py-3.5 backdrop-blur-xl md:rounded-[28px] md:px-6 md:py-6"
                  style={{
                    boxShadow:
                      "0 0 50px rgba(17,147,230,0.10), inset 0 0 20px rgba(17,147,230,0.05)",
                  }}
                >
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#1193E6]/10 blur-3xl" />

                  <div className="relative z-10 grid items-stretch gap-3 md:min-h-[285px] md:grid-cols-[0.9fr_1.1fr] md:gap-5">
                    <div className="order-2 flex flex-col justify-center md:order-1">
                      <span className="inline-flex w-fit rounded-full border border-[#25B7F3]/20 bg-[#1193E6]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-[#A9E4FF]/70 md:px-3 md:py-1.5 md:text-[11px] md:tracking-[0.28em]">
                        {activeService.tag}
                      </span>

                      <h3 className="mt-2 text-[1.55rem] font-semibold leading-tight text-white sm:text-[1.85rem] md:mt-3 md:text-[2.5rem]">
                        {activeService.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-5 text-cyan-50/75 sm:text-sm md:mt-3 md:text-base md:leading-7">
                        {activeService.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2 md:mt-5 md:gap-2.5">
                        {activeService.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-[#D6F3FF]/70 md:px-3 md:py-1.5 md:text-xs md:tracking-[0.22em]"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="order-1 flex h-full items-stretch justify-center md:order-2 md:justify-end">
                      <div className="relative h-[132px] w-full overflow-hidden rounded-[16px] border border-[#1193E6]/18 bg-[#1193E6]/[0.06] shadow-[0_0_24px_rgba(17,147,230,0.14)] sm:h-[160px] md:h-full md:min-h-[285px] md:rounded-[22px]">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#1193E6]/18 bg-[#1193E6]/[0.06] text-[#B6E9FF] backdrop-blur-md transition hover:scale-105 hover:border-[#25B7F3]/30 md:h-11 md:w-11"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>

          <motion.div
            animate={{ opacity: 0.4, scale: 1 }}
            className="absolute right-[10%] hidden w-[190px] rounded-[20px] border border-[#1193E6]/10 bg-[#1193E6]/[0.04] p-4 backdrop-blur-md xl:block"
            style={{
              boxShadow:
                "0 0 22px rgba(17,147,230,0.08), inset 0 0 12px rgba(17,147,230,0.04)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9E4FF]/45">
              Próximo
            </p>
            <h3 className="mt-3 text-base font-semibold text-white/85">
              {sideCards.next.title}
            </h3>
            <p className="mt-3 text-xs leading-7 text-cyan-50/55">
              {sideCards.next.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
