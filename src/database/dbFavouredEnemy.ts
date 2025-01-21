import { IFavouredEnemy } from '../models/dbModels/IFavouredEnemy';
import { EEquipment } from './dbEquipmentProficiencies';
import { ESkills } from './dbSkills';

export const dbFavouredEnemy: IFavouredEnemy[] = [
  {
    id: 'fen01',
    name: 'Bounty Hunter',
    desc: `Gain Proficiency in Investigation. Creatures you hit with Ensnaring Strike (either ranged or melee) have Disadvantage on their Saving Throw.`,
    skillProficiencies: ESkills.Investigation,
  },
  {
    id: 'fen02',
    name: 'Keeper of the Veil',
    desc: `You specialise in hunting creatures from other planes of existence. You gain Proficiency in Arcana and can grant protection against aberrations, celestials, elementals, fey, fiends, and undead.`,
    skillProficiencies: ESkills.Arcana,
    lvl1spell: 'spl140',
  },
  {
    id: 'fen03',
    name: 'Mage Breaker',
    desc: `You have a history of battling spellcasters. Gain Proficiency with Arcana and True Strike, which gives you Advantage on Attack Rolls against a creature. Wisdom is your Spellcasting Ability for this spell.`,
    skillProficiencies: ESkills.Arcana,
    cantrip: 'spl021',
  },
  {
    id: 'fen04',
    name: 'Ranger Knight',
    desc: `You have sworn to serve a crown or nation and seek to bring its foes to ruin. Gain Proficiency with History and Proficiency with Heavy Armour.`,
    skillProficiencies: ESkills.History,
    armorProficiencies: EEquipment.HeavyArmor,
  },
  {
    id: 'fen05',
    name: 'Sanctified Stalker',
    desc: `You swore to hunt the enemies of a holy or druidic order. Gain Proficiency with Religion and the Sacred Flame Cantrip, which deals 1d8 Radiant damage. Wisdom is your Spellcasting Ability for the Cantrip.`,
    skillProficiencies: ESkills.Religion,
    cantrip: 'spl016',
  },
];
