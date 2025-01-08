import { IAbility } from '../models/dbModels/IAbilitiy';

export enum EAbilites {
  Str = 'abi01',
  Dex = 'abi02',
  Con = 'abi03',
  Int = 'abi04',
  Wis = 'abi05',
  Cha = 'abi06',
}

export const abilities: IAbility[] = [
  {
    id: 'abi01',
    name: 'Strength',
    shortName: 'Str',
    desc: 'Muscles and physical power. Affects your effectiveness with melee weapons. Also determines how far you can jump and how much you can carry.',
    icon: './icons/abilities/str_icon.png',
  },
  {
    id: 'abi02',
    name: 'Dexterity',
    shortName: 'Dex',
    desc: 'Agility, reflexes, and balance. Affects your effectiveness with ranged and Finesse weapons. Also affects your Initiative and Armour Class.',
    icon: './icons/abilities/dex_icon.png',
  },
  {
    id: 'abi03',
    name: 'Constitution',
    shortName: 'Con',
    desc: 'Stamina and physical endurance. Affects your hit point maximum',
    icon: './icons/abilities/con_icon.png',
  },
  {
    id: 'abi04',
    name: 'Intelligence',
    shortName: 'Int',
    desc: 'Memory and mental power. Improves spellcasting for wizards',
    icon: './icons/abilities/int_icon.png',
  },
  {
    id: 'abi05',
    name: 'Wisdom',
    shortName: 'Wis',
    desc: 'Senses and intuition. Improves spellcasting for clerics, druids, and rangers.',
    icon: './icons/abilities/wis_icon.png',
  },
  {
    id: 'abi06',
    name: 'Charisma',
    shortName: 'Cha',
    desc: 'Force of personality. Improves spellcasting for bards, paladins, sorcerers, and warlocks. Influences traders prices.',
    icon: './icons/abilities/cha_icon.png',
  },
];
