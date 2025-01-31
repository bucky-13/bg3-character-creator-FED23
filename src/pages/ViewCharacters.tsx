import { useState } from 'react';
import { getCharacters } from '../supabase/supaIndex';
import { INewCharacterSummary } from '../models/INewCharater';
import { CharacterSummary } from '../components/ViewCharacters/CharacterSummary';
import './ViewCharacters.scss';
import { Link } from 'react-router-dom';
import { ViewCharactersFilter } from '../components/ViewCharacters/ViewCharactersFilter';

export interface ISearchParams {
  id?: string;
  race?: string;
  startingClass?: string;
  background?: string;
}

export const ViewCharacters = () => {
  const checkForLocalStorage = (): INewCharacterSummary[] | undefined => {
    let local = JSON.parse(localStorage.getItem('characters') || '[]');
    return local.length > 0 ? local : undefined;
  };

  const [chars, setChars] = useState<INewCharacterSummary[] | undefined>(checkForLocalStorage());

  const onGettingCharacters = async (params: ISearchParams | undefined) => {
    let chars;
    chars = await getCharacters(params);
    setChars(chars);
  };

  return (
    <div className="viewCharactersMainContainer">
      <div className="viewCharactersContainer">
        <h2>Find Created Characters</h2>
        <ViewCharactersFilter onGettingCharacters={onGettingCharacters} />
        {chars && (
          <div className="retrievedCharsContainer">
            {chars.length > 0 &&
              chars.map((char) => (
                <Link to={`/characters/${char.id}`} key={char.id}>
                  <CharacterSummary character={char} key={char.id} />
                </Link>
              ))}

            {chars && chars.length <= 0 && (
              <div>
                <p>No characters found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
