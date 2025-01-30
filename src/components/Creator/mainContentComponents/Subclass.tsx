import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';
import { getDbSubClass } from '../../../functions/getDbItems';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { SelectedChoiceHeader } from './creatorMinorComponents/SelectedChoiceHeader';

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
    <div className="creatorCenterContainer">
      <h2>Subclass</h2>

      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
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
          </div>
        )}
        {selectedSubclass && (
          <div className="selectedChoiceContainer">
            <SelectedChoiceHeader selectedChoice={selectedSubclass} />
            <p>{selectedSubclass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
