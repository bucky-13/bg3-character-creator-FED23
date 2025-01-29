import { EAbilites } from '../../database/dbAbilities';
import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';
import { IFeatures } from './IFeatures';

export interface ICharClass {
  id: string;
  name: string;
  desc: string;
  icon: string;
  casterLevelPerLevel: number;
  cantripsKnown?: { fromLevel: number; amount: number }[];
  spellsOnStartingLevel?: number;
  spellsPerLevel?: number;
  subclassAtLevel: number;
  subclasses: string[];
  expertiseAtLevel?: number;
  skillExpertiseSlots?: number;
  skillProficiencies: ESkills[];
  skillExpertises?: ESkills[];
  skillProficiencySlots: number;
  armorProficiencies: EEquipment[];
  weaponProficiencies: EEquipment[];
  features: IFeatures[];
  primaryAbility: EAbilites;
}

// expertiseAtLevel & expertiseSlots - only use if class has expertise at some level
