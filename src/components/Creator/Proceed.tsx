import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { findSectionIndex, setUsedSections } from '../../functions/sectionNavigation';
import { isWarningDisplayed } from '../../functions/sideNavbarFunctions';
import { Dispatcher } from '../../models/types';

interface IProceedProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}

export const Proceed = ({ currentSection, setCurrentSection }: IProceedProps) => {
  const { newCharacter } = useNewCharContext();
  const usedSectionsArray = setUsedSections(newCharacter);

  const areChoicesPending = (): boolean => {
    let isPending = false;
    if (currentSection === 'high elf cantrip' && isWarningDisplayed('high elf cantrip', newCharacter)) isPending = true;
    if (currentSection === 'cantrips' && isWarningDisplayed('cantrips', newCharacter)) isPending = true;
    if (currentSection === 'spells' && isWarningDisplayed('spellsLvl1', newCharacter)) isPending = true;
    if (currentSection === 'abilities' && isWarningDisplayed('abilities', newCharacter)) isPending = true;
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
          <div className="alertDiv">
            <h4>!</h4>
          </div>
          <p className="alertText">Choices Pending</p>
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
