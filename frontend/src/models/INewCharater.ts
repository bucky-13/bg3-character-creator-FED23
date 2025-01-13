import { EEquipment } from '../database/dbEquipmentProficiencies';

export interface INewCharacter {
  charId?: string;
  name: string;
  characterLevel: number;
  icon: string;
  origin: string;
  desc: string;
  race: string;
  subrace?: string;
  startingClass: string;
  startingSubclass?: string;
  charClasses?: [{ classId: string; levels: number; subclass?: string; isStartingClass: boolean }];
  casterLevel: number;
  cantrips?: ISkillProfNewChar[];
  lvl1Spells?: ISkillProfNewChar[];
  lvl2Spells?: ISkillProfNewChar[];
  lvl3Spells?: ISkillProfNewChar[];
  lvl4Spells?: ISkillProfNewChar[];
  lvl5Spells?: ISkillProfNewChar[];
  lvl6Spells?: ISkillProfNewChar[];
  background: string;
  abilities: INewAbility[];
  skillProficiencies: ISkillProfNewChar[];
  skillExpertises: ISkillProfNewChar[];
  equipmentProficiencies?: EEquipment[];
  perks?: string[];
  lvlChoices?: ILvlChoices[];
  hasLockedChoices: boolean;
}

export interface ISkillProfNewChar {
  id: string;
  fromSource: string;
  canChange: boolean;
}

export interface ILvlChoices {
  level: number;
  class: string;
  subclass?: string;
  specialSkills?: string[];
  chosenSpells?: string[];
  unchosenSpells?: string[];
  chosenPerks?: string;
  skillProficiencies?: string[];
  skillsExpertises: string[];
}

export interface INewAbility {
  id: string;
  shortName: string;
  baseValue: number;
  plusOneBonus: boolean;
  plusTwoBonus: boolean;
  bonusesFromPerks?: number[];
}

export interface INewCharacters {
  Custom: INewCharacter;
  Astarion: INewCharacter;
  Gale: INewCharacter;
  Karlach: INewCharacter;
  Laezel: INewCharacter;
  Shadowheart: INewCharacter;
  Wyll: INewCharacter;
  DarkUrge: INewCharacter;
}
