import { useState } from 'react';
import './Origin.scss';
import { IOrigin } from '../../../models/dbModels/IOrigin';
import { dbOrigins, EOrigin } from '../../../database/dbOrigins';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';

export const Origin = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<IOrigin>(dbOrigins[0]);
  const { newCharacter, setNewCharacter } = useNewCharContext();

  console.log(newCharacter);

  const isActiveIcon = (icon: EOrigin): string => {
    return icon === newCharacter.origin ? 'originPortraitContainer activeOrigin' : 'originPortraitContainer';
  };

  const onChangeOrigin = (changedOrigin: IOrigin): void => {
    console.log(changedOrigin.origin);
    console.log(newCharacter.origin);
    setSelectedOrigin(changedOrigin);
    setNewCharacter(changedOrigin);
  };

  console.log(newCharacter);

  return (
    <div className="centerContainer originsContainer">
      <div className="originOptionsContainer">
        {dbOrigins.map((origin) => (
          <div key={origin.origin} className={isActiveIcon(origin.origin)} onClick={() => onChangeOrigin(origin)}>
            <img src={origin.icon} />
            <h4>{origin.name}</h4>
          </div>
        ))}
      </div>
      <div>
        <img className="originIcon" src={selectedOrigin.icon} />
        <h4>{selectedOrigin.name}</h4>
        <p>{selectedOrigin.desc}</p>
      </div>
    </div>
  );
};
