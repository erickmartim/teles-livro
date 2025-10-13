const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pronto para transformar sua vida?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Garanta agora seu exemplar de <span className="font-semibold">Teles Forever: A Última Verdade</span> e comece sua jornada de transformação
          </p>
          
          <a 
            href="#onde-comprar"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-strong hover:shadow-medium hover:scale-105"
          >
            Quero meu exemplar
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
