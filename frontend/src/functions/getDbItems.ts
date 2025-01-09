import { charBackgrounds } from '../database/dbCharBackgrounds';
import { charClasses } from '../database/dbCharClasses';
import { races } from '../database/dbRaces';
import { skills } from '../database/dbSkills';
import { subClasses } from '../database/dbSubClass';
import { subraces } from '../database/dbSubraces';
import { ICharClass } from '../models/dbModels/ICharClass';
import { ISkill } from '../models/dbModels/ISkill';
import { ISubClass } from '../models/dbModels/ISubClass';

export const getDbObject = (id: string, dbFile: string) => {
  switch (dbFile) {
    case 'races':
      return races.find((o) => o.id === id)!;
    case 'subraces':
      return subraces.find((o) => o.id === id)!;
    case 'charClasses':
      return charClasses.find((o) => o.id === id)!;
    case 'subClasses':
      return subClasses.find((o) => o.id === id)!;
    case 'charBgs':
      return charBackgrounds.find((o) => o.id === id)!;
  }
};

export const getDbClass = (id: string): ICharClass => {
  return charClasses.find((o) => o.id === id)!;
};
export const getDbSubClass = (id: string): ISubClass => {
  return subClasses.find((o) => o.id === id)!;
};
export const getDbSkill = (id: string): ISkill => {
  return skills.find((o) => o.id === id)!;
};

export const getSkillProficiencies = (ids: string[]): ISkill[] => {
  let skills: ISkill[] = [];
  ids.map((id) => ((skills = skills), skills.push(getDbSkill(id) as ISkill)));
  return skills;
};
