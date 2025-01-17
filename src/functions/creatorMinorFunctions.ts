import { ICharBackground } from '../models/dbModels/ICharBackground';
import { ICharClass } from '../models/dbModels/ICharClass';
import { IRace } from '../models/dbModels/IRace';
import { ISubClass } from '../models/dbModels/ISubClass';
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

export const updateExpertiseArray = (object: ISubrace | undefined, newCharacter: INewCharacter, source: string) => {
  let skills: ISkillProfNewChar[] = newCharacter.skillExpertises;
  skills = skills.filter((o) => o.fromSource !== source);
  if (!object) {
    return skills;
  }
  if (object.skillExpertises) {
    let skill: ISkillProfNewChar = {
      id: object.skillExpertises[0],
      fromSource: source,
      canChange: false,
    };
    skills.push(skill);
  }
  return skills;
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

export const calculateSkillPointsLeft = (pointsTotal: number, skillsArray: ISkillProfNewChar[]): number => {
  const skillArrayFromSource = skillsArray.filter((o) => o.fromSource === 'skills');

  return pointsTotal - skillArrayFromSource.length;
};

export const resetSkillArrays = (skillsArray: ISkillProfNewChar[]): ISkillProfNewChar[] => {
  return skillsArray.filter((o) => o.fromSource !== 'skills');
};

export const calculateSkillPointsTaken = (skillsArray: ISkillProfNewChar[]): number => {
  const skillArrayFromSource = skillsArray.filter((o) => o.fromSource === 'skills');
  return skillArrayFromSource ? skillArrayFromSource.length : 0;
};

export const regexNameCheckPassed = (e: string): boolean => {
  const regex = new RegExp(/^[\p{Letter}\s\-.'0-9]+$/u);
  return regex.test(e);
};
