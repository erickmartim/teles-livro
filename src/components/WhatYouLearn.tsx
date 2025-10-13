import LearningCard from "./LearningCard";

const WhatYouLearn = () => {
  const learnings = [
    {
      number: 1,
      title: "Mental Forte",
      description: "Como manter um mental forte e resiliente diante dos desafios"
    },
    {
      number: 2,
      title: "Ressignificar",
      description: "Aprender a ressignificar experiências e transformar obstáculos em oportunidades"
    },
    {
      number: 3,
      title: "Transbordar",
      description: "Aprender a transbordar para os outros e impactar positivamente"
    },
    {
      number: 4,
      title: "Somos Amor",
      description: "Aprender que somos amor e como isso transforma nossa existência"
    },
    {
      number: 5,
      title: "Propósito Unificado",
      description: "Unificar propósito declarado com motivação para aumentar faturamento"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os pilares fundamentais da transformação pessoal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {learnings.map((learning) => (
            <LearningCard key={learning.number} {...learning} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
