import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { findSectionIndex, setUsedSections } from '../../functions/sectionNavigation';
import { displayCantrips, displaySpells, isWarningDisplayed } from '../../functions/sideNavbarFunctions';
import { Dispatcher } from '../../models/types';

interface IProceedProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}

export const Proceed = ({ currentSection, setCurrentSection }: IProceedProps) => {
  const { newCharacter } = useNewCharContext();
  const usedSectionsArray = setUsedSections(newCharacter);
  let warningArray: string[] = [];

  const isSummaryPending = (): boolean => {
    let summaryPending = false;
    let warningText = [];
    if (newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') {
      if (isWarningDisplayed('high elf cantrip', newCharacter)) {
        summaryPending = true;
        warningText.push('High Elf cantrip, ');
      }
    }
    if (displayCantrips(newCharacter)) {
      if (isWarningDisplayed('cantrips', newCharacter)) {
        summaryPending = true;
        warningText.push('Cantrips, ');
      }
    }
    if (displaySpells(newCharacter)) {
      if (isWarningDisplayed('spellsLvl1', newCharacter)) {
        summaryPending = true;
        warningText.push('Level 1 Spells, ');
      }
    }
    if (isWarningDisplayed('abilities', newCharacter)) {
      summaryPending = true;
      warningText.push('Abilites, ');
    }
    if (newCharacter.background === 'cbg01' || newCharacter.background === 'cbg07') {
      if (isWarningDisplayed('name', newCharacter)) {
        summaryPending = true;
        warningText.push('Name');
      }
    }
    warningArray = warningText;
    return summaryPending;
  };

  const areChoicesPending = (): boolean => {
    let isPending = false;
    if (currentSection === 'high elf cantrip' && isWarningDisplayed('high elf cantrip', newCharacter)) isPending = true;
    if (currentSection === 'cantrips' && isWarningDisplayed('cantrips', newCharacter)) isPending = true;
    if (currentSection === 'spells' && isWarningDisplayed('spellsLvl1', newCharacter)) isPending = true;
    if (currentSection === 'abilities' && isWarningDisplayed('abilities', newCharacter)) isPending = true;
    if (currentSection === 'name' && isWarningDisplayed('name', newCharacter)) isPending = true;
    if (currentSection === 'summary') {
      isPending = isSummaryPending();
    }
    return isPending;
  };

  const navigateToNextSection = () => {
    let index = findSectionIndex(usedSectionsArray, currentSection);
    if (index === usedSectionsArray.length - 1) {
      console.log('insert fancy function here later');
    } else {
      setCurrentSection(usedSectionsArray[index + 1]);
    }
  };
  const navigateToPrevSection = () => {
    let index = findSectionIndex(usedSectionsArray, currentSection);
    setCurrentSection(usedSectionsArray[index - 1]);
  };

  return (
    <div className="proceedContainer">
      {areChoicesPending() && (
        <div className="alertTextContainer">
          {currentSection !== 'summary' && (
            <div className="alertDiv">
              <h4>!</h4>
            </div>
          )}
          <p className="alertText">Choices Pending: {warningArray}</p>
        </div>
      )}
      <div className="proceedButtonsContainer">
        <button onClick={navigateToPrevSection} disabled={findSectionIndex(usedSectionsArray, currentSection) === 0}>
          Previous
        </button>
        <button onClick={navigateToNextSection} disabled={areChoicesPending()}>
          Next
        </button>
      </div>
    </div>
  );
};
