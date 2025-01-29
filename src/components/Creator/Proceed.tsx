import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { findSectionIndex, setUsedSections } from '../../functions/sectionNavigation';
import { areChoicesPending, generateWarningsText } from '../../functions/summaryFunctions';
import { Dispatcher } from '../../models/types';

interface IProceedProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
  setShowModal: Dispatcher<boolean>;
}

export const Proceed = ({ currentSection, setCurrentSection, setShowModal }: IProceedProps) => {
  const { newCharacter } = useNewCharContext();
  const usedSectionsArray = setUsedSections(newCharacter);
  let warningArray: string[] = generateWarningsText(currentSection, newCharacter);

  const navigateToNextSection = async () => {
    let index = findSectionIndex(usedSectionsArray, currentSection);
    if (index === usedSectionsArray.length - 1) {
      setShowModal(true);
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
      {areChoicesPending(currentSection, newCharacter) && (
        <div className="alertTextContainer">
          {currentSection !== 'summary' && (
            <div className="alertDiv">
              <h4>!</h4>
            </div>
          )}
          <p className="alertText">
            Choices Required {warningArray.length > 0 && ': ' + warningArray.map((o) => ' ' + o)}
          </p>
        </div>
      )}
      <div className="proceedButtonsContainer">
        <button onClick={navigateToPrevSection} disabled={findSectionIndex(usedSectionsArray, currentSection) === 0}>
          Previous
        </button>
        <button
          onClick={navigateToNextSection}
          disabled={areChoicesPending(currentSection, newCharacter)}
          className="confirmBtn"
        >
          {currentSection === 'summary' ? 'Save Character' : 'Next'}
        </button>
      </div>
    </div>
  );
};
