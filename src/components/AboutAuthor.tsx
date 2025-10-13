const AboutAuthor = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Sobre o Autor
            </h2>
          </div>
          
          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://teles-lpsaxv.manus.space/assets/vitor-profile-CiOPwwZR.webp"
                  alt="Vitor Teles"
                  className="w-48 h-48 rounded-2xl object-cover shadow-medium border-4 border-primary/10"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  Vitor Teles
                </h3>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    Meu nome é Vitor Teles, ou pode me chamar de <span className="text-primary font-semibold">Teles Forever</span>... um homem que se revoltou contra o sistema para servir o povo.
                  </p>
                  
                  <p className="leading-relaxed">
                    Tive muitos vícios, mas consegui vencê-los construindo uma identidade própria e criando um propósito para a minha vida. Hoje ajudo milhares de jovens a encontrarem o seu rumo na vida através do meu treinamento.
                  </p>
                  
                  <p className="text-primary font-semibold text-lg mt-6">
                    Teles Forever até depois do fim!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
