import { ECharBg } from '../../database/dbCharBackgrounds';
import { INewAbilities } from '../INewCharater';

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
  background: ECharBg;
  abilities: {
    str: INewAbilities;
    dex: INewAbilities;
    con: INewAbilities;
    int: INewAbilities;
    wis: INewAbilities;
    cha: INewAbilities;
  };
  hasLockedChoices: boolean;
}
