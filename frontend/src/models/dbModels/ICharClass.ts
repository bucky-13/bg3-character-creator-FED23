import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';

export interface ICharClass {
  id: string;
  name: string;
  desc: string;
  icon: string;
  casterLevelPerLevel: number;
  cantripsKnown?: { fromLevel: number; amount: number }[];
  subclassAtLevel: number;
  subclasses: string[];
  expertiseAtLevel?: number;
  expertiseSlots?: number;
  skillProficiencies: ESkills[];
  skillProficiencySlots: number;
  armorProficiencies: EEquipment[];
  weaponProficiencies: EEquipment[];
}

// expertiseAtLevel & expertiseSlots - only use if class has expertise at some level
