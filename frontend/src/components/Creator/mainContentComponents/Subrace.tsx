import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { subraces } from '../../../database/dbSubraces';
import { getSubraceObject } from '../../../functions/getDbItems';
import { ISubrace } from '../../../models/dbModels/ISubrace';

export const Subrace = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  //   const subracesArray = getSubracesArray(newCharacter.race);

  const [selectedSubrace, setSelectedSubrace] = useState(getSubraceObject(newCharacter.subrace!));

  const isActiveIcon = (icon: string): string => {
    return icon === newCharacter.subrace ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

  const onCHangeSubrace = (changdSubrace: ISubrace): void => {
    setSelectedSubrace(changdSubrace);
    setNewCharacter({ ...newCharacter, subrace: changdSubrace.id });
  };

  return (
    <div>
      <h2>Subrace</h2>

      <div className="centerContainer originsContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="originOptionsContainer">
              {subraces.map(
                (subrace) =>
                  subrace.mainRace === newCharacter.race && (
                    <div key={subrace.id} className={isActiveIcon(subrace.id)} onClick={() => onCHangeSubrace(subrace)}>
                      <img src={subrace.icon} />
                      <p>{subrace.name}</p>
                    </div>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubrace && (
          <div className="chosenRace">
            <h3>{selectedSubrace.name}</h3>
            <p>{selectedSubrace.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
