interface LearningCardProps {
  number: number;
  title: string;
  description: string;
}

const LearningCard = ({ number, title, description }: LearningCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-medium">
        {number}
      </div>
      
      <h3 className="font-display text-2xl font-bold text-foreground mb-3 mt-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default LearningCard;
