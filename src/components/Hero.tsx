const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <img 
              src="https://teles-lpsaxv.manus.space/assets/vitor-profile-CiOPwwZR.webp"
              alt="Vitor Teles"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/30 shadow-strong object-cover"
            />
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Vitor Teles
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light italic mb-12 max-w-3xl mx-auto">
            "A transformação está na coragem de persistir"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#onde-comprar"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-medium hover:shadow-strong hover:scale-105"
            >
              Garanta seu exemplar
            </a>
            <a 
              href="#sobre-livro"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Conheça o livro
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
