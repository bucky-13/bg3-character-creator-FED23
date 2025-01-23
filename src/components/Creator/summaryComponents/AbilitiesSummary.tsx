import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';
import { INewCharacter } from '../../../models/INewCharater';

interface IAbilitiesSummaryProps {
  newCharacter: INewCharacter;
}

export const AbilitiesSummary = ({ newCharacter }: IAbilitiesSummaryProps) => {
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
