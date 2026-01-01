import { Character, EventStep} from 'afnm-types'
import { allBFItems } from '../items/itemsBF'

import danWoosungPortrait from '../src/assets/characters/DanWoosung_old.png';

export const danWoosung: Character = {
    name: 'Dan Woosung',
    displayName: 'Dan Woosung',
    allegiance: undefined,
    condition: '1',
    portrait: danWoosungPortrait,
    image: danWoosungPortrait,
    definitions: [
        {
            kind: 'neutral',
            condition: '1',
            realm: 'mundane',
            realmProgress: 'Middle',

            stats: [],

            locations: [
                {
                    kind: 'static',
                    condition: '1',
                    location: 'Liang Tiao Village',
                }
            ],
            
            encounters: [],

            talkInteraction: [
                {
                    condition: 'discoveredBodyQuest == 0 && bodyQuestProgress == 0',
                    event: [
                        {
                            kind: 'speech',
                            character: 'Dan Woosung',
                            text: 'Get lost, kid.',
                        },
                        {
                            kind: 'choice',
                            choices: [
                                {
                                    text: 'Who are you?',
                                    children: [
                                        {
                                            kind: 'speech',
                                            character: 'Dan Woosung',
                                            text: 'Just an old man living in this village, looking forward to the end.',
                                        }
                                    ],
                                },
                                {
                                    text: 'Goodbye.',
                                    children: [
                                        {
                                            kind: 'speech',
                                            character: 'Dan Woosung',
                                            text: 'Yeah, see you around, kid.',
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
}

export const allCharactersBF = [
    danWoosung,
]

export function initializeBFCharacters() {
  console.log('Adding Body Forging characters...');

  allCharactersBF.forEach((character) => {
    window.modAPI.actions.addCharacter(character);
  });

  console.log(`Added ${allCharactersBF.length} Body Forging characters`);
}
