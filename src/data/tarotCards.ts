
export interface TarotCard {
  id: number;
  name: string;
  suit?: string;
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
  keywords: string[];
}

export const tarotDeck: TarotCard[] = [
  {
    id: 1,
    name: "The Fool",
    uprightMeaning: "New beginnings, innocence, spontaneity, free spirit",
    reversedMeaning: "Recklessness, taken advantage of, inconsistency, foolishness",
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
    keywords: ["beginnings", "innocence", "spontaneity", "free spirit"]
  },
  {
    id: 2,
    name: "The Magician",
    uprightMeaning: "Manifestation, resourcefulness, power, inspired action",
    reversedMeaning: "Manipulation, poor planning, untapped talents, trickery",
    description: "The Magician is a powerful card that represents your ability to manifest your desires through willpower and determination.",
    keywords: ["manifestation", "power", "skill", "concentration"]
  },
  {
    id: 3,
    name: "The High Priestess",
    uprightMeaning: "Intuition, sacred knowledge, divine feminine, subconscious mind",
    reversedMeaning: "Secrets, disconnected from intuition, withdrawal and silence",
    description: "The High Priestess represents intuition, higher powers, and the subconscious mind. She encourages you to trust your inner voice.",
    keywords: ["intuition", "mystery", "subconscious", "inner knowledge"]
  },
  {
    id: 4,
    name: "The Empress",
    uprightMeaning: "Femininity, beauty, nature, nurturing, abundance",
    reversedMeaning: "Creative block, dependence on others, smothering, emptiness",
    description: "The Empress represents the divine feminine, fertility, and abundance. She encourages creativity and nurturing energy.",
    keywords: ["femininity", "abundance", "nature", "creativity"]
  },
  {
    id: 5,
    name: "The Emperor",
    uprightMeaning: "Authority, establishment, structure, father figure",
    reversedMeaning: "Domination, excessive control, lack of discipline, inflexibility",
    description: "The Emperor represents authority, structure, and control. He encourages you to take charge of your life with discipline.",
    keywords: ["authority", "structure", "control", "stability"]
  },
  {
    id: 6,
    name: "The Hierophant",
    uprightMeaning: "Spiritual wisdom, religious beliefs, conformity, tradition",
    reversedMeaning: "Personal beliefs, freedom, challenging the status quo",
    description: "The Hierophant represents traditional values, spiritual guidance, and conformity to social structures.",
    keywords: ["tradition", "conformity", "morality", "ethics"]
  },
  {
    id: 7,
    name: "The Lovers",
    uprightMeaning: "Love, harmony, relationships, values alignment",
    reversedMeaning: "Self-love, disharmony, imbalance, misalignment of values",
    description: "The Lovers represents love, harmony, and relationships. It speaks to the union of opposites and finding balance.",
    keywords: ["love", "relationships", "choices", "harmony"]
  },
  {
    id: 8,
    name: "The Chariot",
    uprightMeaning: "Control, willpower, success, determination",
    reversedMeaning: "Self-discipline, opposition, lack of direction",
    description: "The Chariot represents triumph, control, and determination. It encourages you to harness your willpower to achieve success.",
    keywords: ["control", "willpower", "success", "determination"]
  },
  {
    id: 9,
    name: "Strength",
    uprightMeaning: "Strength, courage, persuasion, influence, compassion",
    reversedMeaning: "Self doubt, low energy, raw emotion",
    description: "Strength represents inner strength, courage, and the power of compassion over force.",
    keywords: ["strength", "courage", "patience", "control"]
  },
  {
    id: 10,
    name: "The Hermit",
    uprightMeaning: "Soul searching, introspection, inner guidance",
    reversedMeaning: "Isolation, loneliness, withdrawal",
    description: "The Hermit represents soul searching, seeking inner guidance, and the need for introspection.",
    keywords: ["introspection", "searching", "guidance", "solitude"]
  },
  {
    id: 11,
    name: "Wheel of Fortune",
    uprightMeaning: "Good luck, karma, life cycles, destiny, turning point",
    reversedMeaning: "Bad luck, lack of control, clinging to control, bad fate",
    description: "The Wheel of Fortune represents the cyclical nature of life, karma, and the forces of destiny.",
    keywords: ["luck", "destiny", "change", "cycles"]
  },
  {
    id: 12,
    name: "Justice",
    uprightMeaning: "Justice, fairness, truth, cause and effect, law",
    reversedMeaning: "Unfairness, lack of accountability, dishonesty",
    description: "Justice represents fairness, truth, and the law of cause and effect. It calls for balanced decisions.",
    keywords: ["justice", "balance", "truth", "fairness"]
  }
];

export const getRandomCards = (count: number): TarotCard[] => {
  const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};