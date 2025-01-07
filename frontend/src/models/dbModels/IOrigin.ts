import { ECharBg } from '../../database/dbCharBackgrounds';
import { ECharClasses } from '../../database/dbCharClasses';
import { EOrigin } from '../../database/dbOrigins';
import { ESubClasses } from '../../database/dbSubClass';
import { ESubraces } from '../../database/dbSubraces';
import { INewAbilities } from '../INewCharater';

export interface IOrigin {
  name: string;
  characterLevel: number;
  icon: string;
  origin: EOrigin;
  desc: string;
  race: string;
  subrace?: ESubraces;
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
