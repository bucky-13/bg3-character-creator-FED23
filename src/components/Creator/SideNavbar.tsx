import { useNewCharContext } from '../../Context/CreatedCharacterContext';

import { displayCantrips, displaySpells, isWarningDisplayed } from '../../functions/sideNavbarFunctions';
import { areChoicesPending } from '../../functions/summaryFunctions';

import { Dispatcher } from '../../models/types';
import { ButtonSideNavbar } from '../elements/ButtonSideNavbar';

import './SideNavbar.scss';

interface SideNavbarProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
  setShowModal: Dispatcher<boolean>;
}
export const SideNavbar = ({ currentSection, setCurrentSection, setShowModal }: SideNavbarProps) => {
  const { newCharacter } = useNewCharContext();

  const isActiveSection = (section: string): boolean => {
    return currentSection === section ? true : false;
  };

  const onClickSaveChar = () => {
    setShowModal(true);
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
          displayWarning={isWarningDisplayed('high elf cantrip', newCharacter)}
        />
      )}
      <ButtonSideNavbar
        textContent="Class"
        activeSection={isActiveSection('class')}
        setCurrentSection={setCurrentSection}
      />
      {newCharacter.startingClass === 'ccl05' && (
        <ButtonSideNavbar
          textContent="Fighting Style"
          activeSection={isActiveSection('fighting style')}
          setCurrentSection={setCurrentSection}
        />
      )}
      {newCharacter.startingClass === 'ccl08' && (
        <ButtonSideNavbar
          textContent="Favoured Enemy"
          activeSection={isActiveSection('favoured enemy')}
          setCurrentSection={setCurrentSection}
        />
      )}
      {newCharacter.startingClass === 'ccl08' && (
        <ButtonSideNavbar
          textContent="Natural Explorer"
          activeSection={isActiveSection('natural explorer')}
          setCurrentSection={setCurrentSection}
        />
      )}
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
        activeSection={isActiveSection('abilities')}
        setCurrentSection={setCurrentSection}
        displayWarning={isWarningDisplayed('abilities', newCharacter)}
      />
      <ButtonSideNavbar
        textContent="Skills"
        activeSection={isActiveSection('skills')}
        setCurrentSection={setCurrentSection}
        displayWarning={isWarningDisplayed('skills', newCharacter)}
      />
      {(newCharacter.origin === 'ori01' || newCharacter.origin === 'ori08') && (
        <ButtonSideNavbar
          textContent="Name"
          activeSection={isActiveSection('name')}
          setCurrentSection={setCurrentSection}
          displayWarning={isWarningDisplayed('name', newCharacter)}
        />
      )}
      <ButtonSideNavbar
        textContent="Summary"
        activeSection={isActiveSection('summary')}
        setCurrentSection={setCurrentSection}
      />
      <button
        disabled={areChoicesPending('summary', newCharacter)}
        className={areChoicesPending('summary', newCharacter) ? '' : 'confirmBtn'}
        onClick={onClickSaveChar}
      >
        <p>Save Character</p>
      </button>
    </div>
  );
};
