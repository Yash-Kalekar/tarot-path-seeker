
import React from 'react';
import { TarotCard } from '../data/tarotCards';

interface CardInterpretationProps {
  card: TarotCard;
  isReversed: boolean;
}

const CardInterpretation: React.FC<CardInterpretationProps> = ({ card, isReversed }) => {
  return (
    <div className="mystical-card rounded-xl p-6 mb-6 animate-fade-in-up">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full border border-mystic-gold/30 flex items-center justify-center bg-gradient-to-br from-mystic-gold/20 to-transparent mr-4">
          <span className="text-xl">🔮</span>
        </div>
        <div>
          <h3 className="font-cinzel text-xl font-semibold text-mystic-gold">
            {card.name}
          </h3>
          <p className="text-mystic-gold/70 text-sm">
            {isReversed ? "Reversed" : "Upright"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-cinzel text-mystic-gold font-medium mb-2">Meaning</h4>
          <p className="text-mystic-gold/90 leading-relaxed">
            {isReversed ? card.reversedMeaning : card.uprightMeaning}
          </p>
        </div>

        <div>
          <h4 className="font-cinzel text-mystic-gold font-medium mb-2">Description</h4>
          <p className="text-mystic-gold/80 leading-relaxed text-sm">
            {card.description}
          </p>
        </div>

        <div>
          <h4 className="font-cinzel text-mystic-gold font-medium mb-2">Key Themes</h4>
          <div className="flex flex-wrap gap-2">
            {card.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-mystic-gold/20 text-mystic-gold/90 rounded-full text-xs border border-mystic-gold/30"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInterpretation;