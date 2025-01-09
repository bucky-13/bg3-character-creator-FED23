import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter, ISkillProfNewChar } from '../../../models/INewCharater';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbObject(newCharacter.race, 'races'));

  const changeRaceSkills = (changedRace: IRace) => {
    let skills = newCharacter.skillProficiencies;
    skills = skills.filter((o) => o.fromSource !== 'race');
    if (changedRace.skillProficiencies) {
      for (let i = 0; i < changedRace.skillProficiencies.length; i++) {
        let skill: ISkillProfNewChar = {
          id: changedRace.skillProficiencies[i],
          fromSource: 'race',
          canChange: false,
        };
        skills.push(skill);
      }
    }
    return skills;
  };

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    const newSkillProfs = changeRaceSkills(changedRace);
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
