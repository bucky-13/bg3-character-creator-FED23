import { ISubrace } from '../models/dbModels/ISubrace';
import { EEquipment } from './dbEquipmentProficiencies';
import { ESkills } from './dbSkills';

export enum ESubraces {
  HighElf = 'subr01',
  WoodElf = 'subr02',
  LolDrow = 'subr03',
  SelDrow = 'subr04',
  HalfHighElf = 'subr05',
  HalfWoodElf = 'subr06',
  HalfDrow = 'subr07',
  LightHalfling = 'subr08',
  StrongHalfling = 'subr09',
  GoldDwarf = 'subr10',
  ShieldDwarf = 'subr11',
  Duergar = 'subr12',
  RockGnome = 'subr13',
  ForestGnome = 'subr14',
  DeepGnome = 'subr15',
  AsmodTiefling = 'subr16',
  MephiTiefling = 'subr17',
  ZarielTiefling = 'subr18',
  BlackDragon = 'subr19',
  BlueDragon = 'subr20',
  BrassDragon = 'subr21',
  BronzeDragon = 'subr22',
  CopperDragon = 'subr23',
  GoldDragon = 'subr24',
  GreenDragon = 'subr25',
  RedDragon = 'subr26',
  SilverDragon = 'subr27',
  WhiteDragon = 'subr28',
}

