import { INewCharacter } from '../models/INewCharater';
import { displayCantrips, displaySpells } from './sideNavbarFunctions';

export const insertChoiceAfterThis = (lvlChoices: string[], newChoice: string, insertAfter: string): string[] => {
  const indexToInsert = lvlChoices.findIndex((o) => o === insertAfter) + 1;
  lvlChoices.splice(indexToInsert, 0, newChoice);
  return lvlChoices;
};

export const setUsedSections = (newCharacter: INewCharacter): string[] => {
  let lvl1ChoicesBase = ['origin', 'race', 'class', 'background', 'abilities', 'summary'];
  if (newCharacter.subrace) {
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'subrace', 'race');
  }
  if (newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') {
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'high elf cantrip', 'subrace');
  }
  if (newCharacter.startingSubclass) {
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'subclass', 'class');
  }
  if (displayCantrips(newCharacter)) {
    lvl1ChoicesBase = newCharacter.startingSubclass
      ? insertChoiceAfterThis(lvl1ChoicesBase, 'cantrips', 'subclass')
      : insertChoiceAfterThis(lvl1ChoicesBase, 'cantrips', 'class');
  }
  if (displaySpells(newCharacter)) {
    insertChoiceAfterThis(lvl1ChoicesBase, 'spells', 'cantrips');
  }
  return lvl1ChoicesBase;
};
export const findSectionIndex = (lvlChoices: string[], currentSection: string): number => {
  return lvlChoices.findIndex((o) => o === currentSection);
};
