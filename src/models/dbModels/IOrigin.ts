import { INewAbility, ISkillProfNewChar } from '../INewCharater';
import { INewEquipmentProficiencies } from './IEquipmentProficiencies';
import { IFightingStyle } from './IFightingSyles';

export interface IOrigin {
  name: string;
  characterLevel: number;
  icon: string;
  origin: string;
  desc: string;
  race: string;
  subrace?: string;
  startingClass: string;
  startingSubclass?: string;
  casterLevel: number;
  background: string;
  abilities: INewAbility[];
  hasLockedChoices: boolean;
  skillProficiencies: ISkillProfNewChar[];
  skillExpertises: ISkillProfNewChar[];
  armorProficiencies: INewEquipmentProficiencies[];
  weaponProficiencies: INewEquipmentProficiencies[];
  fightingStyles?: IFightingStyle[];
}
