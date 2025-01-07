import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { getDbObject } from '../../functions/getDbItems';
import './Overview.scss';

export const Overview = () => {
  const { newCharacter } = useNewCharContext();

  const getNameFromDb = (id: string, key: string) => {
    const object = getDbObject(id, key);
    return object !== undefined ? object.name : 'error';
  };

  return (
    <div className="creatorOverview">
      <h2>{newCharacter.name}</h2>
      <img src={newCharacter.icon} />
      <p>{getNameFromDb(newCharacter.startingClass, 'charClass')} </p>
      {newCharacter.subrace ? (
        <p>{getNameFromDb(newCharacter.subrace, 'subraces')}</p>
      ) : (
        <p>{getNameFromDb(newCharacter.race, 'races')}</p>
      )}
    </div>
  );
};
