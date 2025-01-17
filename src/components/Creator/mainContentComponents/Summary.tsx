import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSubClass,
  getDbSubrace,
} from '../../../functions/getDbItems';
import './Summary.scss';

export const Summary = () => {
  const { newCharacter } = useNewCharContext();

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Character Summary</h2>
      <div className="summarySecondaryContainer">
        <p>
          <span className="summaryTitle">Origin:</span> {getDbOrigin(newCharacter.origin).name}
        </p>
        <p>
          <span className="summaryTitle">Race:</span> {getDbRace(newCharacter.race).name}
        </p>
        {newCharacter.subrace && (
          <p>
            <span className="summaryTitle">Race:</span> {getDbSubrace(newCharacter.subrace).name}
          </p>
        )}
        <p>
          <span className="summaryTitle">Class:</span> {getDbClass(newCharacter.startingClass).name}
        </p>
        {newCharacter.startingSubclass && (
          <p>
            <span className="summaryTitle">Race:</span> {getDbSubClass(newCharacter.startingSubclass).name}
          </p>
        )}
        <p>
          <span className="summaryTitle">Background:</span> {getDbBackground(newCharacter.background).name}
        </p>
      </div>
    </div>
  );
};
