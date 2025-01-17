import { useState } from 'react';
import { IOrigin } from '../../../models/dbModels/IOrigin';
import { dbOrigins } from '../../../database/dbOrigins';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { INewCharacter } from '../../../models/INewCharater';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';

export const Origin = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedOrigin, setSelectedOrigin] = useState<IOrigin | INewCharacter>(newCharacter);

  const onChangeOrigin = (changedOrigin: IOrigin): void => {
    setSelectedOrigin(changedOrigin);
    if (changedOrigin.origin === 'ori01') {
      setNewCharacter({ ...changedOrigin, name: 'Tav' });
    } else {
      setNewCharacter(changedOrigin);
    }
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Origin</h2>
      <div className="choicesAndSelectedContainer">
        <div className="choicesContainer">
          {dbOrigins.map((origin) => (
            <button
              key={origin.origin}
              className={isActiveIcon(origin.origin, 'origin', newCharacter)}
              onClick={() => onChangeOrigin(origin)}
              onMouseEnter={() => setSelectedOrigin(origin)}
            >
              <img src={origin.icon} alt={origin.name} />
              <h4>{origin.name}</h4>
            </button>
          ))}
        </div>
        <div className="selectedChoiceContainer">
          <img className="originIcon" src={selectedOrigin.icon} alt={selectedOrigin.name} />
          <h4>{selectedOrigin.name}</h4>
          <p>{selectedOrigin.desc}</p>
        </div>
      </div>
    </div>
  );
};
