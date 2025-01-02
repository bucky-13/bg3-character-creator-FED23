import { ICharBackground } from '../models/ICharBackground';
import { ESkills } from './dbSkills';

export const charBackgrounds: ICharBackground[] = [
  {
    backgroundId: 'cbg01',
    name: 'Acolyte',
    desc: `You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.`,
    imgSrc: './icons/charBackgrounds/Acolyte_Icon.png',
    skillProficienciesGiven: [ESkills.Insight, ESkills.Religion],
  },
  {
    backgroundId: 'cbg02',
    name: 'Charlatan',
    desc: `You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.`,
    imgSrc: './icons/charBackgrounds/Charlatan_Icon.png',
    skillProficienciesGiven: [ESkills.Deception, ESkills.SleightOfHand],
  },
  {
    backgroundId: 'cbg03',
    name: 'Criminal',
    desc: `You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.`,
    imgSrc: './icons/charBackgrounds/Criminal_Icon.png',
    skillProficienciesGiven: [ESkills.Deception, ESkills.Stealth],
  },
  {
    backgroundId: 'cbg04',
    name: 'Entertainer',
    desc: `You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.`,
    imgSrc: './icons/charBackgrounds/Entertainer_Icon.png',
    skillProficienciesGiven: [ESkills.Acrobatics, ESkills.Performance],
  },
  {
    backgroundId: 'cbg05',
    name: 'Folk Hero',
    desc: `You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.`,
    imgSrc: './icons/charBackgrounds/Folk_Hero_Icon.png',
    skillProficienciesGiven: [ESkills.AnimalHandling, ESkills.Insight],
  },
  {
    backgroundId: 'cbg06',
    name: 'Guild Artisan',
    desc: `Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.`,
    imgSrc: './icons/charBackgrounds/Guild_Artisan_Icon.png',
    skillProficienciesGiven: [ESkills.Insight, ESkills.Persuasion],
  },
  {
    backgroundId: 'cbg07',
    name: 'Haunted One (Dark Urge)',
    desc: `A wicked moment, person, or thing that cannot be slain by sword or spell haunts your mind and flickers in your peripheral vision. You carry it wherever your adventure takes you - or perhaps it carries you.`,
    imgSrc: './icons/charBackgrounds/Haunted_One_Icon.png',
    skillProficienciesGiven: [ESkills.Medicine, ESkills.Intimidation],
  },
  {
    backgroundId: 'cbg08',
    name: 'Noble',
    desc: `You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.`,
    imgSrc: './icons/charBackgrounds/Noble_Icon.png',
    skillProficienciesGiven: [ESkills.History, ESkills.Persuasion],
  },
  {
    backgroundId: 'cbg09',
    name: 'Outlander',
    desc: `You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.`,
    imgSrc: './icons/charBackgrounds/Outlander_Icon.png',
    skillProficienciesGiven: [ESkills.Athletics, ESkills.Survival],
  },
  {
    backgroundId: 'cbg10',
    name: 'Sage',
    desc: `You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose.`,
    imgSrc: './icons/charBackgrounds/Sage_Icon.png',
    skillProficienciesGiven: [ESkills.Arcana, ESkills.History],
  },
  {
    backgroundId: 'cbg11',
    name: 'Soldier',
    desc: `You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess.`,
    imgSrc: './icons/charBackgrounds/Soldier_Icon.png',
    skillProficienciesGiven: [ESkills.Athletics, ESkills.Intimidation],
  },
  {
    backgroundId: 'cbg12',
    name: 'Urchin',
    desc: `After surviving a poor and bleak childhood, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.`,
    imgSrc: './icons/charBackgrounds/Urchin_Icon.png',
    skillProficienciesGiven: [ESkills.SleightOfHand, ESkills.Stealth],
  },
];
