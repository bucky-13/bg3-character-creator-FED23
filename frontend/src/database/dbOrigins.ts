import { IOrigin } from '../models/dbModels/IOrigin';
import { EAbilites } from './dbAbilities';
import { ECharBg } from './dbCharBackgrounds';
import { ECharClasses } from './dbCharClasses';
import { ESubClasses } from './dbSubClass';
import { ESubraces } from './dbSubraces';

export enum EOrigin {
  Custom = 'ori01',
  Astarion = -'ori02',
  Gale = -'ori03',
  Karlach = -'ori04',
  Laezel = -'ori05',
  Shadowheart = -'ori06',
  Wyll = -'ori07',
  DarkUrge = -'ori08',
}

export const dbOrigins: IOrigin[] = [
  {
    name: 'Custom',
    characterLevel: 0,
    icon: './icons/origins/cus_icon.png',
    origin: EOrigin.Custom,
    desc: `You’ve always felt you had a greater calling, but it has never borne fruit. Everything changes when you awaken imprisoned on an alien ship. Perhaps your time has finally come.`,
    race: 'race02',
    subrace: ESubraces.HighElf,
    startingClass: ECharClasses.Barbarian,
    casterLevel: 0,
    background: ECharBg.Acolyte,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: false,
  },
  {
    name: 'Astarion',
    characterLevel: 0,
    icon: './icons/origins/ast_icon.png',
    origin: EOrigin.Astarion,
    desc: `Astarion prowled the night as a vampire spawn for centuries, forced to follow the orders of his sadistic master, Cazador: seduce every fool with a pulse, and lure them back to Cazador's lair. Free for now, Astarion will do anything to keep his life in the light. He can see but one way to ensure his liberty for good: become many times more powerful than his old abuser could ever dream of being. His body is forever tainted by the intricate, patterned scarring Cazador carved upon his back, and the elder vampire seems set on sending out waves of hunters seeking to capture his lost spawn.`,
    race: 'race02',
    subrace: ESubraces.HighElf,
    startingClass: ECharClasses.Rogue,
    casterLevel: 0,
    background: ECharBg.Charlatan,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: true,
  },
  {
    name: 'Gale',
    characterLevel: 0,
    icon: './icons/origins/gal_icon.png',
    origin: EOrigin.Gale,
    desc: `Gale of Waterdeep was a prodigious archmage, his talents earning him the attention of Mystra, the goddess of magic. At her side, he learned all that mortals might accomplish with the Weave, in time earning his place as her lover, and her Chosen. And yet, he was not satisfied. In an attempt to prove he was ready for even greater power, he accidentally unleashed 'the orb' - a highly volatile fragment of pure Weave, corrupted by Netherese magic, which buried itself in his chest. Cast out by Mystra, humbled by his downfall, he does all he can to prevent the orb's cataclysmic detonation, watching for his chance to get back everything he lost, and more.`,
    race: 'race01',
    startingClass: ECharClasses.Wizard,
    casterLevel: 1,
    background: ECharBg.Sage,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: true,
  },
  {
    name: 'Karlach',
    characterLevel: 0,
    icon: './icons/origins/kar_icon.png',
    origin: EOrigin.Karlach,
    desc: `Gale of Waterdeep was a prodigious archmage, his talents earning him the attention of Mystra, the goddess of magic. At her side, he learned all that mortals might accomplish with the Weave, in time earning his place as her lover, and her Chosen. And yet, he was not satisfied. In an attempt to prove he was ready for even greater power, he accidentally unleashed 'the orb' - a highly volatile fragment of pure Weave, corrupted by Netherese magic, which buried itself in his chest. Cast out by Mystra, humbled by his downfall, he does all he can to prevent the orb's cataclysmic detonation, watching for his chance to get back everything he lost, and more.`,
    race: 'race09',
    subrace: ESubraces.ZarielTiefling,
    startingClass: ECharClasses.Barbarian,
    casterLevel: 0,
    background: ECharBg.Outlander,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: true,
  },
  {
    name: `Lae'zel`,
    characterLevel: 0,
    icon: './icons/origins/lae_icon.png',
    origin: EOrigin.Laezel,
    desc: `Crashed down to the Sword Coast from the stars, Lae'zel is a fierce warrior, even by the standards of militant githyanki society. When faced with the possibility of becoming a mind flayer, the monster she has dedicated her life to defeating, she must prove her worth and earn the right to rejoin her people -- if they don't execute her first. Will Lae'zel's strength and determination be enough to prove herself to Queen Vlaakith, or must she walk another path in exile?`,
    race: 'race10',
    startingClass: ECharClasses.Fighter,
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
    hasLockedChoices: true,
  },
  {
    name: 'Shadowheart',
    characterLevel: 0,
    icon: './icons/origins/sha_icon.png',
    origin: EOrigin.Shadowheart,
    desc: `A devoted cleric of Shar, goddess of darkness and loss, Shadowheart agreed to have her memories wiped as part of a holy mission. Now its sole survivor, she must deliver a powerful relic back to her kin in order to win Shar's love and have her memories restored – but all the while, she is tormented by strange, painful magic that she struggles to understand.`,
    race: 'race04',
    subrace: ESubraces.HalfHighElf,
    startingClass: ECharClasses.Cleric,
    startingSubclass: ESubClasses.Trickery,
    casterLevel: 1,
    background: ECharBg.Acolyte,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: true,
  },
  {
    name: 'Wyll',
    characterLevel: 0,
    icon: './icons/origins/wyl_icon.png',
    origin: EOrigin.Wyll,
    desc: `From a scion of a famed Baldurian house to a life of adventure on the road, Wyll’s life as the monster hunter called the Blade of Frontiers has made him one of the beating hearts of the Sword Coast. While he has done great deeds for the Coast’s people, the source of his power remains secret. The cambion Mizora drew Wyll into a warlock’s pact in a moment with many lives at stake, and cursed him with the duty of hunting her enemies. Mizora only asks Wyll to sacrifice devilish creatures to her, but a cambion’s ambitions are ever fickle, and Wyll wishes to escape the pact before its price grows cruel.`,
    race: 'race01',
    startingClass: ECharClasses.Warlock,
    startingSubclass: ESubClasses.Fiend,
    casterLevel: 1,
    background: ECharBg.FolkHero,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: true,
  },
  {
    name: 'The Dark Urge',
    characterLevel: 0,
    icon: './icons/origins/dur_icon.png',
    origin: EOrigin.DarkUrge,
    desc: `You remember nothing of your past besides that you walked a path paved with blood. As you venture on, you find yourself inescapably drawn towards unimaginable cruelties. Where do these thoughts come from?`,
    race: 'race11',
    subrace: ESubraces.WhiteDragon,
    startingClass: ECharClasses.Sorcerer,
    startingSubclass: ESubClasses.StormSorcery,
    casterLevel: 1,
    background: ECharBg.HauntedOne,
    abilities: {
      str: { abiId: EAbilites.Str, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      dex: { abiId: EAbilites.Dex, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      con: { abiId: EAbilites.Con, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      int: { abiId: EAbilites.Int, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      wis: { abiId: EAbilites.Wis, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
      cha: { abiId: EAbilites.Cha, baseValue: 10, plusOneBonus: false, plusTwoBonus: false },
    },
    hasLockedChoices: false,
  },
];
