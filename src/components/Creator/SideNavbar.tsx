import { useNewCharContext } from '../../Context/CreatedCharacterContext';

import { displayCantrips, displaySpells, isWarningDisplayed } from '../../functions/sideNavbarFunctions';

import { Dispatcher } from '../../models/types';
import { ButtonSideNavbar } from '../elements/ButtonSideNavbar';

import './SideNavbar.scss';

interface SideNavbarProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}
export const SideNavbar = ({ currentSection, setCurrentSection }: SideNavbarProps) => {
  const { newCharacter } = useNewCharContext();

  const isActiveSection = (section: string): boolean => {
    return currentSection === section ? true : false;
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
          displayWarning={isWarningDisplayed('highelfcatnip', newCharacter)}
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
      {displayCantrips(newCharacter) && (
        <ButtonSideNavbar
          textContent="Cantrips"
          activeSection={isActiveSection('cantrips')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('cantrips', newCharacter)}
        />
      )}
      {displaySpells(newCharacter) && (
        <ButtonSideNavbar
          textContent="Spells"
          activeSection={isActiveSection('spells')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('spellsLvl1', newCharacter)}
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
        displayWarning={isWarningDisplayed('abilities', newCharacter)}
      />
    </div>
  );
};
