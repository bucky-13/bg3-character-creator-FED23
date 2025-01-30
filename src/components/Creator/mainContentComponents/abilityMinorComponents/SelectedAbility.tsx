import { getAbiValue } from '../../../../functions/abilityFunctions';
import { IAbility } from '../../../../models/dbModels/IAbilitiy';

interface ISelectedAbilityProps {
  selectedAbility: IAbility;
}

export const SelectedAbility = ({ selectedAbility }: ISelectedAbilityProps) => {
  return (
    <div className="abilityInfoContainer">
      <div className="flexRowCentered">
        <img
          src={selectedAbility.icon}
          className="abilitiesIcon"
          alt={'icon of ' + getAbiValue(selectedAbility.id, 'name')}
        />
        <h3>{selectedAbility.name}</h3>
      </div>
      <p>{selectedAbility.desc}</p>
    </div>
  );
};
