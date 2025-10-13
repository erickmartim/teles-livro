interface StoreCardProps {
  name: string;
  logo?: string;
  url: string;
}

const StoreCard = ({ name, logo, url }: StoreCardProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card hover:bg-muted/50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center border border-border"
    >
      {logo ? (
        <div className="w-full h-20 flex items-center justify-center mb-4">
          <img 
            src={logo} 
            alt={name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      )}
      
      <h3 className="font-semibold text-lg text-foreground mb-2">{name}</h3>
      <p className="text-primary group-hover:text-secondary transition-colors font-medium">
        Garanta agora o seu
      </p>
    </a>
  );
};

export default StoreCard;
