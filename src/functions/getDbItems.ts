import { charBackgrounds } from '../database/dbCharBackgrounds';
import { charClasses } from '../database/dbCharClasses';
import { dbOrigins } from '../database/dbOrigins';
import { races } from '../database/dbRaces';
import { skills } from '../database/dbSkills';
import { subClasses } from '../database/dbSubClass';
import { subraces } from '../database/dbSubraces';
import { ICharBackground } from '../models/dbModels/ICharBackground';
import { ICharClass } from '../models/dbModels/ICharClass';
import { IOrigin } from '../models/dbModels/IOrigin';
import { IRace } from '../models/dbModels/IRace';
import { ISkill } from '../models/dbModels/ISkill';
import { ISubClass } from '../models/dbModels/ISubClass';
import { ISubrace } from '../models/dbModels/ISubrace';

export const getDbClass = (id: string): ICharClass => {
  return charClasses.find((o) => o.id === id)!;
};
export const getDbOrigin = (id: string): IOrigin => {
  return dbOrigins.find((o) => o.origin === id)!;
};
export const getDbSubClass = (id: string): ISubClass => {
  return subClasses.find((o) => o.id === id)!;
};
export const getDbRace = (id: string): IRace => {
  return races.find((o) => o.id === id)!;
};
export const getDbSubrace = (id: string): ISubrace => {
  return subraces.find((o) => o.id === id)!;
};
export const getDbSkill = (id: string): ISkill => {
  return skills.find((o) => o.id === id)!;
};
export const getDbBackground = (id: string): ICharBackground => {
  return charBackgrounds.find((o) => o.id === id)!;
};

export const getSkillProficiencies = (ids: string[]): ISkill[] => {
  let skills: ISkill[] = [];
  ids.map((id) => ((skills = skills), skills.push(getDbSkill(id) as ISkill)));
  return skills;
};
