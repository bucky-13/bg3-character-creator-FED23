import { ICharClass } from '../models/dbModels/ICharClass';
import { ISubClass } from '../models/dbModels/ISubClass';
import { INewAbility, INewCharacter, ISkillProfNewChar } from '../models/INewCharater';

export const isActiveIcon = (icon: string, key: keyof INewCharacter, newCharacter: INewCharacter): string => {
  return icon === newCharacter[key] ? 'creatorImageChoiceContainer activeChoice' : 'creatorImageChoiceContainer';
};

export const displayAbilityTotalPoints = (ability: INewAbility): number => {
  const plus1Bonus = ability.plusOneBonus ? 1 : 0;
  const plus2Bonus = ability.plusTwoBonus ? 2 : 0;
  return ability.baseValue + plus1Bonus + plus2Bonus;
};

export const getExpertiseSlots = (
  charClass: ICharClass,
  charSubClass: ISubClass | undefined,
  newCharacter: INewCharacter,
): number => {
  if (charClass.skillExpertiseSlots && charClass.expertiseAtLevel === newCharacter.characterLevel) {
    return charClass.skillExpertiseSlots;
  }
  if (
    charSubClass &&
    charSubClass.skillExpertiseSlots &&
    charSubClass.expertiseAtLevel === newCharacter.characterLevel
  ) {
    return charSubClass.skillExpertiseSlots;
  }
  return 0;
};


export const calculateAbilityPointsLeft = (abilities: INewAbility[]): number => {
  let points = 27;
  for (let i = 0; i < abilities.length; i++) {
    if (abilities[i].baseValue < 14) {
      points = points - (abilities[i].baseValue - 8);
    } else {
      points = points - (abilities[i].baseValue - 13) * 2 - 5;
    }
  }
  return points;
};

export const checkSkillSource = (fromSource: string[], trueSource: string): boolean => {
  let canReturn = false;
  for (let i = 0; i < fromSource.length; i++) {
    if (fromSource[i] === trueSource) canReturn = true;
  }
  return canReturn;
};

export const calculateSkillPointsLeft = (pointsTotal: number, skillsArray: ISkillProfNewChar[], source: string): number => {
  const skillArrayFromSource = skillsArray.filter((o) => checkSkillSource(o.fromSource, source));
  return pointsTotal - skillArrayFromSource.length;
};

export const resetSkillArrays = (skillsArray: ISkillProfNewChar[]): ISkillProfNewChar[] => {
  return skillsArray.filter((o) => !checkSkillSource(o.fromSource, 'skills'));
};

export const calculateSkillPointsTaken = (skillsArray: ISkillProfNewChar[], fromSource: string): number => {
  const skillArrayFromSource = skillsArray.filter((o) => checkSkillSource(o.fromSource, fromSource));
  return skillArrayFromSource ? skillArrayFromSource.length : 0;
};

export const regexNameCheckPassed = (e: string): boolean => {
  const regex = new RegExp(/^[\p{Letter}\s\-.'0-9]+$/u);
  return regex.test(e);
};
