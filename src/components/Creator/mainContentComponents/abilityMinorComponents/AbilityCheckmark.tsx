import { INewAbility } from '../../../../models/INewCharater';

interface IAbilityCheckmarkProps {
  ability: INewAbility;
  updateNewCharBonus: (key: string, addIndex: number) => void;
  objectKey: keyof INewAbility;
  index: number;
}

export const AbilityCheckmark = ({ ability, updateNewCharBonus, objectKey, index }: IAbilityCheckmarkProps) => {
  return (
    <button
      className={ability[objectKey] ? 'checkmarkIcon checked' : 'checkmarkIcon'}
      onClick={() => updateNewCharBonus(ability.id, index)}
      aria-label={`Assign +${index} bonus to` + ability.shortName}
    >
      {ability[objectKey] && <img src="./icons/check-mark-icon.png" />}
    </button>
  );
};
