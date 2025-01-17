import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';

export const AbilitiesSummary = () => {
  const { newCharacter } = useNewCharContext();
  return (
    <div className="abilitiesSummaryContainer">
      <p>
        <span className="summaryTitle">Abilities: </span>
      </p>
      <div className="charStatsOverview">
        {newCharacter.abilities.map((abi) => (
          <div className="charStatContainer" key={abi.id}>
            <p className="charStatName">{abi.shortName}</p> <p>{displayAbilityTotalPoints(abi)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
