import React, { useState } from 'react';
import './Name.scss';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { regexNameCheckPassed } from '../../../functions/creatorMinorFunctions';

import { PortraitSelection } from './PortraitSelection';

export const Name = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [displayWarning, setDisplayWarning] = useState(false);

  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexPassed = regexNameCheckPassed(e.target.value);
    if (regexPassed) {
      setNewCharacter({ ...newCharacter, name: e.target.value });
      setDisplayWarning(false);
    } else {
      setNewCharacter({ ...newCharacter, name: e.target.value });
      setDisplayWarning(true);
    }
  };

  return (
    <div className="creatorCenterContainer nameContainer">
      <h2>Choose Character Name and Portrait</h2>

      <label htmlFor="characterName" className="charNameLabel">
        Enter Character Name
        <input
          type="text"
          name="characterName"
          id="characterName"
          className={displayWarning ? 'inputAlert' : ''}
          value={newCharacter.name}
          onChange={(e) => checkName(e)}
          maxLength={20}
        />
      </label>

      {displayWarning && (
        <p className="alertText">
          Allowed characters are A-Z, a-z, international letters like üÅÄÖ, '. 0-9 and blankspaces
        </p>
      )}
      <PortraitSelection />
    </div>
  );
};
