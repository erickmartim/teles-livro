const BookSection = () => {
  return (
    <section id="sobre-livro" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Teles Forever: <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                A Última Verdade
              </span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                Um livro transformador que vai te guiar através de uma jornada de autoconhecimento e crescimento pessoal.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8">
                "Esvaziar-se é um ato de coragem brutal. Porque significa olhar para sua vida e perguntar: 'Isto ainda sou eu? Ou é apenas o fantasma de quem eu já fui?'"
              </blockquote>
              
              <p className="text-lg leading-relaxed">
                Descubra como transformar obstáculos em oportunidades e construir uma vida com propósito.
              </p>
            </div>
            
            <a 
              href="#onde-comprar"
              className="inline-flex items-center justify-center mt-8 px-8 py-4 text-lg font-semibold text-white bg-gradient-hero rounded-full hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              Quero transformar minha vida
            </a>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <img 
              src="https://teles-lpsaxv.manus.space/assets/book-cover-i2jkNOSo.webp"
              alt="Teles Forever: A Última Verdade"
              className="w-full max-w-md mx-auto rounded-2xl shadow-strong hover:shadow-medium transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
