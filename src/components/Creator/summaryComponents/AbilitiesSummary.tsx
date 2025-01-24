import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';
import { INewCharacter } from '../../../models/INewCharater';

interface IAbilitiesSummaryProps {
  character: INewCharacter;
}

export const AbilitiesSummary = ({ character }: IAbilitiesSummaryProps) => {
  return (
    <div className="abilitiesSummaryContainer">
      <p>
        <span className="summaryTitle">Abilities: </span>
      </p>
      <div className="charStatsOverview">
        {character.abilities.map((abi) => (
          <div className="charStatContainer" key={abi.id}>
            <p className="charStatName">{abi.shortName}</p> <p>{displayAbilityTotalPoints(abi)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
