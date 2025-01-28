import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbClass, getDbEquipment, getDbSubClass } from '../../../functions/getDbItems';
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

  const onSetSelectedClass = (charClass: ICharClass) => {
    setSelectedClass(charClass);
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
                  setActiveSelection={onSetSelectedClass}
                  typeOfSelection="startingClass"
                  key={i}
                />
              ))}
            </div>
          </div>
        )}
        {selectedClass && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedClass.icon} alt={'icon for a ' + selectedClass.name} />
              <h3>{selectedClass.name}</h3>
            </div>
            <p>{selectedClass.desc}</p>

            <h4 className="featureH">Features:</h4>
            <div className="featureContainer">
              <p>
                <span>Weapon Proficiencies: </span>
                {selectedClass.weaponProficiencies.length > 0
                  ? selectedClass.weaponProficiencies.map((o, i) => (
                      <span className="whiteSpan" key={o}>
                        {getDbEquipment(o).name}
                        {i + 1 !== selectedClass.weaponProficiencies.length && ', '}
                      </span>
                    ))
                  : 'None'}
              </p>
            </div>
            <div className="featureContainer">
              <p>
                <span>Armor Proficiencies: </span>
                {selectedClass.armorProficiencies.length > 0
                  ? selectedClass.armorProficiencies.map((o, i) => (
                      <span className="whiteSpan" key={o}>
                        {getDbEquipment(o).name}
                        {i + 1 !== selectedClass.armorProficiencies.length && ', '}
                      </span>
                    ))
                  : 'None'}
              </p>
            </div>
            <div className="featureContainer">
              <p>
                <span>Subclass at level: </span>
                {selectedClass.subclassAtLevel}
              </p>
            </div>
            {selectedClass.features.map((feature) => (
              <div key={feature.name} className="featureContainer">
                {feature.icon && <img src={feature.icon} alt={selectedClass.name} />}
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
