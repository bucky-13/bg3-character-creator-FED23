import { ICharClass } from '../models/dbModels/ICharClass';
import { EEquipment } from './dbEquipmentProficiencies';
import { ESkills } from './dbSkills';

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
    id: 'ccl01',
    name: 'Barbarian',
    desc: `The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.`,
    icon: './icons/charClasses/Barbarian_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: ['scl01', 'scl02', 'scl03'],
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
    features: [
      {
        name: 'Rage',
        desc: `While Raging, you gain the following:
Resistance against physical damage, Deal extra melee and thrown damage, Advantage Icon.png Advantage on Strength checks and saving throws. Your rage lasts for 10 turns and ends early if you haven't attacked a creature or been attacked or you decide to end your Rage. You cannot cast spells or concentrate while raging.`,
      },
      {
        name: 'Unarmoured Defence',
        desc: 'When not wearing armour, add your Constitution modifier to your Armour Class in addition to your Dexterity modifier.',
      },
    ],
  },

  {
    id: 'ccl02',
    name: 'Bard',
    desc: `Bards know music is more than idle fancy - it is power. Through study and adventure, these travelling troubadours master song, speech, and the magic within.`,
    icon: './icons/charClasses/Bard_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    spellsOnStartingLevel: 4,
    spellsPerLevel: 1,
    subclassAtLevel: 3,
    subclasses: ['scl04', 'scl05', 'scl06'],
    expertiseAtLevel: 3,
    skillExpertiseSlots: 2,
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
    features: [
      {
        name: 'Spellcasting',
        desc: 'Choose 2 Cantrips & 4 Spells from the Bard Spell List.',
      },
      {
        name: 'Bardic Inspiration',
        desc: 'Inspire an ally to go beyond their capabilities with your performance. They can add a +1d6 bonus to their next Attack Roll, Ability Check, or Saving Throw. Bardic Inspiration Charges: 3. Recharge: Long rest',
      },
    ],
  },
  {
    id: 'ccl03',
    name: 'Cleric',
    desc: `Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill`,
    icon: './icons/charClasses/Cleric_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 3 },
      { fromLevel: 4, amount: 4 },
      { fromLevel: 10, amount: 5 },
    ],
    subclassAtLevel: 1,
    subclasses: ['scl07', 'scl08', 'scl09', 'scl10', 'scl11', 'scl12', 'scl13'],
    skillProficiencies: [ESkills.History, ESkills.Insight, ESkills.Medicine, ESkills.Persuasion, ESkills.Religion],
    skillProficiencySlots: 2,
    armorProficiencies: [EEquipment.LightArmor, EEquipment.MediumArmor, EEquipment.Shields],
    weaponProficiencies: [EEquipment.SimpleW, EEquipment.Flails, EEquipment.Morningstars],
    features: [
      {
        name: 'Spellcasting',
        desc: 'Choose 3 cantrips from the Cleric Spell List. Learn all Cleric level 1 spells, can prepare 1 (Cleric level + Wisdom modifier) spells.',
      },
      {
        name: 'Select Deity',
        desc: `A Cleric's choice of deity provides access to some unique conversation options throughout the game. Some Cleric spells have visual effects that incorporate the chosen deity's symbol.`,
      },
    ],
  },
  {
    id: 'ccl04',
    name: 'Druid',
    desc: `Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.`,
    icon: './icons/charClasses/Druid_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    subclassAtLevel: 2,
    subclasses: ['scl14', 'scl15', 'scl46'],
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
    features: [
      {
        name: 'Spellcasting',
        desc: 'Choose 2 cantrips from the Druid Spell List. Learn all Druid level 1 spells, can prepare 1 (Druid level + Wisdom modifier) spells.',
      },
      {
        name: 'Wild Shape',
        desc: `At level 2, gain access to new Wild Shape forms.`,
      },
    ],
  },
  {
    id: 'ccl05',
    name: 'Fighter',
    desc: `Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armour like a second skin.`,
    icon: './icons/charClasses/Fighter_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: ['scl16', 'scl17', 'scl18'],
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
    features: [
      {
        name: 'Second Wind',
        desc: `Draw on your stamina to protect yourself. Once per short rest, you can regain 1d10 + Fighter Level hit points.`,
      },
      {
        name: 'Fighting Style',
        desc: `Can select a fighting style.`,
      },
    ],
  },
  {
    id: 'ccl06',
    name: 'Monk',
    desc: `Some reach enlightenment by languid meditation - others do so in the heat of battle. Monks manipulate ki to empower their own strikes and debilitate their foes.`,
    icon: './icons/charClasses/Monk_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: ['scl19', 'scl20', 'scl21'],
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
    features: [
      {
        name: 'Ki Points: 2',
        desc: `You can spend these points to fuel various Monk abilities. Ki abilities which incorporate an unarmed attack use the higher of Dexterity or Strength for attack rolls and save DCs.`,
      },
      {
        name: 'Martial Arts',
        desc: `Attacks with Monk Weapons and unarmed attacks scale with your Dexterity instead of your Strength if your Dexterity is higher. Attacks with Monk Weapons and unarmed attacks deal 1d4 Bludgeoning damage, unless their normal damage is higher. After making an attack with a Monk Weapon or while unarmed, you can make another unarmed attack as a Bonus action.`,
      },

      {
        name: 'Unarmoured Defence',
        desc: `Your reflexes are as effective as any armour. While not wearing armour or a shield, you add your Wisdom Modifier to your Armour Class. This feature does not stack with Mage Armour, nor the Barbarian version of Unarmoured Defence (Barbarian).`,
      },
      {
        name: 'Flurry of Blows',
        desc: `Using a Bonus action and a Ki Point, punch twice in quick succession. Equivalent to two normal unarmed attacks.`,
      },
    ],
  },
  {
    id: 'ccl07',
    name: 'Paladin',
    desc: `A promise made so deeply that it becomes divine in itself flows through a paladin, burning bright enough to inspire allies and smite foes.`,
    icon: './icons/charClasses/Paladin_Icon.png',
    casterLevelPerLevel: 0.5,
    subclassAtLevel: 1,
    subclasses: ['scl22', 'scl23', 'scl24', 'scl25'],
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
    features: [
      {
        name: 'Lay on Hands',
        desc: `Use your blessed touch to heal a creature (2 x level for one charge or 4 x level for two charges) or cure it of all diseases and poisons.`,
      },
      {
        name: 'Divine Sense',
        desc: `Expend a Bonus action to gain Advantage Icon.png Advantage on Attack Rolls against celestials, fiends, and undead. ( Recharge: Short rest )`,
      },
    ],
  },
  {
    id: 'ccl08',
    name: 'Ranger',
    desc: `Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favoured prey.`,
    icon: './icons/charClasses/Ranger_Icon.png',
    casterLevelPerLevel: 0.5,
    spellsOnStartingLevel: 2,
    spellsPerLevel: 0.5,
    subclassAtLevel: 3,
    subclasses: ['scl26', 'scl27', 'scl28'],
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
    features: [
      {
        name: 'Favoured Enemy',
        desc: `Choose 1 Favoured Enemy`,
      },
      {
        name: 'Natural Explorer',
        desc: `Choose 1 Natural Explorer`,
      },
    ],
  },
  {
    id: 'ccl09',
    name: 'Rogue',
    desc: `With stealth, skill, and uncanny reflexes, rogues' versatility lets them get the upper hand in almost any situation.`,
    icon: './icons/charClasses/Rogue_Icon.png',
    casterLevelPerLevel: 0,
    subclassAtLevel: 3,
    subclasses: ['scl29', 'scl30', 'scl31'],
    expertiseAtLevel: 1,
    skillExpertiseSlots: 2,
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
    features: [
      {
        name: 'Expertise',
        desc: `Gain Expertise (double your Proficiency Bonus) in 2 Skills you are Proficient in.`,
      },
      {
        name: 'Sneak Attack',
        desc: `Once per turn, you can deal an extra 1d6D Physical damage to an enemy you have Advantage on, or have an ally next to. You must have a Finesse or Ranged weapon equipped. As you gain Rogue levels, this damage will go up by adding more D6 Physical.png d6 dice.`,
      },
    ],
  },
  {
    id: 'ccl10',
    name: 'Sorcerer',
    desc: `Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.`,
    icon: './icons/charClasses/Sorcerer_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 4 },
      { fromLevel: 4, amount: 5 },
      { fromLevel: 10, amount: 6 },
    ],
    spellsOnStartingLevel: 2,
    spellsPerLevel: 1,
    subclassAtLevel: 1,
    subclasses: ['scl32', 'scl33', 'scl34'],
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
    features: [
      {
        name: 'Spellcasting',
        desc: 'Choose 4 Cantrips & 2 Spells from the Sorcerer Spell List.',
      },
      {
        name: 'Sorcery Points',
        desc: `At level 2, gain access to Sorcery Points and Metamagic choices.`,
      },
    ],
  },

  {
    id: 'ccl11',
    name: 'Warlock',
    desc: `Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.`,
    icon: './icons/charClasses/Warlock_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 2 },
      { fromLevel: 4, amount: 3 },
      { fromLevel: 10, amount: 4 },
    ],
    spellsOnStartingLevel: 2,
    spellsPerLevel: 1,
    subclassAtLevel: 1,
    subclasses: ['scl35', 'scl36', 'scl37'],
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
    features: [
      {
        name: 'Pact Magic',
        desc: `Warlock spell slots (also known as "pact slots") are not like those of other spellcasters. Warlock spell slots are equal to the highest level of Spells the Warlock has access to. Casting a lower level Spell will always "upcast" it to the highest level available. Warlocks have a very limited number of spell slots, but also regain those slots by taking a Short Rest or Long Rest. As a result, Warlocks can cast fewer Spells per battle than other spellcasters, but also more high level Spells per day.`,
      },
      {
        name: 'Spellcasting',
        desc: 'Choose 2 Cantrips & 2 Spells from the Warlock Spell List. Gain 1 Warlock Spell slot',
      },
    ],
  },
  {
    id: 'ccl12',
    name: 'Wizard',
    desc: `Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research.`,
    icon: './icons/charClasses/Wizard_Icon.png',
    casterLevelPerLevel: 1,
    cantripsKnown: [
      { fromLevel: 1, amount: 3 },
      { fromLevel: 4, amount: 4 },
      { fromLevel: 10, amount: 5 },
    ],
    spellsOnStartingLevel: 6,
    spellsPerLevel: 2,
    subclassAtLevel: 2,
    subclasses: ['scl38', 'scl39', 'scl40', 'scl41', 'scl42', 'scl43', 'scl44', 'scl45'],
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
    features: [
      {
        name: 'Spellcasting',
        desc: 'Choose 3 Cantrips & 6 Spells from the Warlock Spell List. Gain 1 Warlock Spell slot',
      },
      {
        name: 'Prepared Spells',
        desc: 'Choose a number of Spells = 1 (Wizard Level +  Intelligence Modifier). Minimum of 1 spell.',
      },
      {
        name: 'Arcane Recovery',
        desc: 'Once per day out of combat, you can recover expended Spell Slots.',
      },
    ],
  },
];
