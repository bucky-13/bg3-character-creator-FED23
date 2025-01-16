import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import {
  calculateAbilityPointsLeft,
  calculateSkillPointsLeft,
  getExpertiseSlots,
  getProfSlots,
} from '../../functions/creatorMinorFunctions';
import { getDbClass, getDbSubClass } from '../../functions/getDbItems';
import { getCantripTotal, getSpellTotal, totalSpellsSelected } from '../../functions/skillFunctions';
import { ISubClass } from '../../models/dbModels/ISubClass';
import { Dispatcher } from '../../models/types';
import { ButtonSideNavbar } from '../elements/ButtonSideNavbar';
import { ESpellArray } from './mainContentComponents/Spells';
import './SideNavbar.scss';

interface SideNavbarProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}
export const SideNavbar = ({ currentSection, setCurrentSection }: SideNavbarProps) => {
  const { newCharacter } = useNewCharContext();

  const displayCantrips = () => {
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

  const displaySpells = () => {
    const charClass = getDbClass(newCharacter.startingClass);
    let showSpells = false;
    if (charClass.casterLevelPerLevel * newCharacter.characterLevel >= 1 && charClass.spellsOnStartingLevel)
      showSpells = true;

    return showSpells;
  };

  const isActiveSection = (section: string): boolean => {
    return currentSection === section ? true : false;
  };

  const checkSkillsWarning = (): boolean => {
    const profSlots = getProfSlots(getDbClass(newCharacter.startingClass), newCharacter.race);
    const skillPointsLeft = calculateSkillPointsLeft(profSlots, newCharacter.skillProficiencies);
    const charSubClass: ISubClass | undefined = newCharacter.startingSubclass
      ? getDbSubClass(newCharacter.startingSubclass)
      : undefined;
    const expSlots = getExpertiseSlots(getDbClass(newCharacter.startingClass), charSubClass, newCharacter);
    const expPointsLeft = calculateSkillPointsLeft(expSlots, newCharacter.skillProficiencies);
    return skillPointsLeft > 0 || expPointsLeft > 0 ? true : false;
  };

  const checkAbilitiesWarning = (): boolean => {
    const abilityPointsLeft = calculateAbilityPointsLeft(newCharacter.abilities);
    return abilityPointsLeft > 0 ? true : false;
  };

  const checkHECantrip = (): boolean => {
    const spellsFromHE = newCharacter.cantrips?.filter((o) => o.specialCase === 'highelfcatnip');
    return spellsFromHE && spellsFromHE.length > 0 ? false : true;
  };

  const checkSpellsNormal = (spellLevel: ESpellArray): boolean => {
    const spellsSelected = totalSpellsSelected(newCharacter[spellLevel], newCharacter, undefined);
    const amountToPick =
      spellLevel === ESpellArray.Lvl0 ? getCantripTotal(newCharacter, undefined) : getSpellTotal(newCharacter);
    console.log(spellsSelected);
    console.log(amountToPick);
    return amountToPick - spellsSelected > 0 ? true : false;
  };

  const isWarningDisplayed = (section: string): boolean => {
    if (section === 'abilities') return checkAbilitiesWarning() || checkSkillsWarning() ? true : false;
    if (section === 'highelfcatnip') return checkHECantrip();
    if (section === 'cantrips') return checkSpellsNormal(ESpellArray.Lvl0);
    if (section === 'spellsLvl1') return checkSpellsNormal(ESpellArray.Lvl1);
    return false;
  };

  return (
    <div className="sideNavbar">
      <ButtonSideNavbar
        textContent="Origin"
        activeSection={isActiveSection('origin')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Race"
        activeSection={isActiveSection('race')}
        setCurrentSection={setCurrentSection}
      />
      {newCharacter.subrace && (
        <ButtonSideNavbar
          textContent="Subrace"
          activeSection={isActiveSection('subrace')}
          setCurrentSection={setCurrentSection}
        />
      )}
      {(newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') && (
        <ButtonSideNavbar
          textContent="High Elf Cantrip"
          activeSection={isActiveSection('high elf cantrip')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('highelfcatnip')}
        />
      )}
      <ButtonSideNavbar
        textContent="Class"
        activeSection={isActiveSection('class')}
        setCurrentSection={setCurrentSection}
      />
      {newCharacter.startingSubclass && (
        <ButtonSideNavbar
          textContent="Subclass"
          activeSection={isActiveSection('subclass')}
          setCurrentSection={setCurrentSection}
        />
      )}
      {displayCantrips() && (
        <ButtonSideNavbar
          textContent="Cantrips"
          activeSection={isActiveSection('cantrips')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('cantrips')}
        />
      )}
      {displaySpells() && (
        <ButtonSideNavbar
          textContent="Spells"
          activeSection={isActiveSection('spells')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('spellsLvl1')}
        />
      )}
      <ButtonSideNavbar
        textContent="Background"
        activeSection={isActiveSection('background')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Abilities"
        activeSection={isActiveSection('abilitiesAndSkills')}
        setCurrentSection={setCurrentSection}
        displayWarning={isWarningDisplayed('abilities')}
      />
    </div>
  );
};
