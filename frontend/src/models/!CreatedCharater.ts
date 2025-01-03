import { EAbilites } from '../database/dbAbilities';
import { ECharBg } from '../database/dbCharBackgrounds';
import { ECharClasses } from '../database/dbCharClasses';
import { EEquipment } from '../database/dbEquipmentProficiencies';
import { EOrigin } from '../database/dbOrigins';
import { ERaces } from '../database/dbRaces';
import { ESkills } from '../database/dbSkills';
import { ESubClasses } from '../database/dbSubClass';
import { ESubraces } from '../database/dbSubraces';
import { EEquipmentTypes } from './dbModels/IEquipmentProficiencies';

export interface ICreatedCharacter {
  charId?: string;
  name: string;
  characterLevel: number;
  origin: EOrigin;
  race: ERaces;
  subrace?: ESubraces;
  charClasses: [{ classId: ECharClasses; levels: number; subclass?: ESubClasses; isStartingClass: boolean }];
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
    str: ICreatedAbilities;
    dex: ICreatedAbilities;
    con: ICreatedAbilities;
    int: ICreatedAbilities;
    wis: ICreatedAbilities;
    cha: ICreatedAbilities;
  };
  skillsProficiencies: ESkills[];
  skillsExpertises?: ESkills[];
  equipmentProficiencies: EEquipment[];
  perks?: string[];
  lvlChoices?: ILvlChoices[];
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

export interface ICreatedAbilities {
  abiId: EAbilites;
  baseValue: number;
  plusOneBonus: boolean;
  plusTwoBonus: boolean;
  bonusesFromPerks?: number[];
}
