import { INewAbility, ISkillProfNewChar } from '../INewCharater';

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
}
