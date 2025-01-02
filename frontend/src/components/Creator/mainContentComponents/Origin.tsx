import { useState } from 'react';
import './Origin.scss';
import { IOrigin } from '../../../models/dbModels/IOrigin';
import { dbOrigins } from '../../../database/dbOrigins';

export const Origin = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<IOrigin>(dbOrigins[0]);

  const isActiveIcon = (icon: string): string => {
    console.log(icon);
    console.log(icon === selectedOrigin.name);
    return icon === selectedOrigin.name ? 'originPortraitContainer activeOrigin' : 'originPortraitContainer';
  };

  return (
    <div className="centerContainer originsContainer">
      <div className="originOptionsContainer">
        {dbOrigins.map((origin) => (
          <div key={origin.id} className={isActiveIcon(origin.name)} onClick={() => setSelectedOrigin(origin)}>
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
