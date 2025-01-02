import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';
import { ISpecialSkills } from './ISpecialSkills';
import { ISpell } from './ISpell';

export interface ISubClass {
  id: string;
  name: string;
  desc: string;
  icon: string;
  skillProficiencies?: ESkills[];
  skillProficiencySlots?: number;
  armorProficiencies?: EEquipment[];
  weaponProficiencies?: EEquipment[];
  spells?: ISpell[];
  specialSkills: ISpecialSkills[];
}
