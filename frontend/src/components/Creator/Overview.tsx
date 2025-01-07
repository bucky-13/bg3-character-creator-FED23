import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { ECharClasses } from '../../database/dbCharClasses';
import { getCharClassObject, getRaceObject } from '../../functions/getDbItems';
import './Overview.scss';

export const Overview = () => {
  const { newCharacter } = useNewCharContext();

  const getKeyValueFromCharacterClass = (id: ECharClasses, key: string) => {
    const object = getCharClassObject(id);
    return object !== undefined ? object[key as keyof object] : 'error';
  };
  const getKeyValueFromCharacterRace = (id: string, key: string) => {
    const object = getRaceObject(id);
    return object !== undefined ? object[key as keyof object] : 'error';
  };

  return (
    <div className="creatorOverview">
      <h2>{newCharacter.name}</h2>
      <img src={newCharacter.icon} />
      <p>{getKeyValueFromCharacterClass(newCharacter.startingClass, 'name')} </p>
      <p>{getKeyValueFromCharacterRace(newCharacter.race, 'name')}</p>
    </div>
  );
};
