import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { subraces } from '../../../database/dbSubraces';
import { getDbObject } from '../../../functions/getDbItems';
import { ISubrace } from '../../../models/dbModels/ISubrace';

export const Subrace = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubrace, setSelectedSubrace] = useState(getDbObject(newCharacter.subrace!, 'subraces'));

  const isActiveIcon = (icon: string): string => {
    return icon === newCharacter.subrace ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

  const onChangeSubrace = (changdSubrace: ISubrace): void => {
    setSelectedSubrace(changdSubrace);
    setNewCharacter({ ...newCharacter, subrace: changdSubrace.id });
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Subrace</h2>

      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {subraces.map(
                (subrace) =>
                  subrace.mainRace === newCharacter.race && (
                    <div key={subrace.id} className={isActiveIcon(subrace.id)} onClick={() => onChangeSubrace(subrace)}>
                      <img src={subrace.icon} />
                      <p>{subrace.name}</p>
                    </div>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubrace && (
          <div className="selectedChoiceContainer">
            <h3>{selectedSubrace.name}</h3>
            <p>{selectedSubrace.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
