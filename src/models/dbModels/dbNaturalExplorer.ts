import { ESkills } from '../../database/dbSkills';
import { INaturalExplorer } from './INaturalExplorer';

export const dbNaturalExplorer: INaturalExplorer[] = [
  {
    id: 'nex01',
    name: 'Beast Tamer',
    desc: `You have cultivated a strong bond with animals. You can cast Find Familiar as a ritual spell.`,
    lvl1spell: 'spl124',
  },
  {
    id: 'nex02',
    name: 'Urban Tracker',
    desc: `An expert at navigating the wild within the city, you gain Sleight of Hand Proficiency.`,
    skillProficiencies: ESkills.SleightOfHand,
  },
  {
    id: 'nex03',
    name: 'Wasteland Wanderer: Cold',
    desc: `You have spent endless days surviving desolate tundras. Gain resistance to Cold damage, taking only half damage from it.`,
    resistance: 'Cold Resistance',
  },
  {
    id: 'nex04',
    name: 'Wasteland Wanderer: Fire',
    desc: `You have spent endless days surviving forbidding deserts. Gain resistance to Fire damage, taking only half damage from it.`,
    resistance: 'Fire Resistance',
  },
  {
    id: 'nex05',
    name: 'Wasteland Wanderer: Poison',
    desc: `You have spent endless days surviving fetid swamps. Gain resistance to Poison damage, taking only half damage from it.`,
    resistance: 'Poison Resistance',
  },
];
