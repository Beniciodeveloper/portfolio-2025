import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <div className="bg-secondary w-full h-auto p-10 flex flex-col md:flex-row gap-10 rounded-[66px] relative md:pl-[50px] md:pr-[70px]">
      {/* Título "Entre em contato" com animação fade-in-up */}
        <ScrollReveal  className="flex justify-center items-center">
          <div className="md:w-[50%] text-center mt-[9%] xl:mt-[6%]  flex justify-center items-center ">
            <h1 className="text-[34px] color-primary font-semibold md:text-[60px] lg:text-[60px] md:ml-40">
              Entre em contato
            </h1>
          </div>
        </ScrollReveal>

      {/* Formulário com animação fade-in-right */}
      <div className="md:w-[50%]">
      <ScrollReveal delay={200}>
        <form className="rounded-lg space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              rows="4"
            />
          </div>

          {/* Botão de Envio com animação fade-in-up */}
          <ScrollReveal delay={400}>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Enviar
            </button>
          </ScrollReveal>
        </form>
      </ScrollReveal>
      </div>
    </div>
  );
}

export default Contact;