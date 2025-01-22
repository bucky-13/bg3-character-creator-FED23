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
  if (newCharacter.startingClass === 'ccl05') {
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'fighting style', 'class');
  }
  if (newCharacter.startingClass === 'ccl08') {
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'favoured enemy', 'class');
    lvl1ChoicesBase = insertChoiceAfterThis(lvl1ChoicesBase, 'natural explorer', 'favoured enemy');
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
  if (newCharacter.background === 'cbg01' || newCharacter.background === 'cbg07') {
    insertChoiceAfterThis(lvl1ChoicesBase, 'name', 'abilities');
  }
  return lvl1ChoicesBase;
};
export const findSectionIndex = (lvlChoices: string[], currentSection: string): number => {
  return lvlChoices.findIndex((o) => o === currentSection);
};
