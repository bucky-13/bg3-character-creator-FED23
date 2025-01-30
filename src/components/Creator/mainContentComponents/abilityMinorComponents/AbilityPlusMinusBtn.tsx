import { INewAbility } from '../../../../models/INewCharater';

interface IAbilityPlusMinusBtnProps {
  adjustPoint: (ability: INewAbility) => void;
  ability: INewAbility;
  sign: string;
  isBtnDisabled: (sign: string) => boolean;
}

export const AbilityPlusMinusBtn = ({ adjustPoint, ability, sign, isBtnDisabled }: IAbilityPlusMinusBtnProps) => {
  return (
    <button className="plusMinusBtn" onClick={() => adjustPoint(ability)} disabled={isBtnDisabled(sign)}>
      {sign}
    </button>
  );
};
