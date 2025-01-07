import { charBackgrounds } from '../database/dbCharBackgrounds';
import { charClasses } from '../database/dbCharClasses';
import { races } from '../database/dbRaces';
import { skills } from '../database/dbSkills';
import { subClasses } from '../database/dbSubClass';
import { subraces } from '../database/dbSubraces';
import { ISkill } from '../models/dbModels/ISkill';

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
    case 'skills':
      return skills.find((o) => o.id === id)!;
  }
};

export const getSkillProficiencies = (ids: string[]): ISkill[] => {
  let skills: ISkill[] = [];
  ids.map((id) => ((skills = skills), skills.push(getDbObject(id, 'skills') as ISkill)));
  return skills;
};
