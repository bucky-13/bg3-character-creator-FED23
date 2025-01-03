import { ICreatedCharacter } from '../models/!CreatedCharater';
import { EAbilites } from './dbAbilities';
import { ECharBg } from './dbCharBackgrounds';
import { ECharClasses } from './dbCharClasses';
import { EOrigin } from './dbOrigins';
import { ERaces } from './dbRaces';
import { ESkills } from './dbSkills';
import { ESubraces } from './dbSubraces';

export const dbDefaultCharacter: ICreatedCharacter = {
  name: 'Tav',
  characterLevel: 0,
  origin: EOrigin.Custom,
  race: ERaces.Elf,
  subrace: ESubraces.HighElf,
  charClasses: [{ classId: ECharClasses.Barbarian, levels: 1, isStartingClass: true }],
  casterLevel: 0,
  background: ECharBg.Soldier,
  abilities: {
    str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
  },
  skillsProficiencies: [ESkills.Acrobatics, ESkills.Athletics],
  equipmentProficiencies: [],
};
