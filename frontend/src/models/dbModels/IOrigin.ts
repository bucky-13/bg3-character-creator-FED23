import { ECharBg } from '../../database/dbCharBackgrounds';
import { ECharClasses } from '../../database/dbCharClasses';
import { ESubClasses } from '../../database/dbSubClass';
import { INewAbilities } from '../INewCharater';

export interface IOrigin {
  name: string;
  characterLevel: number;
  icon: string;
  origin: string;
  desc: string;
  race: string;
  subrace?: string;
  startingClass: ECharClasses;
  startingSubclass?: ESubClasses;
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
