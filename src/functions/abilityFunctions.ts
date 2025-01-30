import { abilities } from "../database/dbAbilities";
import { IAbility } from "../models/dbModels/IAbilitiy";
import { INewAbility } from "../models/INewCharater";

export const calculatePointCost = (ability: INewAbility): number => {
  return ability.baseValue < 14 ? 1 : 2;
};
  
export const getAbility = (key: string): IAbility => {
  return abilities.find((abi: IAbility) => abi.id === key)!;
};


export const getAbiValue = (key: string, value: keyof IAbility): string => {
  const ability = getAbility(key);
    return ability ? ability[value] : 'error';
 };