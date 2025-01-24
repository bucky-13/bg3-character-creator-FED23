import { useState } from 'react';
import { getCharacters } from '../supabase/supaIndex';
import { INewCharacterSummary } from '../models/INewCharater';
import { CharacterSummary } from '../components/ViewCharacters/CharacterSummary';
import './ViewCharacters.scss';
import { Link } from 'react-router-dom';

export const ViewCharacters = () => {
  const checkForLocalStorage = (): INewCharacterSummary[] | undefined => {
    let local = JSON.parse(localStorage.getItem('characters') || '[]');
    return local.length > 0 ? local : undefined;
  };

  const [chars, setChars] = useState<INewCharacterSummary[] | undefined>(checkForLocalStorage());

  const onGettingCharacters = async () => {
    let chars = await getCharacters();
    setChars(chars);
  };

  return (
    <div className="viewCharactersMainContainer">
      <div className="viewCharactersContainer">
        <h2>Created Characters</h2>
        <button onClick={() => onGettingCharacters()}>Get characters</button>
        {chars &&
          chars.map((char) => (
            <Link to={`/characters/${char.id}`} key={char.id}>
              <CharacterSummary character={char} key={char.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};
