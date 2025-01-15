import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject } from '../../../functions/getDbItems';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Subclass = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubclass, setSelectedSubclass] = useState(getDbObject(newCharacter.startingSubclass!, 'subClasses'));

  const onChangeSubClass = (changedSubClass: ISubClass): void => {
    setSelectedSubclass(changedSubClass);
    setNewCharacter({ ...newCharacter, startingSubclass: changedSubClass.id });
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
                    <div
                      key={subClass.id}
                      className={isActiveIcon(subClass.id, 'startingSubclass', newCharacter)}
                      onClick={() => onChangeSubClass(subClass)}
                    >
                      <img src={subClass.icon} alt={subClass.name} />
                      <p>{subClass.name}</p>
                    </div>
                  ),
              )}
            </div>
          </div>
        )}
        {selectedSubclass && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedSubclass.icon} alt={selectedSubclass.name} />
              <h3>{selectedSubclass.name}</h3>
            </div>
            <p>{selectedSubclass.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
