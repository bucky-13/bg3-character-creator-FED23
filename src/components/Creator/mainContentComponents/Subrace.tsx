import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { subraces } from '../../../database/dbSubraces';
import { getDbSubrace } from '../../../functions/getDbItems';
import { ISubrace } from '../../../models/dbModels/ISubrace';
import { changeSkillsProfs, isActiveIcon, updateExpertiseArray } from '../../../functions/creatorMinorFunctions';

export const Subrace = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubrace, setSelectedSubrace] = useState(getDbSubrace(newCharacter.subrace!));

  const onChangeSubrace = (changedSubrace: ISubrace): void => {
    const newSkillProfs = changeSkillsProfs(newCharacter, 'subrace', changedSubrace);
    setSelectedSubrace(changedSubrace);
    const skillExpertises = updateExpertiseArray(changedSubrace, newCharacter, 'subrace');

    setNewCharacter({
      ...newCharacter,
      subrace: changedSubrace.id,
      skillProficiencies: newSkillProfs,
      skillExpertises: skillExpertises,
    });
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
                    <button
                      key={subrace.id}
                      className={isActiveIcon(subrace.id, 'subrace', newCharacter)}
                      onClick={() => onChangeSubrace(subrace)}
                      onMouseEnter={() => setSelectedSubrace(subrace)}
                    >
                      <img src={subrace.icon} alt={subrace.name} />
                      <p>{subrace.name}</p>
                    </button>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubrace && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedSubrace.icon} />
              <h3>{selectedSubrace.name}</h3>
            </div>
            <p>{selectedSubrace.desc}</p>
            <h4 className="featureH">Features:</h4>
            {selectedSubrace.features.map((feature) => (
              <div key={feature.name} className="featureContainer">
                {feature.icon && <img src={feature.icon} alt={feature.name} />}
                <p>
                  <span>{feature.name}: </span>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