export const subraces: ISubrace[] = [
  {
    id: 'subr01',
    icon: './icons/subraces/High_Elf.png',
    name: 'High Elf',
    desc: `Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave.`,
    mainRace: 'race02',
    armorProficiencies: [],
    features: [
      {
        name: 'Cantrip',
        desc: 'Choose 1 Cantrip from the Wizard spell list. Note that this means these cantrips use Intelligence as a casting stat.',
      },
    ],
    portraits: ['./icons/portraits/elf_high_1.png', './icons/portraits/elf_high_2.png'],
  },
  {
    id: 'subr02',
    icon: './icons/subraces/Wood_Elf.png',
    name: 'Wood Elf',
    desc: `These elves spend their reclusive lives in Faerûn's forests. Decades of training in archery and camouflage are enhanced by an otherworldly swiftness.`,
    mainRace: 'race02',
    armorProficiencies: [],
    baseSpeed: 10.5,
    skillProficiencies: [ESkills.Stealth],
    features: [
      {
        name: 'Mask of the Wild',
        desc: 'Proficiency in Stealth checks.',
      },
      {
        name: 'Fleet of Foot',
        desc: 'Your Movement Speed is increased by 1.5m, 10.5m in total ',
        icon: './icons/features/Movement_Speed.png',
      },
    ],
    portraits: ['./icons/portraits/elf_wood_1.png', './icons/portraits/elf_wood_2.png'],
  },
  {
    id: 'subr03',
    icon: './icons/subraces/Lolth-Sworn_Drow.png',
    name: 'Lolth-sworn Drow',
    desc: `Raised by Lolth's cult in the city of Menzoberranzan, these drow embody the virtues of their corrupt and merciless goddess. Lolth marks Her followers with bright red eyes so those in the Underdark will learn to fear them on sight.`,
    mainRace: 'race03',
    armorProficiencies: [],
    features: [],
    portraits: ['./icons/portraits/drow_1.png', './icons/portraits/drow_2.png'],
  },
  {
    id: 'subr04',
    icon: './icons/subraces/Seldarine_Drow.png',
    name: 'Seldarine Drow',
    desc: `Seldarine drow can be found seeking allies from all over Faerûn, aiming to settle their conflict with Lolth - and each other - by any means necessary.`,
    mainRace: 'race03',
    armorProficiencies: [],
    features: [],
    portraits: ['./icons/portraits/drow_1.png', './icons/portraits/drow_2.png'],
  },
  {
    id: 'subr05',
    icon: './icons/subraces/High_Half-Elf.png',
    name: 'High Half-Elf',
    desc: `A touch of the Feywild remains in half-elves with this bloodline, and even those untrained in magic possess a hint of wild power.`,
    mainRace: 'race04',
    armorProficiencies: [],
    features: [
      {
        name: 'Cantrip',
        desc: 'Choose 1 Cantrip from the Wizard spell list. Note that this means these cantrips use Intelligence as a casting stat.',
      },
    ],
    portraits: ['./icons/portraits/halfelf_high_1.png', './icons/portraits/halfelf_high_2.png'],
  },

  {
    id: 'subr06',
    icon: './icons/subraces/Wood_Half-Elf.png',
    name: 'Wood Half-Elf',
    desc: `Like their wood elf parent, these half-elves have a quickened stride and an eye for stealth. Yet many break away from isolation in Faerûn's forests to explore the rest of the Realms.`,
    mainRace: 'race04',
    armorProficiencies: [],
    skillProficiencies: [ESkills.Stealth],
    features: [
      {
        name: 'Mask of the Wild',
        desc: 'Proficiency in Stealth checks.',
      },
      {
        name: 'Fleet of Foot',
        desc: 'Your Movement Speed is increased by 1.5m, 10.5m in total ',
        icon: './icons/features/Movement_Speed.png',
      },
    ],
    portraits: ['./icons/portraits/halfelf_wood_1.png', './icons/portraits/halfelf_wood_2.png'],
  },
  {
    id: 'subr07',
    icon: './icons/subraces/Drow_Half-Elf.png',
    name: 'Drow Half-Elf',
    desc: `Most half-drow result from liaisons between Seldarine drow and surfacers. While half-drow inherited a few magical gifts, they aren't usually raised in the Underdark.`,
    mainRace: 'race04',
    armorProficiencies: [],
    features: [
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
    portraits: ['./icons/portraits/halfelf_drow_1.png', './icons/portraits/halfelf_drow_2.png'],
  },
  {
    id: 'subr08',
    icon: './icons/subraces/Lightfoot_Halfling.png',
    name: 'Lightfoot Halfling',
    desc: `Stealthy but social, these halflings travel all over Faerûn to make names for themselves.`,
    mainRace: 'race06',
    armorProficiencies: [],
    features: [
      {
        name: 'Naturally Stealthy',
        desc: 'Your nimble nature makes you skilled at concealment. You have Advantage on Stealth Stealth Checks.',
      },
    ],
    portraits: ['./icons/portraits/halfling_light_1.png', './icons/portraits/halfling_light_2.png'],
  },
  {
    id: 'subr09',
    icon: './icons/subraces/Strongheart_Halfling.png',
    name: 'Strongheart Halfling',
    desc: `Legend has it that dwarven blood gave stronghearts their hardiness. Resistant to poison and wellsprings of endurance, these halflings easily hold their own`,
    mainRace: 'race06',
    armorProficiencies: [],
    features: [
      {
        name: 'Strongheart Resilience',
        desc: 'You have Advantage on Saving Throws against being Poisoned and Resistance to Poison damage.',
      },
    ],
    portraits: ['./icons/portraits/halfling_strong_1.png', './icons/portraits/halfling_strong_2.png'],
  },
  {
    id: 'subr10',
    icon: './icons/subraces/Gold_Dwarf.png',
    name: 'Gold Dwarf',
    desc: `These dwarves are known for their confidence and keen intuition. The culture of their Deep Kingdom values family, ritual, and fine craftsmanship.`,
    mainRace: 'race07',
    armorProficiencies: [],
    features: [
      {
        name: 'Dwarven Toughness',
        desc: 'Your Hit Point maximum increases by 1, and increases by 1 again every time you gain a level.',
      },
    ],
    portraits: ['./icons/portraits/dwarf_gold_1.png', './icons/portraits/dwarf_gold_2.png'],
  },
  {
    id: 'subr11',
    icon: './icons/subraces/Shield_Dwarf.png',
    name: 'Shield Dwarf',
    desc: `Great losses in ancient wars against goblins and orcs have led these dwarves to adopt a cynical mindset, but they will endure anything to restore their ancestral homelands.`,
    mainRace: 'race07',
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor],
    features: [
      {
        name: 'Dwarven Armor Training',
        desc: 'You have Armour Proficiency with  Light armour and  Medium armour.',
      },
    ],
    portraits: ['./icons/portraits/dwarf_shield_1.png', './icons/portraits/dwarf_shield_2.png'],
  },
  {
    id: 'subr12',
    icon: './icons/subraces/Duergar.png',
    name: 'Duergar',
    desc: `Once enslaved by the eldritch mind flayers, duergar adapted to freedom with harsh practicality. Their cold demeanours and gift of stealth are well-known throughout the Underdark.`,
    mainRace: 'race07',
    armorProficiencies: [],
    darkvision: 2,
    features: [
      {
        name: 'Superior Darkvision',
        desc: 'Can see in the dark up to 24m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Duergar Resilience',
        desc: 'You have Advantage on  Saving throws against Illusions and against being Charmed or Paralysed.',
      },
      {
        name: 'Duergar Magic',
        desc: `You gain access to the following Spells:`,
      },

      {
        name: 'Enlarge',
        desc: `(1st Level spell) At level 3, Rechange: Long Rest. Does not require Concentration`,
        icon: './icons/lvl1spells/Enlarge_Duergar.png',
      },
      {
        name: 'Invisibility',
        desc: `(2nd Level spell) At level 5, Rechange: Per battle, does not use Spell Slots`,
        icon: './icons/lvl2spells/Invisibility.png',
      },
    ],
    portraits: ['./icons/portraits/dwarf_duer_1.png', './icons/portraits/dwarf_duer_2.png'],
  },
  {
    id: 'subr13',
    icon: './icons/subraces/Rock_Gnome.png',
    name: 'Rock Gnome',
    desc: `The most commonly seen gnomes on Faerûn's surface, rock gnomes are named as such for their hardiness and affinity for metal.`,
    mainRace: 'race08',
    armorProficiencies: [],
    skillExpertises: [ESkills.History],
    features: [
      {
        name: `Artificer's Lore`,
        desc: 'Add twice your Proficiency Bonus Proficiency Bonus to History checks.',
      },
    ],
    portraits: ['./icons/portraits/gnome_rock_1.png', './icons/portraits/gnome_rock_2.png'],
  },
  {
    id: 'subr14',
    icon: './icons/subraces/Forest_Gnome.png',
    name: 'Forest Gnome',
    desc: `Even smaller than their cousins and twice as reclusive, forest gnomes are a rare sight in Faerûn. They master magic and craftsmanship in their distant, idyllic groves.`,
    mainRace: 'race08',
    armorProficiencies: [],
    features: [
      {
        name: `Speak With Animals`,
        desc: 'Gain the ability to comprehend and communicate with beasts. Recharge: Long rest.',
        icon: './icons/lvl1spells/Speak_with_Animals.png',
      },
    ],
    portraits: ['./icons/portraits/gnome_forest_1.png', './icons/portraits/gnome_forest_2.png'],
  },
  {
    id: 'subr15',
    icon: './icons/subraces/Deep_Gnome.png',
    name: 'Deep Gnome',
    desc: `Even smaller than their cousins and twice as reclusive, forest gnomes are a rare sight in Faerûn. They master magic and craftsmanship in their distant, idyllic groves.`,
    mainRace: 'race08',
    armorProficiencies: [],
    darkvision: 2,
    features: [
      {
        name: 'Superior Darkvision',
        desc: 'Can see in the dark up to 24m',
        icon: './icons/lvl2spells/Darkvision.png',
      },
      {
        name: 'Stone Camouflage',
        desc: 'You have Advantage Icon.png Advantage on Stealth checks.',
      },
    ],
    portraits: ['./icons/portraits/gnome_deep_1.png', './icons/portraits/gnome_deep_2.png'],
  },
  {
    id: 'subr16',
    icon: './icons/subraces/Asmodeus_Tiefling.png',
    name: 'Asmodeus Tiefling',
    desc: `Bound to Nessus, the deepest layer of the Hells, these tieflings inherited the ability to wield fire and darkness from the archdevil Asmodeus' infernal bloodline.`,
    mainRace: 'race09',
    armorProficiencies: [],
    features: [
      {
        name: 'Infernal Legacy',
        desc: `Gain the following Spells (Note: These spells use Charisma as their casting stat.):`,
      },
      {
        name: 'Produce Flame',
        desc: `(Cantrip) At level 1`,
        icon: './icons/lvl0spells/Produce_Flame.png',
      },
      {
        name: 'Hellish Rebuke',
        desc: `(1st Level spell) At level 3, casts as if using a second-level slot. Rechange: Long Rest`,
        icon: './icons/lvl1spells/Hellish_Rebuke.png',
      },
      {
        name: 'Darkness',
        desc: `(2nd Level spell) At level 5, Rechange: Long Rest`,
        icon: './icons/lvl2spells/Darkness.png',
      },
    ],
    portraits: ['./icons/portraits/tiefling_asm_1.png', './icons/portraits/tiefling_asm_2.png'],
  },
  {
    id: 'subr17',
    icon: './icons/subraces/Mephistopheles_Tiefling.png',
    name: 'Mephistopheles Tiefling',
    desc: `Descended from the archdevil Mephistopheles, these tieflings are gifted with a particular affinity for arcane magic.`,
    mainRace: 'race09',
    armorProficiencies: [],
    features: [
      {
        name: 'Legacy of Cania',
        desc: `Gain the following Spells (Note: These spells use Charisma as their casting stat.):`,
      },
      {
        name: 'Mage Hand',
        desc: `(Cantrip) At level 1`,
        icon: './icons/lvl0spells/Mage_Hand.png',
      },
      {
        name: 'Burning Hands',
        desc: `(1st Level spell) At level 3, casts as if using a second-level slot. Rechange: Long Rest`,
        icon: './icons/lvl1spells/Burning_Hands.png',
      },
      {
        name: 'Flame Blade',
        desc: `(2nd Level spell) At level 5, Rechange: Long Rest`,
        icon: './icons/lvl2spells/Flame_Blade.png',
      },
    ],
    portraits: ['./icons/portraits/tiefling_mep_1.png', './icons/portraits/tiefling_mep_2.png'],
  },
  {
    id: 'subr18',
    icon: './icons/subraces/Zariel_Tiefling.png',
    name: 'Zariel Tiefling',
    desc: `Tieflings from Zariel's bloodline are empowered with martial strength, and can channel searing flame to punish their enemies.`,
    mainRace: 'race09',
    armorProficiencies: [],
    features: [
      {
        name: 'Legacy of Avernus',
        desc: `Gain the following Spells (Note: These spells use Constitution as their casting stat.):`,
      },
      {
        name: 'Thaumaturgy',
        desc: `(Cantrip) At level 1`,
        icon: './icons/lvl0spells/Thaumaturgy.png',
      },
      {
        name: 'Searing Smite',
        desc: `(1st Level spell) At level 3, casts as if using a second-level slot. Rechange: Long Rest`,
        icon: './icons/lvl1spells/Searing_Smite.png',
      },
      {
        name: 'Branding Smite',
        desc: `(2nd Level spell) At level 5, Rechange: Long Rest`,
        icon: './icons/lvl2spells/Branding_Smite.png',
      },
    ],
    portraits: ['./icons/portraits/tiefling_zar_1.png', './icons/portraits/tiefling_zar_2.png'],
  },
  {
    id: 'subr19',
    icon: './icons/subraces/Black_Dragonborn.png',
    name: 'Black Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Acid Breath`,
        desc: 'Spew forth a column of acid, dealing 2d6 Acid damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Acid damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_black_1.png', './icons/portraits/dragon_black_2.png'],
  },
  {
    id: 'subr20',
    icon: './icons/subraces/Blue_Dragonborn.png',
    name: 'Blue Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the deep sapphire scales and charged, crackling breath of blue dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Lightning Breath`,
        desc: 'Spew forth a column of lightning, dealing 2d6 Lightning damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Lightning damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_blue_1.png', './icons/portraits/dragon_blue_2.png'],
  },
  {
    id: 'subr21',
    icon: './icons/subraces/Brass_Dragonborn.png',
    name: 'Brass Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the burnished ochre hue and flickering, fiery breath of brass dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Fire Breath (Line)`,
        desc: 'Spew forth a column of fire, dealing 2d6 Fire damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Fire damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_brass_1.png', './icons/portraits/dragon_brass_2.png'],
  },
  {
    id: 'subr22',
    icon: './icons/subraces/Bronze_Dragonborn.png',
    name: 'Bronze Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the shining sepia scales and sparking breath of bronze dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Lightning Breath`,
        desc: 'Spew forth a column of lightning, dealing 2d6 Lightning damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Lightning damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_bronze_1.png', './icons/portraits/dragon_bronze_2.png'],
  },
  {
    id: 'subr23',
    icon: './icons/subraces/Copper_Dragonborn.png',
    name: 'Copper Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the pink-gold colouration and corrosive breath of copper dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Acid Breath`,
        desc: 'Spew forth a column of acid, dealing 2d6 Acid damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Acid damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_copper_1.png', './icons/portraits/dragon_copper_2.png'],
  },
  {
    id: 'subr24',
    icon: './icons/subraces/Gold_Dragonborn.png',
    name: 'Gold Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the resplendent shine and roiling, blazing breath of gold dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Fire Breath (Cone)`,
        desc: 'Spew forth a cone of fire, dealing 2d6 Fire damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Fire damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_gold_1.png', './icons/portraits/dragon_gold_2.png'],
  },
  {
    id: 'subr25',
    icon: './icons/subraces/Green_Dragonborn.png',
    name: 'Green Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the brilliant emerald aspect and stinking, putrid breath of green dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Poison Breath (Cone)`,
        desc: 'Spew forth a cone of poison, dealing 2d6 Poison damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Poison damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_green_1.png', './icons/portraits/dragon_green_2.png'],
  },
  {
    id: 'subr26',
    icon: './icons/subraces/Red_Dragonborn.png',
    name: 'Red Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the bright scarlet likeness and roiling, burning breath of red dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Fire Breath (Cone)`,
        desc: 'Spew forth a cone of fire, dealing 2d6 Fire damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Fire damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_red_1.png', './icons/portraits/dragon_red_2.png'],
  },
  {
    id: 'subr27',
    icon: './icons/subraces/Silver_Dragonborn.png',
    name: 'Silver Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the glinting shine and scorching cold breath of silver dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Frost Breath (Cone)`,
        desc: 'Spew forth a cone of ice, dealing 2d6 Cold damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Cold damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_silver_1.png', './icons/portraits/dragon_silver_2.png'],
  },
  {
    id: 'subr28',
    icon: './icons/subraces/White_Dragonborn.png',
    name: 'White Dragonborn',
    desc: `Despite no ancestral links to the mighty creatures, these dragonborn share the snowy aspect and frosty breath of white dragons.`,
    mainRace: 'race11',
    armorProficiencies: [],
    features: [
      {
        name: `Frost Breath (Cone)`,
        desc: 'Spew forth a cone of ice, dealing 2d6 Cold damage.',
      },
      {
        name: `Draconic Ancestry`,
        desc: 'The blood of ancient dragons flow through your veins. You are Resistant to Cold damage.',
      },
    ],
    portraits: ['./icons/portraits/dragon_white_1.png', './icons/portraits/dragon_white_2.png'],
  },
];
