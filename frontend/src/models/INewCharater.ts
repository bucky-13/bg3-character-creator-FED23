import { EAbilites } from '../database/dbAbilities';
import { ECharBg } from '../database/dbCharBackgrounds';
import { ECharClasses } from '../database/dbCharClasses';
import { EEquipment } from '../database/dbEquipmentProficiencies';
import { EOrigin } from '../database/dbOrigins';
import { ERaces } from '../database/dbRaces';
import { ESkills } from '../database/dbSkills';
import { ESubClasses } from '../database/dbSubClass';
import { ESubraces } from '../database/dbSubraces';

export interface INewCharacter {
  charId?: string;
  name: string;
  characterLevel: number;
  icon: string;
  origin: EOrigin;
  desc: string;
  race: ERaces;
  subrace?: ESubraces;
  startingClass: ECharClasses;
  startingSubclass?: ESubClasses;
  charClasses?: [{ classId: ECharClasses; levels: number; subclass?: ESubClasses; isStartingClass: boolean }];
  casterLevel: number;
  cantrips?: string[];
  lvl1spells?: string[];
  lvl2spells?: string[];
  lvl3spells?: string[];
  lvl4spells?: string[];
  lvl5spells?: string[];
  lvl6spells?: string[];
  background: ECharBg;
  abilities: {
    str: INewAbilities;
    dex: INewAbilities;
    con: INewAbilities;
    int: INewAbilities;
    wis: INewAbilities;
    cha: INewAbilities;
  };
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

export interface INewAbilities {
  abiId: EAbilites;
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
