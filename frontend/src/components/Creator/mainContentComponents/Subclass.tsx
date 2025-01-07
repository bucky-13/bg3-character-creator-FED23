import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';

export const Subclass = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubclass, setSelectedSubclass] = useState(getDbObject(newCharacter.startingSubclass!, 'subClasses'));

  const isActiveIcon = (icon: string): string => {
    return icon === newCharacter.startingSubclass ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

  const onChangeSubClass = (changedSubClass: ISubClass): void => {
    setSelectedSubclass(changedSubClass);
    setNewCharacter({ ...newCharacter, startingSubclass: changedSubClass.id });
  };

  return (
    <div>
      <h2>Subclass</h2>

      <div className="centerContainer originsContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="originOptionsContainer">
              {subClasses.map(
                (subClass) =>
                  subClass.mainClass === newCharacter.startingClass && (
                    <div
                      key={subClass.id}
                      className={isActiveIcon(subClass.id)}
                      onClick={() => onChangeSubClass(subClass)}
                    >
                      <img src={subClass.icon} />
                      <p>{subClass.name}</p>
                    </div>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubclass && (
          <div className="chosenRace">
            <h3>{selectedSubclass.name}</h3>
            <p>{selectedSubclass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
