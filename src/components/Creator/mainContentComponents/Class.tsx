import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbClass, getDbEquipment, getDbSubClass } from '../../../functions/getDbItems';
import { charClasses } from '../../../database/dbCharClasses';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { isActiveIcon, resetSkillArrays } from '../../../functions/creatorMinorFunctions';
import { ESpellArray } from './Spells';
import { ISpellChociesNewChar } from '../../../models/INewCharater';
import { removeEquipmentFromOldClass, updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { dbFightingStyles } from '../../../database/dbFightingStyles';

export const Class = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedClass, setSelectedClass] = useState(getDbClass(newCharacter.startingClass));

  const filterSpells = (spellLevel: ESpellArray): ISpellChociesNewChar[] => {
    if (newCharacter[spellLevel]) {
      const newArray = newCharacter[spellLevel].filter((o) => o.fromSource !== newCharacter.startingClass);
      return newArray;
    } else {
      return [];
    }
  };

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
      console.log('DELETE');
      delete updatedNewCharacter.fightingStyles;
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
      cantrips: filterSpells(ESpellArray.Lvl0),
      lvl1Spells: filterSpells(ESpellArray.Lvl1),
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
              {charClasses.map((cClass) => (
                <button
                  key={cClass.id}
                  className={isActiveIcon(cClass.id, 'startingClass', newCharacter)}
                  onClick={() => onChangeClass(cClass)}
                  onMouseEnter={() => setSelectedClass(cClass)}
                >
                  <img src={cClass.icon} alt={cClass.name} />
                  <p>{cClass.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        {selectedClass && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedClass.icon} alt={selectedClass.name} />
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
