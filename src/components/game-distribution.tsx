import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart } from 'lucide-react';

export function GameDistribution() {
  const data = [
    { game: 'Pokémon', percentage: 45 },
    { game: 'Magic: The Gathering', percentage: 30 },
    { game: 'Yu-Gi-Oh!', percentage: 15 },
    { game: 'Others', percentage: 10 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <PieChart className="h-4 w-4 text-muted-foreground" />
        <span className="ml-2 text-sm text-muted-foreground">Distribution by Game</span>
      </div>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.game} className="flex items-center">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.game}</span>
                <span className="text-sm text-muted-foreground">{item.percentage}%</span>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}