import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbClass } from '../../../functions/getDbItems';
import { charClasses } from '../../../database/dbCharClasses';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { isActiveIcon, resetSkillArrays } from '../../../functions/creatorMinorFunctions';
import { ESpellArray } from './Spells';
import { ISpellChociesNewChar } from '../../../models/INewCharater';

export const Class = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedClass, setSelectedClass] = useState(getDbClass(newCharacter.startingClass));

  const filterSpells = (spellLevel: ESpellArray): ISpellChociesNewChar[] => {
    if (newCharacter[spellLevel]) {
      const newArray = newCharacter[spellLevel].filter((o) => o.fromSource !== spellLevel);
      return newArray;
    } else {
      return [];
    }
  };

  const onChangeClass = (changedClass: ICharClass): void => {
    setSelectedClass(changedClass);
    let updatedNewCharacter = newCharacter;
    if (changedClass.subclassAtLevel === 1) {
      updatedNewCharacter = { ...updatedNewCharacter, startingSubclass: changedClass.subclasses[0] };
    } else {
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
          </div>
        )}
      </div>
    </div>
  );
};
