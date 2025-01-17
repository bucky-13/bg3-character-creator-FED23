import { ESpellArray } from '../components/Creator/mainContentComponents/Spells';
import { ISubClass } from '../models/dbModels/ISubClass';
import { INewCharacter } from '../models/INewCharater';
import {
  calculateAbilityPointsLeft,
  calculateSkillPointsLeft,
  getExpertiseSlots,
  getProfSlots,
  regexNameCheckPassed,
} from './creatorMinorFunctions';
import { getDbClass, getDbSubClass } from './getDbItems';
import { getCantripTotal, getSpellTotal, totalSpellsSelected } from './skillFunctions';

export const checkPlusTwoBonusMissing = (newCharacter: INewCharacter): boolean => {
  const plus2bonuses = newCharacter.abilities.filter((o) => o.plusTwoBonus === true);
  return Object.keys(plus2bonuses).length <= 0 ? true : false;
};
export const checkPlusOneBonusMissing = (newCharacter: INewCharacter): boolean => {
  const plus1bonuses = newCharacter.abilities.filter((o) => o.plusOneBonus === true);

  return Object.keys(plus1bonuses).length <= 0 ? true : false;
};
export const checkPlusBonusesMissing = (newCharacter: INewCharacter) => {
  const plus1bonuses = checkPlusOneBonusMissing(newCharacter);
  const plus2bonuses = checkPlusTwoBonusMissing(newCharacter);
  return plus1bonuses || plus2bonuses ? true : false;
};

export const checkAbilitiesWarning = (newCharacter: INewCharacter): boolean => {
  const abilityPointsLeft = calculateAbilityPointsLeft(newCharacter.abilities);
  const plusBonusesChecked = checkPlusBonusesMissing(newCharacter);
  return abilityPointsLeft > 0 || plusBonusesChecked ? true : false;
};

export const checkHECantrip = (newCharacter: INewCharacter): boolean => {
  const spellsFromHE = newCharacter.cantrips?.filter((o) => o.specialCase === 'highelfcatnip');
  return spellsFromHE && spellsFromHE.length > 0 ? false : true;
};

export const checkSkillsWarning = (newCharacter: INewCharacter): boolean => {
  const profSlots = getProfSlots(getDbClass(newCharacter.startingClass), newCharacter.race);
  const skillPointsLeft = calculateSkillPointsLeft(profSlots, newCharacter.skillProficiencies);
  const charSubClass: ISubClass | undefined = newCharacter.startingSubclass
    ? getDbSubClass(newCharacter.startingSubclass)
    : undefined;
  const expSlots = getExpertiseSlots(getDbClass(newCharacter.startingClass), charSubClass, newCharacter);
  const expPointsLeft = calculateSkillPointsLeft(expSlots, newCharacter.skillProficiencies);
  return skillPointsLeft > 0 || expPointsLeft > 0 ? true : false;
};

export const checkSpellsNormal = (spellLevel: ESpellArray, newCharacter: INewCharacter): boolean => {
  const spellsSelected = totalSpellsSelected(newCharacter[spellLevel], newCharacter, undefined);
  const amountToPick =
    spellLevel === ESpellArray.Lvl0 ? getCantripTotal(newCharacter, undefined) : getSpellTotal(newCharacter);
  return amountToPick - spellsSelected > 0 ? true : false;
};

export const displayCantrips = (newCharacter: INewCharacter) => {
  const charClass = getDbClass(newCharacter.startingClass);
  let showCantrips = false;
  if (charClass.cantripsKnown) {
    for (let i = 0; i < charClass.cantripsKnown.length; i++) {
      const yes = charClass.cantripsKnown[i].fromLevel === newCharacter.characterLevel;
      if (yes) showCantrips = true;
    }
  }
  return showCantrips;
};

export const displaySpells = (newCharacter: INewCharacter) => {
  const charClass = getDbClass(newCharacter.startingClass);
  let showSpells = false;
  if (charClass.casterLevelPerLevel * newCharacter.characterLevel >= 1 && charClass.spellsOnStartingLevel)
    showSpells = true;

  return showSpells;
};

export const isWarningDisplayed = (section: string, newCharacter: INewCharacter): boolean => {
  if (section === 'abilities')
    return checkAbilitiesWarning(newCharacter) || checkSkillsWarning(newCharacter) ? true : false;
  if (section === 'high elf cantrip') return checkHECantrip(newCharacter);
  if (section === 'cantrips') return checkSpellsNormal(ESpellArray.Lvl0, newCharacter);
  if (section === 'spellsLvl1') return checkSpellsNormal(ESpellArray.Lvl1, newCharacter);
  if (section === 'name') return !regexNameCheckPassed(newCharacter.name);
  return false;
};
