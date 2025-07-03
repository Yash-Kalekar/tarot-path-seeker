
import React from 'react';
import { TarotCard as TarotCardType } from '../data/tarotCards';

interface TarotCardProps {
  card?: TarotCardType;
  isFlipped: boolean;
  isSelected: boolean;
  onClick: () => void;
  delay?: number;
  isReversed?: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({ 
  card, 
  isFlipped, 
  isSelected, 
  onClick, 
  delay = 0,
  isReversed = false 
}) => {
  return (
    <div
      className={`
        relative w-24 h-36 md:w-32 md:h-48 cursor-pointer transition-all duration-500 
        transform hover:scale-105 hover:z-10
        ${isSelected ? 'animate-glow-pulse' : ''}
        ${isFlipped ? 'animate-card-flip' : ''}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Card Back */}
      <div className={`
        absolute inset-0 rounded-lg card-back border-2 border-mystic-gold/30
        transition-all duration-300 hover:border-mystic-gold/60 hover:shadow-lg hover:shadow-mystic-gold/20
        ${isFlipped ? 'opacity-0' : 'opacity-100'}
      `}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-mystic-gold/50 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-mystic-gold/60 to-mystic-gold/30 rounded-full animate-sparkle"></div>
          </div>
        </div>
      </div>

      {/* Card Front */}
      {card && (
        <div className={`
          absolute inset-0 rounded-lg mystical-card border-2 border-mystic-gold/50
          p-2 md:p-3 flex flex-col items-center justify-center text-center
          transition-all duration-300
          ${isFlipped ? 'opacity-100' : 'opacity-0'}
          ${isReversed ? 'transform rotate-180' : ''}
        `}>
          <h3 className="font-cinzel text-xs md:text-sm font-semibold text-mystic-gold mb-1 md:mb-2">
            {card.name}
          </h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 border border-mystic-gold/30 rounded-full flex items-center justify-center bg-gradient-to-br from-mystic-gold/20 to-transparent">
              <span className="text-lg md:text-2xl">🔮</span>
            </div>
          </div>
          <div className="text-xs text-mystic-gold/80 mt-1">
            {isReversed ? "Reversed" : "Upright"}
          </div>
        </div>
      )}
    </div>
  );
};

export default TarotCard;