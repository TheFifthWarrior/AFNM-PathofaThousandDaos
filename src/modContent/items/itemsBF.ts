import { ConsumablePillItem } from 'afnm-types';

import vigorIcon from '../src/assets/items/vigor_potion.png';
import talentIcon from '../src/assets/items/talent_potion.png';
import cleanseIcon from '../src/assets/items/cleanse_potion.png';


export const vigorPotion: ConsumablePillItem = {
    description:
        'An extremely rare potion which gifts the consumer with a constantly refreshing source energy. Basis for building the Unstoppable Body.',
    pillKind: 'consumable',
    kind: 'pill',
    name: 'Everlasting Vigor Potion',
    max: 1,
    physicalStats: { muscles: 1, flesh: 1 },
    socialStats: {},
    icon: vigorIcon,
    stacks: 1,
    rarity: 'incandescent',
    realm: 'bodyForging',
}

export const talentPotion: ConsumablePillItem = {
    description:
        'A rare and valuable potion which strengthens the consumers dantians and meridians. Basis for building the Spiritual Talent Body.',
    pillKind: 'consumable',
    kind: 'pill',
    name: 'Hidden Talent Potion',
    max: 1,
    physicalStats: { meridians: 1, dantian: 1 },
    socialStats: {},
    icon: talentIcon,
    stacks: 1,
    rarity: 'incandescent',
    realm: 'bodyForging',
}

export const cleansePotion: ConsumablePillItem = {
    description:
        'A rare and valuable potion which removes impurities from the users digestive system and eyes. Basis for building the Cleansing Toxicity Body.',
    pillKind: 'consumable',
    kind: 'pill',
    name: 'True Cleansing Potion',
    max: 1,
    physicalStats: { eyes: 1, digestion: 1 },
    socialStats: {},
    icon: cleanseIcon,
    stacks: 1,
    rarity: 'incandescent',
    realm: 'bodyForging',
}

export const allBFItems = [
    vigorPotion,
    talentPotion,
    cleansePotion,
]

export function initializeBFItems() {
  console.log('Adding Body Forging items...');

  allBFItems.forEach ((item) => {
    window.modAPI.actions.addItem(item);
  });

  console.log(`Added ${allBFItems.length} Body Forging items`);
}