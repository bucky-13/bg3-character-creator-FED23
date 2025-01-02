export interface ICreatedCharacter {
  charId: string;
  name: string;
  characterLevel: number;
  origin: string;
  race: { raceId: string; isSubrace: boolean };
  classes: [{ classId: string; levels: string; isSubclass: boolean }];
  casterLevel: number;
  cantrips?: string[];
  lvl1spells?: string[];
  lvl2spells?: string[];
  lvl3spells?: string[];
  lvl4spells?: string[];
  lvl5spells?: string[];
  lvl6spells?: string[];
  background: string;
  abilities: [
    {
      abiId: string;
      baseValue: number;
      plusOneBonus: boolean;
      plusTwoBonus: boolean;
      bonusesFromPerks: number[];
    },
  ];
  skillsProficiencies: string[];
  skillsExpertises: string[];
  equipmentProficiencies: [{ name: string; equipmentType: string }];
  perks: string[];

  lvlChoices: ILvlChoices[];
}

export interface ILvlChoices {
  level: number;
  class: string;
  subclass?: string;
  specialSkills?: string[];
  chosenSpells?: string[];
  unchosenSpells?: string[];
  chosenPerks?: string;
  skillProficiencies?: string[];
  skillsExpertises: string[];
}
