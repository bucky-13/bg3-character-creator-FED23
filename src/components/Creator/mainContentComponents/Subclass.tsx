import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import { subClasses } from '../../../database/dbSubClass';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { getDbSubClass } from '../../../functions/getDbItems';

export const Subclass = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSubclass, setSelectedSubclass] = useState(getDbSubClass(newCharacter.startingSubclass!));

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
                    <button
                      key={subClass.id}
                      className={isActiveIcon(subClass.id, 'startingSubclass', newCharacter)}
                      onClick={() => onChangeSubClass(subClass)}
                      onMouseEnter={() => setSelectedSubclass(subClass)}
                    >
                      <img src={subClass.icon} alt={subClass.name} />
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
