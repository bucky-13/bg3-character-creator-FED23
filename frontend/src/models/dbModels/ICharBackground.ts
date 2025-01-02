import { ESkills } from '../../database/dbSkills';

export interface ICharBackground {
  id: string;
  name: string;
  desc: string;
  icon: string;
  skillProficienciesGiven: ESkills[];
}
