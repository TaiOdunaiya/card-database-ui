import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const recentCards = [
  {
    id: "1",
    name: "Blue-Eyes White Dragon",
    game: "Yu-Gi-Oh!",
    set: "LOB-001",
    condition: "Near Mint",
    value: 120,
    image: "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Charizard",
    game: "Pokémon",
    set: "Base Set",
    condition: "Excellent",
    value: 350,
    image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Black Lotus",
    game: "Magic: The Gathering",
    set: "Alpha",
    condition: "Good",
    value: 50000,
    image: "https://images.unsplash.com/photo-1571845995489-a0c5dc9ac650?w=100&h=100&fit=crop"
  }
];

export function RecentlyAdded() {
  return (
    <div className="space-y-8">
      {recentCards.map((card) => (
        <div key={card.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={card.image} alt={card.name} />
            <AvatarFallback>{card.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{card.name}</p>
            <p className="text-sm text-muted-foreground">
              {card.game} - {card.set}
            </p>
          </div>
          <div className="ml-auto font-medium">${card.value.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}