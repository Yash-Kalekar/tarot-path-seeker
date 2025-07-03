
import React, { useState } from 'react';
import { TarotCard as TarotCardType, getRandomCards } from '../data/tarotCards';
import TarotCard from './TarotCard';
import CardInterpretation from './CardInterpretation';
import { Button } from '@/components/ui/button';

const TarotReading = () => {
  const [selectedCount, setSelectedCount] = useState<number>(3);
  const [cards, setCards] = useState<TarotCardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<{ card: TarotCardType; isReversed: boolean }[]>([]);
  const [phase, setPhase] = useState<'selection' | 'choosing' | 'revealing' | 'interpretation'>('selection');
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const generateDeck = (count: number) => {
    setSelectedCount(count);
    const newCards = getRandomCards(21); // Show 21 cards to choose from
    setCards(newCards);
    setSelectedCards([]);
    setSelectedIndices([]);
    setPhase('choosing');
  };

  const selectCard = (index: number) => {
    if (selectedIndices.includes(index) || selectedIndices.length >= selectedCount) return;
    
    const newSelectedIndices = [...selectedIndices, index];
    setSelectedIndices(newSelectedIndices);

    if (newSelectedIndices.length === selectedCount) {
      setTimeout(() => {
        setPhase('revealing');
        revealCards(newSelectedIndices);
      }, 500);
    }
  };

  const revealCards = (indices: number[]) => {
    const selectedCardsData = indices.map(index => ({
      card: cards[index],
      isReversed: Math.random() > 0.7 // 30% chance of reversed
    }));
    
    setSelectedCards(selectedCardsData);
    
    setTimeout(() => {
      setPhase('interpretation');
    }, 1500);
  };

  const resetReading = () => {
    setPhase('selection');
    setCards([]);
    setSelectedCards([]);
    setSelectedIndices([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-purple-dark via-mystic-purple to-mystic-navy starfield">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-mystic-gold mb-4">
            Mystical Tarot Reading
          </h1>
          <p className="text-mystic-gold/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pick your cards and reveal your path. Let the ancient wisdom guide you through life's mysteries.
          </p>
        </div>

        {phase === 'selection' && (
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-cinzel text-2xl text-mystic-gold mb-8">
              How many cards would you like to draw?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 3, 5].map((count) => (
                <Button
                  key={count}
                  onClick={() => generateDeck(count)}
                  className="mystical-card hover:border-mystic-gold/60 hover:bg-mystic-gold/10 h-24 text-lg font-cinzel transition-all duration-300 transform hover:scale-105"
                  variant="outline"
                >
                  <div>
                    <div className="text-2xl mb-2">{count === 1 ? '🌟' : count === 3 ? '🔮' : '✨'}</div>
                    <div>{count} Card{count > 1 ? 's' : ''}</div>
                    <div className="text-sm opacity-70 mt-1">
                      {count === 1 ? 'Quick Insight' : count === 3 ? 'Past, Present, Future' : 'Full Reading'}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {phase === 'choosing' && (
          <div className="text-center animate-fade-in-up">
            <h2 className="font-cinzel text-2xl text-mystic-gold mb-2">
              Choose {selectedCount} card{selectedCount > 1 ? 's' : ''}
            </h2>
            <p className="text-mystic-gold/70 mb-8">
              Selected: {selectedIndices.length} / {selectedCount}
            </p>
            <div className="grid grid-cols-7 md:grid-cols-11 gap-2 md:gap-3 max-w-6xl mx-auto">
              {cards.map((card, index) => (
                <TarotCard
                  key={index}
                  card={card}
                  isFlipped={false}
                  isSelected={selectedIndices.includes(index)}
                  onClick={() => selectCard(index)}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
        )}

        {phase === 'revealing' && (
          <div className="text-center animate-fade-in-up">
            <h2 className="font-cinzel text-2xl text-mystic-gold mb-8">
              Revealing your cards...
            </h2>
            <div className="flex justify-center gap-4 md:gap-8">
              {selectedIndices.map((cardIndex, index) => (
                <TarotCard
                  key={index}
                  card={cards[cardIndex]}
                  isFlipped={true}
                  isSelected={false}
                  onClick={() => {}}
                  delay={index * 300}
                  isReversed={selectedCards[index]?.isReversed}
                />
              ))}
            </div>
          </div>
        )}

        {phase === 'interpretation' && (
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="font-cinzel text-3xl text-mystic-gold mb-4">
                Your Reading
              </h2>
              <div className="flex justify-center gap-4 md:gap-8 mb-8">
                {selectedCards.map((selectedCard, index) => (
                  <TarotCard
                    key={index}
                    card={selectedCard.card}
                    isFlipped={true}
                    isSelected={false}
                    onClick={() => {}}
                    isReversed={selectedCard.isReversed}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {selectedCards.map((selectedCard, index) => (
                <CardInterpretation
                  key={index}
                  card={selectedCard.card}
                  isReversed={selectedCard.isReversed}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={resetReading}
                className="bg-mystic-gold text-mystic-purple hover:bg-mystic-gold/90 font-cinzel text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                Draw New Cards
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotReading;