import { ESkills } from '../../database/dbSkills';

export interface INaturalExplorer {
  name: string;
  id: string;
  desc: string;
  skillProficiencies?: ESkills;
  lvl1spell?: string;
  resistance?: string;
}
