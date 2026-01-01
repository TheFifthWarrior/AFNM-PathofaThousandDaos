import { allBFItems } from '../modContent/items/itemsBF';
import { initializeBFItems } from '../modContent/items/itemsBF';

import { allCharactersBF } from './characters/charactersBF';
import { initializeBFCharacters } from './characters/charactersBF';

function initializeDaoPaths() {
  console.log('Initializing Path of a Thousand Daos Mod...');

  initializeBFItems;
  initializeBFCharacters;

  console.log('Path of a Thousand Daos Mod loaded successfully!');
}

initializeDaoPaths;