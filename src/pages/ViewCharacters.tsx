import { useState } from 'react';
import { getCharacters } from '../supabase/supaIndex';
import { INewCharacter } from '../models/INewCharater';
import { CharacterSummary } from '../components/ViewCharacters/CharacterSummary';
import './ViewCharacters.scss';

export const ViewCharacters = () => {
  const [chars, setChars] = useState<INewCharacter[] | undefined>();

  const onGettingCharacters = async () => {
    let chars = await getCharacters();
    setChars(chars);
  };

  const onCharacterClick = () => {
    console.log('do stuff');
  };

  return (
    <div className="viewCharactersMainContainer">
      <div className="viewCharactersContainer">
        <h2>Created Characters</h2>
        <button onClick={() => onGettingCharacters()}>Get characters</button>
        {chars &&
          chars.map((char) => <CharacterSummary character={char} key={char.id} onClick={() => onCharacterClick()} />)}
      </div>
    </div>
  );
};
