import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject, getDbSubrace } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';
import { changeSkillsProfs, isActiveIcon, updateExpertiseArray } from '../../../functions/creatorMinorFunctions';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbObject(newCharacter.race, 'races'));

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    let newSkillProfs = changeSkillsProfs(newCharacter, 'race', changedRace);
    newSkillProfs = newSkillProfs.filter((o) => o.fromSource !== 'subrace');
    const defaultSubrace = changedRace.subraces ? getDbSubrace(changedRace.subraces[0]) : undefined;
    let newSkillExps = updateExpertiseArray(defaultSubrace, newCharacter, 'subrace');

    if (changedRace.subraces) {
      setNewCharacter({
        ...newCharacter,
        race: changedRace.id,
        subrace: changedRace.subraces[0],
        skillProficiencies: newSkillProfs,
        skillExpertises: newSkillExps,
      });
    } else {
      const newState: INewCharacter = {
        ...newCharacter,
        race: changedRace.id,
        skillProficiencies: newSkillProfs,
        skillExpertises: newSkillExps,
      };
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
