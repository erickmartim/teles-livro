import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    "Parabéns pelo livro, amei a amostra grátis. Você fala com clareza o que precisa ser dito. Amei!",
    "Quem diria ein… virou escritor agora, te amo! Adorei o livro, minha mente é outra depois dele. Você fala com clareza o óbvio e não tem medo do julgamento alheio. Continue assim!!!",
    "Eu não consigo acreditar até agora que você escreveu isso, você é fenomenal, Vitor. Quando eu li sobre a ressignificação e da forma clara que você aborda os passos, valeu mais do que todas as palestras que eu já fui. Te amo e te admiro muito.",
    "Eu abri o seu livro e ele começa falando sobre os cosmos da terra (brisei na hora), mas depois disso comecei a entender o que você quer dizer. O difícil vira fácil para o Teles Forever. Valeu pela amostra grátis!!! Tamo junto sempre."
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O que estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que os leitores estão falando sobre o livro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} text={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
