import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { displayAbilityTotalPoints } from '../../functions/creatorMinorFunctions';
import { getDbBackground, getDbClass, getDbRace, getDbSubClass, getDbSubrace } from '../../functions/getDbItems';
import './Overview.scss';

export const Overview = () => {
  const { newCharacter } = useNewCharContext();

  return (
    <div className="creatorOverview">
      <h2>{newCharacter.name}</h2>
      <img src={newCharacter.icon} alt="Portrait of characters origin" />
      <div className="charStatsOverview">
        {newCharacter.abilities.map((abi) => (
          <div className="charStatContainer" key={abi.id}>
            <p className="charStatName">{abi.shortName}</p> <p>{displayAbilityTotalPoints(abi)}</p>
          </div>
        ))}
      </div>
      <p>
        {newCharacter.startingSubclass && <span>{getDbSubClass(newCharacter.startingSubclass).name} </span>}
        {getDbClass(newCharacter.startingClass).name}
      </p>
      {newCharacter.subrace ? (
        <p>{getDbSubrace(newCharacter.subrace).name}</p>
      ) : (
        <p>{getDbRace(newCharacter.race).name}</p>
      )}
      <p>{getDbBackground(newCharacter.background).name}</p>
    </div>
  );
};
