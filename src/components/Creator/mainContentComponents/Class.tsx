import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbClass, getDbSubClass } from '../../../functions/getDbItems';
import { charClasses } from '../../../database/dbCharClasses';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { ESpellArray } from './Spells';
import { removeEquipmentFromOldClass, updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { dbFightingStyles } from '../../../database/dbFightingStyles';
import { dbFavouredEnemy } from '../../../database/dbFavouredEnemy';
import { removeSkillsFromOldSouce, updateSkillsArray } from '../../../functions/skillFunctions';
import { removeClassSpells } from '../../../functions/spellFunctions';
import { dbNaturalExplorer } from '../../../models/dbModels/dbNaturalExplorer';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { resetSkillArrays } from '../../../functions/creatorMinorFunctions';
import { ClassEquipmentFeature } from './creatorMinorComponents/ClassEquipmentFeature';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SelectedManualFeature } from './creatorMinorComponents/SelectedManualFeature';

export const Class = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedClass, setSelectedClass] = useState(getDbClass(newCharacter.startingClass));

  const onChangeClass = (changedClass: ICharClass): void => {
    setSelectedClass(changedClass);
    let newArmorProfs = updateEquipmentArray(newCharacter.armorProficiencies, 'class', changedClass.armorProficiencies);
    let newWeaponProfs = updateEquipmentArray(
      newCharacter.weaponProficiencies,
      'class',
      changedClass.weaponProficiencies,
    );
    let updatedNewCharacter = newCharacter;
    if (changedClass.id === 'ccl05') {
      updatedNewCharacter = { ...updatedNewCharacter, fightingStyles: [dbFightingStyles[0]] };
    } else {
      delete updatedNewCharacter.fightingStyles;
    }
    if (changedClass.id === 'ccl08') {
      updatedNewCharacter = {
        ...updatedNewCharacter,
        favouredEnemy: [dbFavouredEnemy[0]],
        naturalExplorer: [dbNaturalExplorer[3]],
        skillProficiencies: updateSkillsArray(newCharacter.skillProficiencies, 'class', [
          dbFavouredEnemy[0].skillProficiencies,
        ]),
      };
    } else {
      updatedNewCharacter = {
        ...updatedNewCharacter,
        skillProficiencies: removeSkillsFromOldSouce(newCharacter.skillProficiencies, 'class'),
      };
      delete updatedNewCharacter.favouredEnemy;
      delete updatedNewCharacter.naturalExplorer;
    }
    if (changedClass.subclassAtLevel === 1) {
      const changedSubclass = getDbSubClass(changedClass.subclasses[0]);
      newArmorProfs = updateEquipmentArray(newArmorProfs, 'subclass', changedSubclass.armorProficiencies);
      newWeaponProfs = updateEquipmentArray(newWeaponProfs, 'subclass', changedSubclass.weaponProficiencies);
      updatedNewCharacter = { ...updatedNewCharacter, startingSubclass: changedClass.subclasses[0] };
    } else {
      newArmorProfs = removeEquipmentFromOldClass(newArmorProfs, 'subclass');
      newWeaponProfs = removeEquipmentFromOldClass(newWeaponProfs, 'subclass');
      delete updatedNewCharacter.startingSubclass;
    }

    setNewCharacter({
      ...updatedNewCharacter,
      startingClass: changedClass.id,
      casterLevel: changedClass.casterLevelPerLevel,
      cantrips: removeClassSpells(ESpellArray.Lvl0, newCharacter),
      lvl1Spells: removeClassSpells(ESpellArray.Lvl1, newCharacter),
      skillProficiencies: resetSkillArrays(updatedNewCharacter.skillProficiencies),
      skillExpertises: resetSkillArrays(updatedNewCharacter.skillExpertises),
      armorProficiencies: newArmorProfs,
      weaponProficiencies: newWeaponProfs,
    });
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Starting Class</h2>
      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {charClasses.map((cClass, i) => (
                <DisplaySelectionButton
                  selection={cClass}
                  onChange={onChangeClass}
                  typeOfSelection="startingClass"
                  key={i}
                />
              ))}
            </div>
          </div>
        )}
        {selectedClass && (
          <SelectedChoiceContainer selectedChoice={selectedClass} features={selectedClass.features}>
            <SelectedManualFeature title="Subclass at level" desc={selectedClass.subclassAtLevel} />
            <ClassEquipmentFeature selectedClass={selectedClass} equipmentType="Weapon" />
            <ClassEquipmentFeature selectedClass={selectedClass} equipmentType="Armor" />
          </SelectedChoiceContainer>
        )}
      </div>
    </div>
  );
};
