import { useState } from 'react';
import { getCharacters } from '../supabase/supaIndex';
import { INewCharacter } from '../models/INewCharater';
import { AbilitiesSummary } from '../components/Creator/summaryComponents/AbilitiesSummary';

export const ViewCharacters = () => {
  const [chars, setChars] = useState<INewCharacter[] | undefined>();

  const onGettingCharacters = async () => {
    let chars = await getCharacters();
    setChars(chars);
  };

  return (
    <div>
      <h2>Created Characters</h2>
      <button onClick={() => onGettingCharacters()}>Get characters</button>
      {chars &&
        chars.map((char) => (
          <div key={char.id}>
            <h3>{char.name}</h3>
            <AbilitiesSummary newCharacter={char} />
          </div>
        ))}
    </div>
  );
};
