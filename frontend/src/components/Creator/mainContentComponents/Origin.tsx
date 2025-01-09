import { useState } from 'react';
import { IOrigin } from '../../../models/dbModels/IOrigin';
import { dbOrigins } from '../../../database/dbOrigins';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { INewCharacter, ISkillProfNewChar } from '../../../models/INewCharater';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Origin = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedOrigin, setSelectedOrigin] = useState<IOrigin | INewCharacter>(newCharacter);

  const onChangeOrigin = (changedOrigin: IOrigin): void => {
    setSelectedOrigin(changedOrigin);
    setNewCharacter(changedOrigin);
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Origin</h2>
      <div className="choicesAndSelectedContainer">
        <div className="choicesContainer">
          {dbOrigins.map((origin) => (
            <div
              key={origin.origin}
              className={isActiveIcon(origin.origin, 'origin', newCharacter)}
              onClick={() => onChangeOrigin(origin)}
            >
              <img src={origin.icon} />
              <h4>{origin.name}</h4>
            </div>
          ))}
        </div>
        <div className="selectedChoiceContainer">
          <img className="originIcon" src={selectedOrigin.icon} />
          <h4>{selectedOrigin.name}</h4>
          <p>{selectedOrigin.desc}</p>
        </div>
      </div>
    </div>
  );
};
