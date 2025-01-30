import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';
import { getDbSubClass } from '../../../functions/getDbItems';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SectionContainer } from './creatorMinorComponents/SectionContainer';

export const Subclass = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubclass, setSelectedSubclass] = useState(getDbSubClass(newCharacter.startingSubclass!));

  const onChangeSubClass = (changedSubClass: ISubClass): void => {
    const newArmorProfs = updateEquipmentArray(
      newCharacter.armorProficiencies,
      'subclass',
      changedSubClass.armorProficiencies,
    );
    const newWeaponProfs = updateEquipmentArray(
      newCharacter.weaponProficiencies,
      'subclass',
      changedSubClass.weaponProficiencies,
    );

    setSelectedSubclass(changedSubClass);
    setNewCharacter({
      ...newCharacter,
      startingSubclass: changedSubClass.id,
      armorProficiencies: newArmorProfs,
      weaponProficiencies: newWeaponProfs,
    });
  };

  return (
    <SectionContainer title="Subclass">
      {!newCharacter.hasLockedChoices && (
        <div className="choicesContainer">
          {subClasses.map(
            (subClass, i) =>
              subClass.mainClass === newCharacter.startingClass && (
                <DisplaySelectionButton
                  selection={subClass}
                  onChange={onChangeSubClass}
                  key={i}
                  typeOfSelection="startingSubclass"
                />
              ),
          )}
        </div>
      )}
      {selectedSubclass && <SelectedChoiceContainer selectedChoice={selectedSubclass} />}
    </SectionContainer>
  );
};
