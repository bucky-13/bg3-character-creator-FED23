import { ESkills } from '../database/dbSkills';

export interface ICharBackground {
  backgroundId: string;
  name: string;
  desc: string;
  imgSrc: string;
  skillProficienciesGiven: ESkills[];
}
