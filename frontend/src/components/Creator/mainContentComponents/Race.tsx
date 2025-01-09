import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';
import { changeSkillsProfs, isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbObject(newCharacter.race, 'races'));

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    const newSkillProfs = changeSkillsProfs(newCharacter, 'race', changedRace);
    if (changedRace.subraces) {
      setNewCharacter({
        ...newCharacter,
        race: changedRace.id,
        subrace: changedRace.subraces[0],
        skillProficiencies: newSkillProfs,
      });
    } else {
      const newState: INewCharacter = { ...newCharacter, race: changedRace.id, skillProficiencies: newSkillProfs };
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
            <div className="selectedChoiceHeader">
              <img src={selectedRace.icon} />
              <h3>{selectedRace.name}</h3>
            </div>
            <p>{selectedRace.desc}</p>
            <h4>Features:</h4>
          </div>
        )}
      </div>
    </div>
  );
};
