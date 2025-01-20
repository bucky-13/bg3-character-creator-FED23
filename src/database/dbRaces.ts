import { IRace } from '../models/dbModels/IRace';
import { EEquipment } from './dbEquipmentProficiencies';
import { ESkills } from './dbSkills';

export enum ERaces {
  Human = 'race01',
  Elf = 'race02',
  Drow = 'race03',
  HalfElf = 'race04',
  HalfOrc = 'race05',
  Halfling = 'race06',
  Dwarf = 'race07',
  Gnome = 'race08',
  Tiefling = 'race09',
  Githyanki = 'race10',
  Dragonborn = 'race11',
}

export const races: IRace[] = [
  {
    id: 'race01',
    icon: './icons/races/Human.png',
    name: 'Human',
    desc: `The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.`,
    weaponProficiencies: [
      EEquipment.Spears,
      EEquipment.Pikes,
      EEquipment.Halberds,
      EEquipment.Glaives,
      EEquipment.LightArmor,
      EEquipment.Shields,
    ],
    armorProficiencies: [EEquipment.LightArmor, EEquipment.Shields],
    baseSpeed: 9,
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Human Versatility',
        desc: 'Select an additional Skill to be Proficient in. Your carrying capacity is increased by 25%',
      },
      {
        name: 'Civil Militia',
        desc: 'You have Weapon Proficiency with Spears, Pikes, Halberds, Glaives, Light armour, and  Shields.',
      },
    ],
  },
  {
    id: 'race02',
    icon: './icons/races/Elf.png',
    name: 'Elf',
    desc: `With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.`,
    weaponProficiencies: [EEquipment.Longswords, EEquipment.Shortswords, EEquipment.Longbows, EEquipment.Shortbows],
    armorProficiencies: [],
    baseSpeed: 9,
    darkvision: 1,
    skillProficiencies: [ESkills.Perception],
    subraces: ['subr01', 'subr02'],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Keen senses',
        desc: 'You gain Proficiency in the Perception skill.',
      },
      {
        name: 'Elven Weapon Training',
        desc: 'You have Proficiency with Longswords, Shortswords, Longbows, and Shortbows.',
      },
      {
        name: 'Fey Ancestry',
        desc: `The Feywild casts a veil over your mind. You have Advantage on Saving throws against being Charmed, and magic can't put you to Sleep.`,
      },
    ],
  },
  {
    id: 'race03',
    icon: './icons/races/Drow.png',
    name: 'Drow',
    desc: `Driven to the Underdark, most drow have adopted a ruthless pragmatism.`,
    weaponProficiencies: [EEquipment.Rapiers, EEquipment.Shortswords, EEquipment.HandCrossbows],
    armorProficiencies: [],
    baseSpeed: 9,
    darkvision: 2,
    skillProficiencies: [ESkills.Perception],
    subraces: ['subr03', 'subr04'],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Superior Darkvision',
        desc: 'Can see in the dark up to 24m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Keen senses',
        desc: 'You gain Proficiency in the Perception skill.',
      },
      {
        name: 'Drow Weapon Training',
        desc: 'You have Proficiency with Rapiers, Shortswords, and Hand Crossbows.',
      },
      {
        name: 'Fey Ancestry',
        desc: `You have Advantage on Saving throws against being Charmed, and magic can't put you to Sleep.`,
      },
      {
        name: 'Drow Magic',
        desc: `You gain access to the following Spells (Note: These spells use Charisma as their casting stat.):`,
      },
      {
        name: 'Dancing Lights',
        desc: `(Cantrip) At level 1`,
        icon: './icons/lvl0spells/Dancing_Lights.png',
      },
      {
        name: 'Faerie Fire',
        desc: `(1st Level spell) At level 3, Rechange: Long Rest`,
        icon: './icons/lvl1spells/Faerie_Fire.png',
      },
      {
        name: 'Darkness',
        desc: `(2nd Level spell) At level 5, Rechange: Long Rest`,
        icon: './icons/lvl2spells/Darkness.png',
      },
    ],
  },
  {
    id: 'race04',
    icon: './icons/races/Half-Elf.png',
    name: 'Half Elf',
    desc: `Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own`,
    weaponProficiencies: [EEquipment.Spears, EEquipment.Pikes, EEquipment.Halberds, EEquipment.Glaives],
    armorProficiencies: [EEquipment.LightArmor, EEquipment.Shields],
    baseSpeed: 9,
    darkvision: 1,
    subraces: ['subr05', 'subr06', 'subr07'],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Civil Militia',
        desc: 'You have Weapon Proficiency with Spears, Pikes, Halberds, Glaives, Light armour, and  Shields.',
      },
      {
        name: 'Fey Ancestry',
        desc: `The Feywild casts a veil over your mind. You have Advantage on Saving throws against being Charmed, and magic can't put you to Sleep.`,
      },
    ],
  },
  {
    id: 'race05',
    icon: './icons/races/Half-Orc.png',
    name: 'Half Orc',
    desc: `Creatures of intense emotion, half-orcs are more inclined to act than contemplate - whether the rage burning their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness.`,
    baseSpeed: 9,
    darkvision: 1,
    skillProficiencies: [ESkills.Intimidation],
    armorProficiencies: [],
    weaponProficiencies: [],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Menacing',
        desc: 'You gain Proficiency in the Intimidation skill.',
      },
      {
        name: 'Relentless Endurance',
        desc: `If you reach 0 hit points, you regain 1hit points instead of becoming Downed.`,
      },
      {
        name: 'Savage Attacks',
        desc: `When you land a Critical Hit with a melee weapon attack, you deal an extra dice of weapon damage.`,
      },
    ],
  },
  {
    id: 'race06',
    icon: './icons/races/Halfling.png',
    name: 'Halfling',
    desc: `Small yet capable, halflings prefer the comforts of home and hearth - but their natural luck and dexterity makes them fine adventurers.`,
    baseSpeed: 7.5,
    subraces: ['subr08', 'subr09'],
    armorProficiencies: [],
    weaponProficiencies: [],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 7.5m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Halfling Luck',
        desc: `When you roll a 1 for an Attack roll,  Ability check, or  Saving throw, you can reroll the dice and must use the new roll.`,
      },
      {
        name: 'Brave',
        desc: `You have Advantage on Saving Throws against Frightened.`,
      },
    ],
  },
  {
    id: 'race07',
    icon: './icons/races/Dwarf.png',
    name: 'Dwarf',
    desc: `As durable and unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn`,
    weaponProficiencies: [EEquipment.Battleaxes, EEquipment.Handaxes, EEquipment.LightHammers, EEquipment.Warhammers],
    armorProficiencies: [],
    baseSpeed: 7.5,
    darkvision: 1,
    subraces: ['subr10', 'subr11', 'subr12'],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 7.5m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Dwarven Combat Training',
        desc: `You have Proficiency with Battleaxes, Handaxes, Light Hammers, and Warhammers.`,
      },
      {
        name: 'Dwarven Resilience',
        desc: `You have Advantage on  Saving throws against being Poisoned and you have Resistance against Poison damage.`,
      },
    ],
  },
  {
    id: 'race08',
    icon: './icons/races/Gnome.png',
    name: 'Gnome',
    desc: `Small, clever, and energetic, gnomes use their long lives to explore Faerûn's brightest corners and darkest depths.`,
    baseSpeed: 7.5,
    darkvision: 1,
    subraces: ['subr14', 'subr13', 'subr15'],
    armorProficiencies: [],
    weaponProficiencies: [],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 7.5m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Gnome Cunning',
        desc: `You have Advantage on Intelligence, Wisdom, and Charisma Saving Throws.`,
      },
    ],
  },
  {
    id: 'race09',
    icon: './icons/races/Tiefling.png',
    name: 'Tiefling',
    desc: `Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors.`,
    baseSpeed: 9,
    darkvision: 1,
    subraces: ['subr16', 'subr17', 'subr18'],
    armorProficiencies: [],
    weaponProficiencies: [],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Darkvision',
        desc: 'Can see in the dark up to 12m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Hellish Resistance',
        desc: `Your blood protects you from flame, abyssal or otherwise. Gain Resistance to Fire damage, taking only half damage from it.`,
      },
    ],
  },
  {
    id: 'race10',
    icon: './icons/races/Githyanki.png',
    name: 'Githyanki',
    desc: `With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace.`,
    weaponProficiencies: [EEquipment.Shortswords, EEquipment.Longswords, EEquipment.Greatswords],
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor],
    baseSpeed: 9,
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
      {
        name: 'Astral Knowledge',
        desc: `Gain Proficiency in all Skills corresponding to a chosen Ability ( Recharge: Long rest)`,
      },
      {
        name: 'Martial Prodigy',
        desc: `A lifetime of relentless training gave you Armour proficiency with Light armour and Medium armour, as well as Proficiency with Shortswords, Longswords, and Greatswords.`,
      },
      {
        name: 'Githyanki Psionics',
        desc: `You gain access to the following Spells:`,
      },
      {
        name: 'Mage Hand',
        desc: `(Cantrip) At level 1. Your Mage Hand is invisible when cast via Githyanki Psionics. Recharge: Long rest`,
        icon: './icons/lvl0spells/Mage_Hand.png',
      },
      {
        name: 'Enhance Leap',
        desc: `(1st Level spell) At level 3, Rechange: Long Rest`,
        icon: './icons/lvl1spells/Enhance_Leap.png',
      },
      {
        name: 'Misty Step',
        desc: `(2nd Level spell) At level 5, Rechange: Long Rest`,
        icon: './icons/lvl2spells/Misty_Step.png',
      },
    ],
  },
  {
    id: 'race11',
    icon: './icons/races/Dragonborn.png',
    name: 'Dragonborn',
    desc: `A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods.`,
    baseSpeed: 9,
    subraces: ['subr19', 'subr20', 'subr21', 'subr22', 'subr23', 'subr24', 'subr25', 'subr26', 'subr27', 'subr28'],
    armorProficiencies: [],
    weaponProficiencies: [],
    features: [
      {
        name: 'Base Movement Speed',
        desc: 'You can move 9m per turn',
        icon: './icons/features/Movement_Speed.png',
      },
    ],
  },
];
