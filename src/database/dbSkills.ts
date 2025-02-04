import { ISkill } from '../models/dbModels/ISkill';

export enum ESkills {
  Athletics = 'ski01',
  Acrobatics = 'ski02',
  SleightOfHand = 'ski03',
  Stealth = 'ski04',
  Arcana = 'ski05',
  History = 'ski06',
  Investigation = 'ski07',
  Nature = 'ski08',
  Religion = 'ski09',
  AnimalHandling = 'ski10',
  Insight = 'ski11',
  Medicine = 'ski12',
  Perception = 'ski13',
  Survival = 'ski14',
  Deception = 'ski15',
  Intimidation = 'ski16',
  Performance = 'ski17',
  Persuasion = 'ski18',
}

export const skills: ISkill[] = [
  {
    id: 'ski01',
    name: 'Athletics',
    desc: 'Stay fit. Perform physical stunts',
    parentId: 'abi01',
  },
  {
    id: 'ski02',
    name: 'Acrobatics',
    desc: 'Keep your balance. Land on your feet',
    parentId: 'abi02',
  },
  {
    id: 'ski03',
    name: 'Sleight of Hand',
    desc: 'Wield nimble fingers. Steal stuff',
    parentId: 'abi02',
  },
  {
    id: 'ski04',
    name: 'Stealth',
    desc: 'Stay out of sight. Melt into the shadows.',
    parentId: 'abi02',
  },
  {
    id: 'ski05',
    name: 'Arcana',
    desc: 'Recognise magic. Interact with enchanted items.',
    parentId: 'abi04',
  },
  {
    id: 'ski06',
    name: 'History',
    desc: 'Remember the past -- of the world and its people.',
    parentId: 'abi04',
  },
  {
    id: 'ski07',
    name: 'Investigation',
    desc: 'Analyse clues. Solve mysteries.',
    parentId: 'abi04',
  },
  {
    id: 'ski08',
    name: 'Nature',
    desc: 'Recognise plants and animals. Hug trees.',
    parentId: 'abi04',
  },
  {
    id: 'ski09',
    name: 'Religion',
    desc: 'Recognise deities. Understand holy rites.',
    parentId: 'abi04',
  },
  {
    id: 'ski10',
    name: 'Animal Handling',
    desc: 'Influence animals. Pet all of the dogs.',
    parentId: 'abi05',
  },
  {
    id: 'ski11',
    name: 'Insight',
    desc: 'Read people and situations. Detect lies.',
    parentId: 'abi05',
  },
  {
    id: 'ski12',
    name: 'Medicine',
    desc: 'Recognise symptoms. Diagnose diseases.',
    parentId: 'abi05',
  },
  {
    id: 'ski13',
    name: 'Perception',
    desc: 'Observe your environment. Spot hidden details.',
    parentId: 'abi05',
  },
  {
    id: 'ski14',
    name: 'Survival',
    desc: 'Stay alive in the wilds. Track prey.',
    parentId: 'abi05',
  },
  {
    id: 'ski15',
    name: 'Deception',
    desc: 'Lie and cheat. Manipulate the truth',
    parentId: 'abi06',
  },
  {
    id: 'ski16',
    name: 'Intimidation',
    desc: 'Be a bully. Threaten and induce fear.',
    parentId: 'abi06',
  },
  {
    id: 'ski17',
    name: 'Performance',
    desc: 'Entertain audiences. Command the stage.',
    parentId: 'abi06',
  },
  {
    id: 'ski18',
    name: 'Persuasion',
    desc: 'Turn on the charm. Coax and cajole.',
    parentId: 'abi06',
  },
];
