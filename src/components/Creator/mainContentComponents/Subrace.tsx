import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { subraces } from '../../../database/dbSubraces';
import { getDbOrigin, getDbSubrace } from '../../../functions/getDbItems';
import { ISubrace } from '../../../models/dbModels/ISubrace';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { updateSkillsArray } from '../../../functions/skillFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SectionContainer } from './creatorMinorComponents/SectionContainer';

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

  return (
    <SectionContainer title="Subrace">
      {!newCharacter.hasLockedChoices && (
        <div className="choicesContainer">
          {subraces.map(
            (subrace, i) =>
              subrace.mainRace === newCharacter.race && (
                <DisplaySelectionButton
                  selection={subrace}
                  onChange={onChangeSubrace}
                  key={i}
                  typeOfSelection="subrace"
                />
              ),
          )}
        </div>
      )}
      {selectedSubrace && (
        <SelectedChoiceContainer selectedChoice={selectedSubrace} features={selectedSubrace.features} />
      )}
    </SectionContainer>
  );
};
