import { EEquipment } from '../../database/dbEquipmentProficiencies';
import { ESkills } from '../../database/dbSkills';

export interface IFavouredEnemy {
  id: string;
  name: string;
  desc: string;
  skillProficiencies: ESkills;
  cantrip?: string;
  lvl1spell?: string;
  armorProficiencies?: EEquipment;
}
