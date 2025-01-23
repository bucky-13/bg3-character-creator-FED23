import { useState } from 'react';
import { Tables } from '../../database.types';
import { getCharacters } from '../supabase/supaIndex';

export type TCharacters = Tables<'characters'>;

export const ViewCharacters = () => {
  const [chars, setChars] = useState<TCharacters[] | undefined>();

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
          </div>
        ))}
    </div>
  );
};
