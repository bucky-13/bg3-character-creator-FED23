import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbClass } from '../../../functions/getDbItems';
import { charClasses } from '../../../database/dbCharClasses';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { ESpellArray } from './Spells';
import { ISkillProfNewChar } from '../../../models/INewCharater';

export const Class = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedClass, setSelectedClass] = useState(getDbClass(newCharacter.startingClass));

  const filterSpells = (spellLevel: ESpellArray): ISkillProfNewChar[] => {
    if (newCharacter[spellLevel]) {
      const newArray = newCharacter[spellLevel].filter((o) => o.fromSource !== spellLevel);
      return newArray;
    } else {
      return [];
    }
  };

  const onChangeClass = (changedClass: ICharClass): void => {
    setSelectedClass(changedClass);
    if (changedClass.subclassAtLevel === 1) {
      setNewCharacter({
        ...newCharacter,
        startingClass: changedClass.id,
        startingSubclass: changedClass.subclasses[0],
        casterLevel: changedClass.casterLevelPerLevel,
        cantrips: filterSpells(ESpellArray.Lvl0),
        lvl1Spells: filterSpells(ESpellArray.Lvl1),
      });
    } else {
      const newState = {
        ...newCharacter,
        startingClass: changedClass.id,
        casterLevel: changedClass.casterLevelPerLevel,
        cantrips: filterSpells(ESpellArray.Lvl0),
        lvl1Spells: filterSpells(ESpellArray.Lvl1),
      };
      delete newState.startingSubclass;
      setNewCharacter(newState);
    }
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Starting Class</h2>
      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {charClasses.map((cClass) => (
                <div
                  key={cClass.id}
                  className={isActiveIcon(cClass.id, 'startingClass', newCharacter)}
                  onClick={() => onChangeClass(cClass)}
                >
                  <img src={cClass.icon} />
                  <p>{cClass.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedClass && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedClass.icon} />
              <h3>{selectedClass.name}</h3>
            </div>
            <p>{selectedClass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
