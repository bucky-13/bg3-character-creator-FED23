import React, { useState } from 'react';
import './Name.scss';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { regexNameCheckPassed } from '../../../functions/creatorMinorFunctions';

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
      <h2>Enter Character Name</h2>

      <input
        type="text"
        className={displayWarning ? 'inputAlert' : ''}
        value={newCharacter.name}
        onChange={(e) => checkName(e)}
      />

      {displayWarning && (
        <p className="alertText">
          Allowed characters are A-Z, a-z, international letters like üÅÄÖ, '. 0-9 and blankspaces
        </p>
      )}
    </div>
  );
};
