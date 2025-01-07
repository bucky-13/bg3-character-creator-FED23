import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';

export interface IRace {
  id: string;
  icon: string;
  name: string;
  desc: string;
  subraces?: string[];
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
