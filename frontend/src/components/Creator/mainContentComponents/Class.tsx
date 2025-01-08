import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { charClasses } from '../../../database/dbCharClasses';
import { ICharClass } from '../../../models/dbModels/ICharClass';

export const Class = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedClass, setSelectedClass] = useState(getDbObject(newCharacter.startingClass, 'charClasses'));

  const isActiveIcon = (icon: string): string => {
    return icon === newCharacter.startingClass ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

  console.log(newCharacter);
  console.log(selectedClass);

  const onChangeClass = (changedClass: ICharClass): void => {
    setSelectedClass(changedClass);
    if (changedClass.subclassAtLevel === 1) {
      setNewCharacter({
        ...newCharacter,
        startingClass: changedClass.id,
        startingSubclass: changedClass.subclasses[0],
      });
    } else {
      const newState = { ...newCharacter, startingClass: changedClass.id };
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
                <div key={cClass.id} className={isActiveIcon(cClass.id)} onClick={() => onChangeClass(cClass)}>
                  <img src={cClass.icon} />
                  <p>{cClass.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedClass && (
          <div className="selectedChoiceContainer">
            <h3>{selectedClass.name}</h3>
            <p>{selectedClass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
