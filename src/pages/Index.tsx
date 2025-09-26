import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CharacterCard } from "@/components/CharacterCard";
import { TimelineItem } from "@/components/TimelineItem";
import { Heart, Calendar, Gamepad2, Users } from "lucide-react";
import heroImage from "@/assets/hero-romantic-gaming.jpg";
import sageImage from "@/assets/sage-character.jpg";
import cloveImage from "@/assets/clove-character.jpg";
import sorakaImage from "@/assets/soraka-character.jpg";
import teemoImage from "@/assets/teemo-character.jpg";

const Index = () => {
  const characters = [
    {
      name: "Sage",
      game: "Valorant",
      image: sageImage,
      description: "Uma sentinela com o poder de curar e reviver, trazendo esperança e proteção à nossa equipe, assim como o cuidado que dedicamos uns aos outros."
    },
    {
      name: "Clove",
      game: "Valorant", 
      image: cloveImage,
      description: "Um controlador imortal com determinação infinita, representando a natureza eterna do nosso amor que fica mais forte a cada dia."
    },
    {
      name: "Soraka",
      game: "League of Legends",
      image: sorakaImage,
      description: "A Criança Estelar que se sacrifica pelos outros, personificando o amor altruísta e o apoio que demonstramos uns aos outros todos os dias."
    },
    {
      name: "Teemo",
      game: "League of Legends",
      image: teemoImage,
      description: "Pequeno, mas poderoso, provando que as maiores aventuras vêm nas embalagens mais adoráveis, assim como nossos momentos mais doces juntos."
    }
  ];

  const timeline = [
    {
      date: "1 de Outubro 2023",
      title: "Pedido de Namoro",
      description: "O dia em que foi feito o pedido de namoro e tudo começou. Como um duo perfeito formado no jogo da vida."
    },
    {
      date: "Abril 2024", 
      title: "Primeiras Partidas Juntos",
      description: "Descobrimos que somos o combo perfeito, não só na vida real, mas também conquistando vitórias lado a lado nos games."
    },
    {
      date: "Outubro 2024",
      title: "Level Up no Relacionamento",
      description: "Nossa conexão evoluiu para o próximo nível. Cada momento juntos tornou-se uma nova conquista desbloqueada."
    },
    {
      date: "Outubro 2025",
      title: "2 Anos de Party!",
      description: "Hoje celebramos dois anos incríveis de parceria, amor e aventuras. GG para nós! 💕"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 animate-fade-in max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-accent animate-pulse-glow" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              2 Anos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 px-2">
              De amor, jogos e aventuras juntos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
            <Button variant="romantic" size="lg" className="animate-scale-in w-full sm:w-auto">
              <Heart className="w-5 h-5" />
              Nossa História
            </Button>
            <Button variant="sage" size="lg" className="animate-scale-in w-full sm:w-auto">
              <Gamepad2 className="w-5 h-5" />
              Nossos Champions
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 animate-float">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-30" />
        </div>
        <div className="absolute top-24 right-4 sm:top-32 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-secondary opacity-30" />
        </div>
        <div className="absolute bottom-24 left-4 sm:bottom-32 sm:left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent opacity-30" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nossa Timeline de Amor
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              Cada momento especial da nossa jornada juntos
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-romantic opacity-30" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem 
                  key={index}
                  date={item.date}
                  title={item.title} 
                  description={item.description}
                  isRight={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nossos Champions Favoritos
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              Os personagens que representam nossa conexão nos jogos que amamos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {characters.map((character, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CharacterCard {...character} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-romantic p-6 sm:p-12 shadow-romantic animate-fade-in">
            <div className="space-y-4 sm:space-y-6 text-white">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-pulse-glow" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Para Sempre Nosso GG! 💕
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed opacity-90 px-2">
                Dois anos incríveis de risadas, conquistas, derrotas e vitórias lado a lado. 
                Você é meu player dois favorito na vida e nos games. 
                Aqui está para muitas mais aventuras, muitos mais anos, e para sempre sermos 
                o duo mais imbatível de todos! Te amo infinitamente! 
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Button variant="sage" size="lg" className="w-full sm:w-auto">
                  <Heart className="w-5 h-5" />
                  Te Amo
                </Button>
                <Button variant="clove" size="lg" className="w-full sm:w-auto">
                  <Gamepad2 className="w-5 h-5" />
                  Próxima Fase
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
