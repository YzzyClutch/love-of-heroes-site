interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isRight?: boolean;
}

export const TimelineItem = ({ date, title, description, isRight = false }: TimelineItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center group">
      {/* Mobile Layout */}
      <div className="md:hidden mb-8">
        <div className="bg-card border-border shadow-card p-4 rounded-lg hover:shadow-glow transition-all duration-300">
          <div className="text-accent font-semibold text-sm mb-1">{date}</div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center w-full ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Content */}
        <div className={`w-5/12 ${isRight ? 'text-right' : 'text-left'}`}>
          <div className="bg-card border-border shadow-card p-4 rounded-lg hover:shadow-glow transition-all duration-300">
            <div className="text-accent font-semibold text-sm mb-1">{date}</div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
        
        {/* Timeline dot */}
        <div className="w-2/12 flex justify-center">
          <div className="w-4 h-4 bg-gradient-romantic rounded-full shadow-glow group-hover:scale-125 transition-transform duration-300" />
        </div>
        
        {/* Spacer */}
        <div className="w-5/12" />
      </div>
    </div>
  );
};