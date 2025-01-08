import { EEquipment } from '../database/dbEquipmentProficiencies';
import { ESkills } from '../database/dbSkills';

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
  cantrips?: string[];
  lvl1spells?: string[];
  lvl2spells?: string[];
  lvl3spells?: string[];
  lvl4spells?: string[];
  lvl5spells?: string[];
  lvl6spells?: string[];
  background: string;
  abilities: INewAbility[];
  skillsProficiencies?: ESkills[];
  skillsExpertises?: ESkills[];
  equipmentProficiencies?: EEquipment[];
  perks?: string[];
  lvlChoices?: ILvlChoices[];
  hasLockedChoices: boolean;
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
