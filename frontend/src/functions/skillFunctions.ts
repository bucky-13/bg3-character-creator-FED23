import { ESpellArray } from '../components/Creator/mainContentComponents/Spells';
import { ISpell } from '../models/dbModels/ISpell';
import { INewCharacter, ISkillProfNewChar, ISpellChociesNewChar } from '../models/INewCharater';
import { getDbClass } from './getDbItems';

export const getCantripTotal = (newCharacter: INewCharacter, specialCase?: string | undefined): number => {
  if (specialCase === 'highElfCantrip') return 1;
  const charClass = getDbClass(newCharacter.startingClass);
  const cantripObject = charClass.cantripsKnown!.find((arr) => arr.fromLevel === newCharacter.characterLevel);
  return cantripObject!.amount;
};

export const getSpellTotal = (newCharacter: INewCharacter): number => {
  const charClass = getDbClass(newCharacter.startingClass);
  return newCharacter.characterLevel === 1 ? charClass.spellsOnStartingLevel! : charClass.spellsPerLevel!;
};

export const isSpellAvailable = (spell: ISpell, newCharacter: INewCharacter, specialCase: string | undefined) => {
  if (specialCase) return specialCase === 'highElfCantrip' && spell.availableTo.includes('ccl12') ? true : false;
  if (spell.availableTo.includes(newCharacter.startingClass)) return true;
  if (newCharacter.startingSubclass && spell.availableTo.includes(newCharacter.startingSubclass)) return true;
  return false;
};

export const totalSpellsSelected = (
  spellArray: ISpellChociesNewChar[] | undefined,
  newCharacter: INewCharacter,
  specialCase: string | undefined,
): number => {
  if (spellArray) {
    let arrayWithNiceSource = specialCase
      ? spellArray.filter((o) => o.fromSource === 'ccl12')
      : spellArray.filter((o) => o.fromSource === newCharacter.startingClass);
    if (newCharacter.startingClass === 'ccl12' && !specialCase) {
      arrayWithNiceSource = arrayWithNiceSource.filter((o) => o.specialCase === 'no');
    }
    if (newCharacter.startingClass === 'ccl12' && specialCase) {
      arrayWithNiceSource = arrayWithNiceSource.filter((o) => o.specialCase === 'highelfcatnip');
    }
    return arrayWithNiceSource.length;
  } else {
    return 0;
  }
};

export const isDisabled = (
  spellId: string,
  newCharacter: INewCharacter,
  spellLevel: ESpellArray,
  amountToPick: number,
  specialCase: string | undefined,
): boolean => {
  if (newCharacter[spellLevel]) {
    const spellIsSelected = specialCase
      ? newCharacter[spellLevel].find((o) => o.id === spellId && o.fromSource === 'ccl12')
      : newCharacter[spellLevel].find((o) => o.id === spellId && o.fromSource === newCharacter.startingClass);
    if (
      specialCase &&
      spellIsSelected &&
      spellIsSelected.fromSource === 'ccl12' &&
      spellIsSelected.specialCase === 'highelfcatnip'
    )
      return false;
    if (
      specialCase &&
      spellIsSelected &&
      spellIsSelected.fromSource === 'ccl12' &&
      spellIsSelected.specialCase === 'no'
    )
      return true;
    if (!specialCase && spellIsSelected && spellIsSelected.specialCase !== 'no') return true;
    if (spellIsSelected && spellIsSelected.fromSource === newCharacter.startingClass) return false;
    return amountToPick - totalSpellsSelected(newCharacter[spellLevel], newCharacter, specialCase) <= 0 ? true : false;
  } else {
    return false;
  }
};

export const isSelected = (
  spellId: string,
  newCharacter: INewCharacter,
  spellLevel: ESpellArray,
  specialCase: string | undefined,
): string => {
  if (specialCase) {
    const isOnSpellList = newCharacter[spellLevel]
      ? newCharacter[spellLevel].find((o) => o.id === spellId && o.fromSource === 'ccl12')
      : undefined;
    return isOnSpellList ? 'spellChoiceBtn selectedChoice' : 'spellChoiceBtn';
  } else {
    const isOnSpellList = newCharacter[spellLevel]
      ? newCharacter[spellLevel].find((o) => o.id === spellId && o.fromSource === newCharacter.startingClass)
      : undefined;
    return isOnSpellList ? 'spellChoiceBtn selectedChoice' : 'spellChoiceBtn';
  }
};

export const createSpellSource = (newCharacter: INewCharacter, specialCase: string | undefined): string => {
  return specialCase ? 'ccl12' : newCharacter.startingClass;
};

export const hasSpellsFromOtherSource = (newCharacter: INewCharacter, spellLevel: ESpellArray): boolean => {
  if (newCharacter[spellLevel]) {
    const spellOtherSource = newCharacter[spellLevel].filter((o) => o.specialCase !== 'no');
    return spellOtherSource.length > 0 ? true : false;
  } else {
    return false;
  }
};

export const isSpellFromOtherSource = (
  newCharacter: INewCharacter,
  spellLevel: ESpellArray,
  spellId: string,
): boolean => {
  if (newCharacter[spellLevel]) {
    const spellsFromOtherSources = newCharacter[spellLevel].filter((o) => o.specialCase !== 'no' && o.id === spellId);
    return spellsFromOtherSources.length > 0 ? true : false;
  } else {
    return false;
  }
};
