import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { getDbSubClass } from '../../../functions/getDbItems';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';

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
                (subClass) =>
                  subClass.mainClass === newCharacter.startingClass && (
                    <button
                      key={subClass.id}
                      className={isActiveIcon(subClass.id, 'startingSubclass', newCharacter)}
                      onClick={() => onChangeSubClass(subClass)}
                      onMouseEnter={() => setSelectedSubclass(subClass)}
                    >
                      <img src={subClass.icon} alt={'icon for a ' + subClass.name} height={100} width={100} />
                      <p>{subClass.name}</p>
                    </button>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubclass && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedSubclass.icon} alt={'icon for a ' + selectedSubclass.name} />
              <h3>{selectedSubclass.name}</h3>
            </div>
            <p>{selectedSubclass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
