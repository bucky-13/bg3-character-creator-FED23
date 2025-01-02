import { ICharClass } from '../models/ICharClass';
import { EEquipment } from './dbEquipmentProficiencies';
import { ESkills } from './dbSkills';
import { ESubClasses } from './dbSubClass';

export enum ECharClasses {
  Barbarian = 'ccl01',
  Bard = 'ccl02',
  Cleric = 'ccl03',
  Druid = 'ccl04',
  Fighter = 'ccl05',
  Monk = 'ccl06',
  Paladin = 'ccl07',
  Ranger = 'ccl08',
  Rogue = 'ccl09',
  Sorcerer = 'ccl10',
  Warlock = 'ccl11',
  Wizard = 'ccl12',
}

export const charClasses: ICharClass[] = [
  {
    charClassId: 'ccl01',
    name: 'Barbarian',
    desc: `The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.`,
    imgSrc: './icons/charClasses/Barbarian_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: [ESubClasses.Berserker, ESubClasses.WildMagicBarb, ESubClasses.Wildheart],
    skillProficiencies: [
      ESkills.AnimalHandling,
      ESkills.Athletics,
      ESkills.Intimidation,
      ESkills.Nature,
      ESkills.Survival,
      ESkills.Perception,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.MartialW],
  },
  {
    charClassId: 'ccl02',
    name: 'Bard',
    desc: `Bards know music is more than idle fancy - it is power. Through study and adventure, these travelling troubadours master song, speech, and the magic within.`,
    imgSrc: './icons/charClasses/Bard_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    subclassAtLevel: 3,
    subclasses: [ESubClasses.Lore, ESubClasses.Valour, ESubClasses.Swords],
    expertiseAtLevel: 3,
    expertiseSlots: 2,
    skillProficiencies: [
      ESkills.Acrobatics,
      ESkills.AnimalHandling,
      ESkills.Arcana,
      ESkills.Athletics,
      ESkills.Deception,
      ESkills.History,
      ESkills.Insight,
      ESkills.Intimidation,
      ESkills.Investigation,
      ESkills.Medicine,
      ESkills.Nature,
      ESkills.Perception,
      ESkills.Performance,
      ESkills.Persuasion,
      ESkills.Religion,
      ESkills.SleightOfHand,
      ESkills.Stealth,
      ESkills.Survival,
    ],
    skillProficiencySlots: 3,
    armorProficiencies: [EEquipment.LightArmor],
    weaponProficiencies: [
      EEquipment.SimpleW,
      EEquipment.HandCrossbows,
      EEquipment.Rapiers,
      EEquipment.Longswords,
      EEquipment.Shortswords,
    ],
  },
  {
    charClassId: 'ccl03',
    name: 'Cleric',
    desc: `Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill`,
    imgSrc: './icons/charClasses/Cleric_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 3 },
      { fromLevel: 4, amount: 4 },
      { fromLevel: 10, amount: 5 },
    ],
    subclassAtLevel: 1,
    subclasses: [
      ESubClasses.Life,
      ESubClasses.Light,
      ESubClasses.Trickery,
      ESubClasses.Knowledge,
      ESubClasses.Nature,
      ESubClasses.Tempest,
      ESubClasses.War,
    ],
    skillProficiencies: [ESkills.History, ESkills.Insight, ESkills.Medicine, ESkills.Persuasion, ESkills.Religion],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.Flails, EEquipment.Morningstars],
  },
  {
    charClassId: 'ccl04',
    name: 'Druid',
    desc: `Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.`,
    imgSrc: './icons/charClasses/Druid_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    subclassAtLevel: 2,
    subclasses: [ESubClasses.Land, ESubClasses.Moon, ESubClasses.Spores],
    skillProficiencies: [
      ESkills.Arcana,
      ESkills.AnimalHandling,
      ESkills.Insight,
      ESkills.Medicine,
      ESkills.Nature,
      ESkills.Perception,
      ESkills.Religion,
      ESkills.Survival,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.Shields],
    weaponProficiencies: [
      EEquipment.Clubs,
      EEquipment.Daggers,
      EEquipment.Javelins,
      EEquipment.Maces,
      EEquipment.Quarterstaves,
      EEquipment.Scimitars,
      EEquipment.Sickles,
      EEquipment.Spears,
    ],
  },
  {
    charClassId: 'ccl05',
    name: 'Fighter',
    desc: `Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armour like a second skin.`,
    imgSrc: './icons/charClasses/Fighter_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: [ESubClasses.BattleMaster, ESubClasses.EldritchKnight, ESubClasses.Champion],
    skillProficiencies: [
      ESkills.Acrobatics,
      ESkills.AnimalHandling,
      ESkills.Athletics,
      ESkills.History,
      ESkills.Insight,
      ESkills.Intimidation,
      ESkills.Perception,
      ESkills.Survival,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.HeavyArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.MartialW],
  },
  {
    charClassId: 'ccl06',
    name: 'Monk',
    desc: `Some reach enlightenment by languid meditation - others do so in the heat of battle. Monks manipulate ki to empower their own strikes and debilitate their foes.`,
    imgSrc: './icons/charClasses/Monk_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: [ESubClasses.FourElements, ESubClasses.OpenHand, ESubClasses.Shadow],
    skillProficiencies: [
      ESkills.Acrobatics,
      ESkills.Athletics,
      ESkills.History,
      ESkills.Insight,
      ESkills.Religion,
      ESkills.Stealth,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.Shortswords],
  },
  {
    charClassId: 'ccl07',
    name: 'Paladin',
    desc: `A promise made so deeply that it becomes divine in itself flows through a paladin, burning bright enough to inspire allies and smite foes.`,
    imgSrc: './icons/charClasses/Paladin_Icon.png',
    casterLevelPerLevel: 0.5,
    subclassAtLevel: 1,
    subclasses: [ESubClasses.Ancients, ESubClasses.Devotion, ESubClasses.Vengeance, ESubClasses.Oathbreaker],
    skillProficiencies: [
      ESkills.Athletics,
      ESkills.Insight,
      ESkills.Intimidation,
      ESkills.Medicine,
      ESkills.Persuasion,
      ESkills.Religion,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.HeavyArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.MartialW],
  },
  {
    charClassId: 'ccl08',
    name: 'Ranger',
    desc: `Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favoured prey.`,
    imgSrc: './icons/charClasses/Ranger_Icon.png',
    casterLevelPerLevel: 0.5,
    subclassAtLevel: 3,
    subclasses: [ESubClasses.Hunter, ESubClasses.BeastMaster, ESubClasses.GloomStalker],
    skillProficiencies: [
      ESkills.AnimalHandling,
      ESkills.Athletics,
      ESkills.Insight,
      ESkills.Investigation,
      ESkills.Nature,
      ESkills.Perception,
      ESkills.Stealth,
      ESkills.Survival,
    ],
    skillProficiencySlots: 3,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.MartialW],
  },
  {
    charClassId: 'ccl09',
    name: 'Rogue',
    desc: `With stealth, skill, and uncanny reflexes, rogues' versatility lets them get the upper hand in almost any situation.`,
    imgSrc: './icons/charClasses/Rogue_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: [ESubClasses.Thief, ESubClasses.ArcaneTrickster, ESubClasses.Assassin],
    expertiseAtLevel: 1,
    expertiseSlots: 2,
    skillProficiencies: [
      ESkills.Acrobatics,
      ESkills.Athletics,
      ESkills.Deception,
      ESkills.Insight,
      ESkills.Investigation,
      ESkills.Perception,
      ESkills.Performance,
      ESkills.Persuasion,
      ESkills.SleightOfHand,
      ESkills.Stealth,
    ],
    skillProficiencySlots: 4,
    armorProficiencies: [EEquipment.LightArmor],
    weaponProficiencies: [
      EEquipment.SimpleW,
      EEquipment.HandCrossbows,
      EEquipment.Longswords,
      EEquipment.Rapiers,
      EEquipment.Shortswords,
    ],
  },
  {
    charClassId: 'ccl10',
    name: 'Sorcerer',
    desc: `Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.`,
    imgSrc: './icons/charClasses/Sorcerer_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 4 },
      { fromLevel: 4, amount: 5 },
      { fromLevel: 10, amount: 6 },
    ],
    subclassAtLevel: 1,
    subclasses: [ESubClasses.WildMagicSorc, ESubClasses.Draconic, ESubClasses.StormSorcery],
    skillProficiencies: [
      ESkills.Arcana,
      ESkills.Deception,
      ESkills.Insight,
      ESkills.Intimidation,
      ESkills.Persuasion,
      ESkills.Religion,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [],
    weaponProficiencies: [EEquipment.Daggers, EEquipment.Quarterstaves, EEquipment.LightCrossbows],
  },
  {
    charClassId: 'ccl11',
    name: 'Warlock',
    desc: `Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.`,
    imgSrc: './icons/charClasses/Warlock_Icon.png',
    casterLevelPerLevel: 0,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    subclassAtLevel: 1,
    subclasses: [ESubClasses.Fiend, ESubClasses.GreatOldOne, ESubClasses.Archfey],
    skillProficiencies: [
      ESkills.Arcana,
      ESkills.Deception,
      ESkills.History,
      ESkills.Intimidation,
      ESkills.Investigation,
      ESkills.Nature,
      ESkills.Religion,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor],
    weaponProficiencies: [EEquipment.SimpleW],
  },
  {
    charClassId: 'ccl12',
    name: 'Wizard',
    desc: `Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research.`,
    imgSrc: './icons/charClasses/Wizard_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 3 },
      { fromLevel: 4, amount: 4 },
      { fromLevel: 10, amount: 5 },
    ],
    subclassAtLevel: 2,
    subclasses: [
      ESubClasses.Abjuration,
      ESubClasses.Evocation,
      ESubClasses.Necromancy,
      ESubClasses.Conjuration,
      ESubClasses.Enchantment,
      ESubClasses.Divination,
      ESubClasses.Divination,
      ESubClasses.Illusion,
      ESubClasses.Transmutation,
    ],
    skillProficiencies: [
      ESkills.Arcana,
      ESkills.History,
      ESkills.Investigation,
      ESkills.Insight,
      ESkills.Medicine,
      ESkills.Religion,
    ],
    skillProficiencySlots: 2,
    armorProficiencies: [],
    weaponProficiencies: [EEquipment.Daggers, EEquipment.Quarterstaves, EEquipment.LightCrossbows],
  },
];
