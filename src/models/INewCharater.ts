import { INewEquipmentProficiencies } from './dbModels/IEquipmentProficiencies';
import { IFavouredEnemy } from './dbModels/IFavouredEnemy';
import { IFightingStyle } from './dbModels/IFightingSyles';
import { INaturalExplorer } from './dbModels/INaturalExplorer';

export interface INewCharacter {
  id?: string;
  createdAt?: string;
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
  cantrips?: ISpellChociesNewChar[];
  lvl1Spells?: ISpellChociesNewChar[];
  lvl2Spells?: ISpellChociesNewChar[];
  lvl3Spells?: ISpellChociesNewChar[];
  lvl4Spells?: ISpellChociesNewChar[];
  lvl5Spells?: ISpellChociesNewChar[];
  lvl6Spells?: ISpellChociesNewChar[];
  background: string;
  abilities: INewAbility[];
  skillProficiencies: ISkillProfNewChar[];
  skillExpertises: ISkillProfNewChar[];
  armorProficiencies: INewEquipmentProficiencies[];
  weaponProficiencies: INewEquipmentProficiencies[];
  perks?: string[];
  lvlChoices?: ILvlChoices[];
  hasLockedChoices: boolean;
  fightingStyles?: IFightingStyle[];
  favouredEnemy?: IFavouredEnemy[];
  naturalExplorer?: INaturalExplorer[];
}
export interface INewCharacterSummary {
  id?: string;
  createdAt?: string;
  name: string;
  characterLevel: number;
  icon: string;
  race: string;
  subrace?: string;
  startingClass: string;
  startingSubclass?: string;
  charClasses?: [{ classId: string; levels: number; subclass?: string; isStartingClass: boolean }];
  background: string;
}

export interface ISkillProfNewChar {
  id: string;
  fromSource: string[];
  canChange: boolean;
}

export interface ISpellChociesNewChar {
  id: string;
  fromSource: string;
  canChange: boolean;
  specialCase: string;
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
