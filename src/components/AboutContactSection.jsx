import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import logoMasc from "../assets/log+masc.png";

const emailJsConfig = {
  serviceId: "service_p1g17je",
  templateId: "template_3g6ofd3",
  publicKey: "elc9gw6KzUooPtDkZ",
};

const contactItems = [
  {
    label: "Email",
    value: "contato@kodasyn.com",
    href: "mailto:contato@kodasyn.com",
  },
  {
    label: "WhatsApp",
    value: "(41) 98889-4130",
    href: "https://wa.me/5541988894130",
  },
  {
    label: "Endereco",
    value: "Curitiba/PR",
  },
];

const socialItems = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kodasyn.websistem/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  
  {
    label: "Behance",
    href: "https://www.behance.net/fabiomendes28",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4 6.8h5c2.4 0 4 1.2 4 3.2 0 1.4-.8 2.3-1.9 2.7 1.6.3 2.6 1.5 2.6 3.3 0 2.4-1.8 3.8-4.6 3.8H4V6.8Zm4.7 5.1c1 0 1.7-.5 1.7-1.4 0-.9-.7-1.4-1.7-1.4H6.7v2.8h2Zm.3 5.5c1.2 0 1.9-.5 1.9-1.6S10.2 14 9 14H6.7v3.4H9Zm6.8-6.5h4.2V9.8h-4.2v1.1Zm4.3 4.8h2.3c-.3 2.4-2.2 4.3-5.2 4.3-3.4 0-5.5-2.4-5.5-5.7s2.2-5.8 5.4-5.8c3.6 0 5.4 2.8 5.3 6.3h-8.1c.1 1.7 1.1 2.7 2.8 2.7 1.3 0 2.4-.7 2.7-1.8Z" />
      </svg>
    ),
  },
];

function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setFeedback({
        type: "error",
        message: "Preencha todos os campos.",
      });
      return;
    }

    if (
      emailJsConfig.serviceId === "SEU_SERVICE_ID" ||
      emailJsConfig.templateId === "SEU_TEMPLATE_ID" ||
      emailJsConfig.publicKey === "SUA_PUBLIC_KEY"
    ) {
      setFeedback({
        type: "error",
        message:
          "EmailJS nao esta configurado. Preencha serviceId, templateId e publicKey no codigo.",
      });
      return;
    }

    try {
      setIsSending(true);
      setFeedback({ type: "", message: "" });

      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        {
          publicKey: emailJsConfig.publicKey,
        }
      );

      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso.",
      });

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      const errorText =
        typeof error?.text === "string" && error.text
          ? ` Detalhe: ${error.text}`
          : "";

      setFeedback({
        type: "error",
        message: `Nao foi possivel enviar a mensagem.${errorText}`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative h-full overflow-hidden bg-[#02070c] text-white"
    >
      <div className="absolute left-6 top-6 z-30 md:left-8 md:top-8">
        <img
          src={logoMasc}
          alt="KodaSyn"
          className="h-[200px] w-[400px] object-contain"
          draggable={false}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-[4%] top-[12%] h-72 w-72 rounded-full bg-[#25B7F3]/12 blur-[120px]" />
        <div className="absolute right-[6%] top-[18%] h-80 w-80 rounded-full bg-[#0A4FB3]/14 blur-[140px]" />
        <div className="absolute bottom-[12%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,183,243,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,183,243,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 pb-5 pt-16 md:px-8 md:pb-6 md:pt-20">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-cyan-200/80">
              contato
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-[3.2rem]">
              fale com a KodaSyn
              <span className="block text-cyan-200/80">
                e tire seu projeto do papel
              </span>
            </h2>
          </motion.div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[0.78fr_1.22fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:p-6"
              style={{
                boxShadow:
                  "0 0 44px rgba(17,147,230,0.10), inset 0 0 24px rgba(255,255,255,0.03)",
              }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/55">
                    contatos
                  </p>
                  <h3 className="mt-2 text-[1.5rem] font-semibold text-white md:text-[1.75rem]">
                    fale pelos canais abaixo
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/68">
                    Contato direto para briefing, proposta e alinhamento inicial.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {contactItems.map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="mt-1.5 block text-base font-medium text-white transition hover:text-cyan-200 md:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-base font-medium text-white md:text-lg">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/55">
                    redes sociais
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {socialItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/80 transition hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-cyan-400/12 bg-[#07131d]/80 p-5 backdrop-blur-xl md:p-6"
              style={{
                boxShadow:
                  "0 0 52px rgba(17,147,230,0.12), inset 0 0 28px rgba(17,147,230,0.05)",
              }}
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/55">
                  mensagem
                </p>
                <h3 className="mt-2 text-[1.5rem] font-semibold text-white md:text-[1.75rem]">
                  descreva o que voce precisa
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
                  Use o formulario para passar o contexto inicial. Quanto mais
                  claro o briefing, mais objetiva sera a conversa seguinte.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 mt-5 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/65">Nome</span>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white px-4 text-black outline-none transition placeholder:text-black/45 focus:border-cyan-400/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/65">Email</span>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="seuemail@dominio.com"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white px-4 text-black outline-none transition placeholder:text-black/45 focus:border-cyan-400/40"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/65">
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Explique seu projeto, objetivo, prazo ou a ideia principal."
                    className="min-h-[132px] w-full resize-none rounded-[26px] border border-white/10 bg-white px-4 py-3.5 text-black leading-7 outline-none transition placeholder:text-black/45 focus:border-cyan-400/40"
                    style={{ whiteSpace: "pre-wrap" }}
                  />
                </label>

                {feedback.message && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      feedback.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {feedback.message}
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[11px] uppercase tracking-[0.16em] text-white/38">
                    retorno com foco em clareza, prazo e direcionamento
                  </p>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-500 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <footer className="mt-4 border-t border-white/10 pt-3">
          <div className="flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} KodaSyn. Todos os direitos reservados.</p>

            <div className="flex flex-wrap gap-5">
              <span className="text-white/35">Design digital</span>
              <span className="text-white/35">Sites sob medida</span>
              <span className="text-white/35">Contato direto</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;
