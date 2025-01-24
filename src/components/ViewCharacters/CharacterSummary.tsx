import { getDbBackground, getDbClass, getDbRace, getDbSubrace } from '../../functions/getDbItems';
import { INewCharacter } from '../../models/INewCharater';
import './Character.Summary.scss';

interface ICharacterSummaryProps {
  character: INewCharacter;
}

export const CharacterSummary = ({ character }: ICharacterSummaryProps) => {
  return (
    <button key={character.id} className="characterSummaryContainer">
      <img src={character.icon} alt={'Portrait of ' + character.name} />
      <h3>{character.name}</h3>
      <p>Level {character.characterLevel}</p>
      {character.subrace ? <p>{getDbSubrace(character.subrace).name}</p> : <p>{getDbRace(character.race).name}</p>}
      <p>{getDbClass(character.startingClass).name}</p>
      <p>Background: {getDbBackground(character.background).name}</p>
    </button>
  );
};
