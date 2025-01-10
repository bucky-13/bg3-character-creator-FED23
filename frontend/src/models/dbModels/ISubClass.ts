import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';
import { ISpecialSkills } from './ISpecialSkills';
import { ISpell } from './ISpell';

export interface ISubClass {
  id: string;
  name: string;
  desc: string;
  mainClass: string;
  icon: string;
  skillProficiencies?: ESkills[];
  skillExpertises?: ESkills[];
  skillExpertiseSlots?: number;
  expertiseAtLevel?: number;
  skillProficiencySlots?: number;
  armorProficiencies?: EEquipment[];
  weaponProficiencies?: EEquipment[];
  spells?: ISpell[];
  specialSkills: ISpecialSkills[];
}
