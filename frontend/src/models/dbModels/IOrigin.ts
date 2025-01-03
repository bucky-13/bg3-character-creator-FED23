import { ECharBg } from '../../database/dbCharBackgrounds';
import { ECharClasses } from '../../database/dbCharClasses';
import { ERaces } from '../../database/dbRaces';
import { ESubClasses } from '../../database/dbSubClass';
import { ESubraces } from '../../database/dbSubraces';

export interface IOrigin {
  id: string;
  icon: string;
  name: string;
  desc: string;
  backgroundId?: ECharBg;
  defaultRace: ERaces;
  defaultSubrace?: ESubraces;
  defaultClass: ECharClasses;
  defaultSubclass?: ESubClasses;
  hasLockedChoices: boolean;
}
