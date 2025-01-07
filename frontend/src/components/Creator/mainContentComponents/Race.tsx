import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getRaceObject } from '../../../functions/getDbItems';
import { ERaces, races } from '../../../database/dbRaces';
import './Race.scss';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getRaceObject(newCharacter.race));

  const isActiveIcon = (icon: ERaces): string => {
    return icon === newCharacter.race ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

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
    <div className="centerContainer originsContainer">
      {!newCharacter.hasLockedChoices && (
        <div>
          <h2>Race</h2>
          <div className="originOptionsContainer">
            {races.map((race) => (
              <div key={race.id} className={isActiveIcon(race.id)} onClick={() => onChangeRace(race)}>
                <img src={race.icon} />
                <p>{race.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedRace && (
        <div className="chosenRace">
          <h3>{selectedRace.name}</h3>
          <p>{selectedRace.desc}</p>
        </div>
      )}
    </div>
  );
};
