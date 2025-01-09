import { ICharBackground } from '../models/dbModels/ICharBackground';
import { ICharClass } from '../models/dbModels/ICharClass';
import { IRace } from '../models/dbModels/IRace';
import { ISubrace } from '../models/dbModels/ISubrace';
import { INewAbility, INewCharacter, ISkillProfNewChar } from '../models/INewCharater';

export const isActiveIcon = (icon: string, key: keyof INewCharacter, newCharacter: INewCharacter): string => {
  return icon === newCharacter[key] ? 'creatorImageChoiceContainer activeChoice' : 'creatorImageChoiceContainer';
};

export const displayAbilityTotalPoints = (ability: INewAbility): number => {
  const plus1Bonus = ability.plusOneBonus ? 1 : 0;
  const plus2Bonus = ability.plusTwoBonus ? 2 : 0;
  return ability.baseValue + plus1Bonus + plus2Bonus;
};

export const checkForExpertiseSlots = (charClass: ICharClass, newCharacter: INewCharacter): number => {
  if (charClass.expertiseSlots && charClass.expertiseAtLevel) {
    return charClass.expertiseAtLevel === newCharacter.characterLevel ? charClass.expertiseSlots : 0;
  }
  return 0;
};

export const getProfSlots = (charClass: ICharClass, raceId: string) => {
  const raceBonus = raceId === 'race01' ? 1 : 0;
  return charClass.skillProficiencySlots + raceBonus;
};

export const changeSkillsProfs = (
  newCharacter: INewCharacter,
  source: string,
  object: IRace | ISubrace | ICharBackground,
) => {
  let skills: ISkillProfNewChar[] = newCharacter.skillProficiencies;
  skills = skills.filter((o) => o.fromSource !== source);
  if (object.skillProficiencies) {
    for (let i = 0; i < object.skillProficiencies.length; i++) {
      let skill: ISkillProfNewChar = {
        id: object.skillProficiencies[i],
        fromSource: source,
        canChange: false,
      };
      skills.push(skill);
    }
  }
  return skills;
};
