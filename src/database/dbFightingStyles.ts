import { IFightingStyle } from '../models/dbModels/IFightingSyles';

export const dbFightingStyles: IFightingStyle[] = [
  { name: 'Archery', desc: 'You gain a +2 bonus to Ranged Weapon attack rolls' },
  { name: 'Defence', desc: 'You gain a +1 bonus to Armour Class while wearing Armour.' },
  {
    name: 'Duelling',
    desc: 'When you are wielding a melee weapon that is not Two-Handed or Versatile in one hand, and no weapon in the other hand, you gain a +2 bonus to damage rolls with that weapon, increasing your chance to do heavy damage.',
  },
  {
    name: 'Great Weapon Fighting',
    desc: 'When you roll a 1 or 2 on a damage die for an attack with a Two-Handed melee weapon, that die is rerolled once.',
  },
  {
    name: 'Protection',
    desc: 'When you have a Shield, impose Disadvantage on an enemy who attacks one of your allies when you are within  1.5m / 5ft. You must be able to see the enemy. (This is a reaction. Toggle a reaction during your turn. It will automatically execute when needed.)',
  },
  {
    name: 'Two-Weapon Fighting',
    desc: 'When you make an offhand attack, you can add your Ability Modifier to the damage of the attack',
  },
];
