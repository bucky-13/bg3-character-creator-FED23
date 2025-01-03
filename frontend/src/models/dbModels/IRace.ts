import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ERaces } from '../../database/dbRaces';
import { ESkills } from '../../database/dbSkills';
import { ESubraces } from '../../database/dbSubraces';

export interface IRace {
  id: ERaces;
  icon: string;
  name: string;
  desc: string;
  subraces?: ESubraces[];
  skillProficiencies?: ESkills[];
  equipmentProficiencies?: EEquipment[];
  baseSpeed: number;
  spells?: IRaceSpells[];
  specialSkills?: IRaceSpells[];
  darkvision?: number;
}

export interface IRaceSpells {
  atLevel: number;
  id: string;
}
