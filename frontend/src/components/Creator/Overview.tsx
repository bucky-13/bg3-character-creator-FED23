import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { getDbObject } from '../../functions/getDbItems';
import { INewAbility } from '../../models/INewCharater';
import './Overview.scss';

export const Overview = () => {
  const { newCharacter } = useNewCharContext();

  const getNameFromDb = (id: string, key: string) => {
    const object = getDbObject(id, key);
    return object !== undefined ? object.name : 'error';
  };

  const calculateValue = (ability: INewAbility): number => {
    let value = ability.baseValue;
    if (ability.plusOneBonus) value = value + 1;
    if (ability.plusTwoBonus) value = value + 2;
    return value;
  };

  return (
    <div className="creatorOverview">
      <h2>{newCharacter.name}</h2>
      <img src={newCharacter.icon} />
      <div className="charStatsOverview">
        {newCharacter.abilities.map((abi) => (
          <div className="charStatContainer" key={abi.id}>
            <p className="charStatName">{abi.shortName}</p> <p>{calculateValue(abi)}</p>
          </div>
        ))}
      </div>
      <p>
        {newCharacter.startingSubclass && <span>{getNameFromDb(newCharacter.startingSubclass, 'subClasses')} </span>}
        {getNameFromDb(newCharacter.startingClass, 'charClasses')}{' '}
      </p>
      {newCharacter.subrace ? (
        <p>{getNameFromDb(newCharacter.subrace, 'subraces')}</p>
      ) : (
        <p>{getNameFromDb(newCharacter.race, 'races')}</p>
      )}
      <p>{getNameFromDb(newCharacter.background, 'charBgs')}</p>
    </div>
  );
};
