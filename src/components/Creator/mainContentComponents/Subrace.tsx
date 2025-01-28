import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { subraces } from '../../../database/dbSubraces';
import { getDbOrigin, getDbSubrace } from '../../../functions/getDbItems';
import { ISubrace } from '../../../models/dbModels/ISubrace';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { updateSkillsArray } from '../../../functions/skillFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';

export const Subrace = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubrace, setSelectedSubrace] = useState(getDbSubrace(newCharacter.subrace!));

  const onChangeSubrace = (changedSubrace: ISubrace): void => {
    const newSkillProfs = updateSkillsArray(
      newCharacter.skillProficiencies,
      'subrace',
      changedSubrace.skillProficiencies,
    );
    setSelectedSubrace(changedSubrace);
    const skillExpertises = updateSkillsArray(newCharacter.skillExpertises, 'subrace', changedSubrace.skillExpertises);

    const newArmorProfs = updateEquipmentArray(
      newCharacter.armorProficiencies,
      'subrace',
      changedSubrace.armorProficiencies,
    );

    setNewCharacter({
      ...newCharacter,
      subrace: changedSubrace.id,
      icon: getDbOrigin(newCharacter.origin).icon,
      skillProficiencies: newSkillProfs,
      skillExpertises: skillExpertises,
      armorProficiencies: newArmorProfs,
    });
  };

  const onSetSelectedSubrace = (subrace: ISubrace) => {
    setSelectedSubrace(subrace);
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Subrace</h2>

      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {subraces.map(
                (subrace, i) =>
                  subrace.mainRace === newCharacter.race && (
                    <DisplaySelectionButton
                      selection={subrace}
                      onChange={onChangeSubrace}
                      setActiveSelection={onSetSelectedSubrace}
                      key={i}
                      typeOfSelection="subrace"
                    />
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubrace && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedSubrace.icon} alt={'portrait of a ' + selectedSubrace.name} />
              <h3>{selectedSubrace.name}</h3>
            </div>
            <p>{selectedSubrace.desc}</p>
            <h4 className="featureH">Features:</h4>
            {selectedSubrace.features.map((feature) => (
              <div key={feature.name} className="featureContainer">
                {feature.icon && <img src={feature.icon} alt={'icon of ' + feature.name} />}
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
