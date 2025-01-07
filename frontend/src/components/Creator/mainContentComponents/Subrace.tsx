import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { ESubraces, subraces } from '../../../database/dbSubraces';
import { getSubraceObject, getSubracesArray, test3 } from '../../../functions/getDbItems';

export const Subrace = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  //   const subracesArray = getSubracesArray(newCharacter.race);

  const [selectedSubrace, setSelectedSubrace] = useState(getSubraceObject(newCharacter.subrace!));

  return (
    <div>
      {!newCharacter.hasLockedChoices && (
        <div>
          <h2>Subraces</h2>
          <div>
            {subraces.map(
              (subrace) => subrace.mainRace === newCharacter.race && <div key={subrace.id}>{subrace.name}</div>,
            )}
          </div>
        </div>
      )}
    </div>
  );
};
