import { EEquipment } from '../database/dbEquipmentProficiencies';
import { ESkills } from '../database/dbSkills';
import { ESubClasses } from '../database/dbSubClass';

export interface ICharClass {
  charClassId: string;
  name: string;
  desc: string;
  imgSrc: string;
  casterLevelPerLevel: number;
  cantripsKnown?: { fromLevel: number; amount: number }[];
  subclassAtLevel: number;
  subclasses: ESubClasses[];
  expertiseAtLevel?: number;
  expertiseSlots?: number;
  skillProficiencies: ESkills[];
  skillProficiencySlots: number;
  armorProficiencies: EEquipment[];
  weaponProficiencies: EEquipment[];
}

// expertiseAtLevel & expertiseSlots - only use if class has expertise at some level
