import { ICharBackground } from '../models/dbModels/ICharBackground';
import { ESkills } from './dbSkills';

export enum ECharBg {
  Acolyte = 'cbg01',
  Charlatan = 'cbg02',
  Criminal = 'cbg03',
  Entertainer = 'cbg04',
  FolkHero = 'cbg05',
  GuildArtisan = 'cbg06',
  HauntedOne = 'cbg07',
  Noble = 'cbg08',
  Outlander = 'cbg09',
  Sage = 'cbg10',
  Soldier = 'cbg11',
  Urchin = 'cbg12',
}

export const charBackgrounds: ICharBackground[] = [
  {
    id: 'cbg01',
    name: 'Acolyte',
    desc: `You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.`,
    icon: './icons/charBackgrounds/Acolyte_Icon.png',
    skillProficiencies: [ESkills.Insight, ESkills.Religion],
  },
  {
    id: 'cbg02',
    name: 'Charlatan',
    desc: `You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.`,
    icon: './icons/charBackgrounds/Charlatan_Icon.png',
    skillProficiencies: [ESkills.Deception, ESkills.SleightOfHand],
  },
  {
    id: 'cbg03',
    name: 'Criminal',
    desc: `You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.`,
    icon: './icons/charBackgrounds/Criminal_Icon.png',
    skillProficiencies: [ESkills.Deception, ESkills.Stealth],
  },
  {
    id: 'cbg04',
    name: 'Entertainer',
    desc: `You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.`,
    icon: './icons/charBackgrounds/Entertainer_Icon.png',
    skillProficiencies: [ESkills.Acrobatics, ESkills.Performance],
  },
  {
    id: 'cbg05',
    name: 'Folk Hero',
    desc: `You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.`,
    icon: './icons/charBackgrounds/Folk_Hero_Icon.png',
    skillProficiencies: [ESkills.AnimalHandling, ESkills.Insight],
  },
  {
    id: 'cbg06',
    name: 'Guild Artisan',
    desc: `Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.`,
    icon: './icons/charBackgrounds/Guild_Artisan_Icon.png',
    skillProficiencies: [ESkills.Insight, ESkills.Persuasion],
  },
  {
    id: 'cbg07',
    name: 'Haunted One (Dark Urge)',
    desc: `A wicked moment, person, or thing that cannot be slain by sword or spell haunts your mind and flickers in your peripheral vision. You carry it wherever your adventure takes you - or perhaps it carries you.`,
    icon: './icons/charBackgrounds/Haunted_One_Icon.png',
    skillProficiencies: [ESkills.Medicine, ESkills.Intimidation],
  },
  {
    id: 'cbg08',
    name: 'Noble',
    desc: `You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.`,
    icon: './icons/charBackgrounds/Noble_Icon.png',
    skillProficiencies: [ESkills.History, ESkills.Persuasion],
  },
  {
    id: 'cbg09',
    name: 'Outlander',
    desc: `You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.`,
    icon: './icons/charBackgrounds/Outlander_Icon.png',
    skillProficiencies: [ESkills.Athletics, ESkills.Survival],
  },
  {
    id: 'cbg10',
    name: 'Sage',
    desc: `You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose.`,
    icon: './icons/charBackgrounds/Sage_Icon.png',
    skillProficiencies: [ESkills.Arcana, ESkills.History],
  },
  {
    id: 'cbg11',
    name: 'Soldier',
    desc: `You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess.`,
    icon: './icons/charBackgrounds/Soldier_Icon.png',
    skillProficiencies: [ESkills.Athletics, ESkills.Intimidation],
  },
  {
    id: 'cbg12',
    name: 'Urchin',
    desc: `After surviving a poor and bleak childhood, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.`,
    icon: './icons/charBackgrounds/Urchin_Icon.png',
    skillProficiencies: [ESkills.SleightOfHand, ESkills.Stealth],
  },
];
