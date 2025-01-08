import { INewAbility, INewCharacter } from '../models/INewCharater';

export const isActiveIcon = (icon: string, key: keyof INewCharacter, newCharacter: INewCharacter): string => {
  return icon === newCharacter[key] ? 'creatorImageChoiceContainer activeChoice' : 'creatorImageChoiceContainer';
};

export const displayAbilityTotalPoints = (ability: INewAbility): number => {
  const plus1Bonus = ability.plusOneBonus ? 1 : 0;
  const plus2Bonus = ability.plusTwoBonus ? 2 : 0;
  return ability.baseValue + plus1Bonus + plus2Bonus;
};
