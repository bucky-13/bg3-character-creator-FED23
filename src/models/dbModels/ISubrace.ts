import { ESkills } from '../../database/dbSkills';
import { IFeatures } from './IFeatures';
import { IRaceSpells } from './IRace';

export interface ISubrace {
  id: string;
  icon: string;
  name: string;
  desc: string;
  mainRace: string;
  skillProficiencies?: ESkills[];
  skillExpertises?: ESkills[];
  equipmentProficiencies?: string[];
  baseSpeed?: number;
  specialSkills?: IRaceSpells[];
  spells?: IRaceSpells[];
  darkvision?: number;
  features: IFeatures[];
}
