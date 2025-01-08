import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbObject(newCharacter.race, 'races'));

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    if (changedRace.subraces) {
      setNewCharacter({ ...newCharacter, race: changedRace.id, subrace: changedRace.subraces[0] });
    } else {
      const newState: INewCharacter = { ...newCharacter, race: changedRace.id };
      delete newState.subrace;
      setNewCharacter(newState);
    }
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Race</h2>
      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {races.map((race) => (
                <div
                  key={race.id}
                  className={isActiveIcon(race.id, 'race', newCharacter)}
                  onClick={() => onChangeRace(race)}
                >
                  <img src={race.icon} />
                  <p>{race.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedRace && (
          <div className="selectedChoiceContainer">
            <h3>{selectedRace.name}</h3>
            <p>{selectedRace.desc}</p>
            <h4>Features:</h4>
          </div>
        )}
      </div>
    </div>
  );
};
