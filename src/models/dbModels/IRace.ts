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
  equipmentProficiencies?: EEquipment[];
  baseSpeed: number;
  spells?: IRaceSpells[];
  specialSkills?: IRaceSpells[];
  darkvision?: number;
  features: IFeatures[];
}

export interface IRaceSpells {
  atLevel: number;
  id: string;
}
