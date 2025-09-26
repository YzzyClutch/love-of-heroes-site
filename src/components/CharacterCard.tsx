import { Card } from "@/components/ui/card";

interface CharacterCardProps {
  name: string;
  game: string;
  image: string;
  description: string;
}

export const CharacterCard = ({ name, game, image, description }: CharacterCardProps) => {
  return (
    <Card className="bg-card border-border shadow-card p-4 sm:p-6 hover:shadow-glow transition-all duration-300 group">
      <div className="space-y-3 sm:space-y-4">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={`${name} from ${game}`}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-2 text-white">
            <p className="text-xs sm:text-sm font-medium">{game}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};