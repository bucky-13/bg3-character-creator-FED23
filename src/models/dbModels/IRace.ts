import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';
import { IFeatures } from './IFeatures';

export interface IRace {
  id: string;
  icon: string;
  name: string;
  desc: string;
  subraces?: string[];
  skillProficiencies?: ESkills[];
  armorProficiencies: EEquipment[];
  weaponProficiencies: EEquipment[];
  baseSpeed: number;
  spells?: IRaceSpells[];
  specialSkills?: IRaceSpells[];
  darkvision?: number;
  features: IFeatures[];
  portraits?: string[];
}

export interface IRaceSpells {
  atLevel: number;
  id: string;
}
