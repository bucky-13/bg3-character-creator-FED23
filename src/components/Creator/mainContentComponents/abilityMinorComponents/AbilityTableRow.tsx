import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { calculatePointCost, getAbility, getAbiValue } from '../../../../functions/abilityFunctions';
import { displayAbilityTotalPoints } from '../../../../functions/creatorMinorFunctions';
import { checkIfPrimaryAbility } from '../../../../functions/skillFunctions';
import { IAbility } from '../../../../models/dbModels/IAbilitiy';
import { INewAbility } from '../../../../models/INewCharater';
import { Dispatcher } from '../../../../models/types';
import { AbilityCheckmark } from './AbilityCheckmark';
import { AbilityPlusMinusBtn } from './AbilityPlusMinusBtn';

interface IAbilityTableRowProps {
  ability: INewAbility;
  setSelectedAbility: Dispatcher<IAbility>;
  abilityPoints: number;
  setAbilityPoints: Dispatcher<number>;
}

export const AbilityTableRow = ({
  ability,
  setSelectedAbility,
  abilityPoints,
  setAbilityPoints,
}: IAbilityTableRowProps) => {
  const { newCharacter, setNewCharacter } = useNewCharContext();

  const updateNewCharBonus = (key: string, addIndex: number): void => {
    const newCharAbilities = newCharacter.abilities;
    const newIndexKey = addIndex === 0 ? 'plusOneBonus' : 'plusTwoBonus';
    const resetIndexKey = addIndex !== 0 ? 'plusOneBonus' : 'plusTwoBonus';
    const indexToAdd = newCharAbilities.findIndex((abi) => abi.id === key);
    const indexToRemove = newCharAbilities.findIndex((abi) => abi[newIndexKey]);
    if (indexToRemove >= 0) {
      newCharAbilities[indexToRemove][newIndexKey] = false;
    }
    newCharAbilities[indexToAdd][resetIndexKey] = false;
    newCharAbilities[indexToAdd][newIndexKey] = true;
    setNewCharacter({ ...newCharacter, abilities: newCharAbilities });
  };

  const addPoint = (ability: INewAbility) => {
    const pointCost: number = ability.baseValue < 13 ? 1 : 2;
    if (abilityPoints - pointCost >= 0) {
      const newCharAbilities = newCharacter.abilities;
      const i = newCharAbilities.findIndex((abi) => abi.id === ability.id);
      newCharAbilities[i].baseValue++;
      setNewCharacter({ ...newCharacter, abilities: newCharAbilities });
      setAbilityPoints(abilityPoints - pointCost);
    }
  };

  const removePoint = (ability: INewAbility) => {
    const pointCost: number = calculatePointCost(ability);
    if (abilityPoints - pointCost <= 27) {
      const newCharAbilities = newCharacter.abilities;
      const i = newCharAbilities.findIndex((abi) => abi.id === ability.id);
      newCharAbilities[i].baseValue--;
      setNewCharacter({ ...newCharacter, abilities: newCharAbilities });
      setAbilityPoints(abilityPoints + pointCost);
    }
  };

  const isBtnDisabled = (sign: string): boolean => {
    if (sign === '-') {
      return ability.baseValue <= 8 ? true : false;
    } else {
      return ability.baseValue >= 15 ? true : false || abilityPoints - calculatePointCost(ability) < 0;
    }
  };

  return (
    <div
      className="abilityContainer"
      key={ability.id}
      onClick={() => setSelectedAbility(getAbility(ability.id))}
      onMouseEnter={() => setSelectedAbility(getAbility(ability.id))}
    >
      <img
        src={getAbiValue(ability.id, 'icon')}
        className="abilitiesIcon"
        alt={'icon of ' + getAbiValue(ability.id, 'name')}
      />
      <p className="starText"> {checkIfPrimaryAbility(newCharacter, ability.id) ? '☆' : ''}</p>
      <p className="abilityName">{getAbiValue(ability.id, 'name')}</p>
      <AbilityPlusMinusBtn adjustPoint={removePoint} ability={ability} sign="-" isBtnDisabled={isBtnDisabled} />
      <p>{displayAbilityTotalPoints(ability)}</p>
      <AbilityPlusMinusBtn adjustPoint={addPoint} ability={ability} sign="+" isBtnDisabled={isBtnDisabled} />
      <AbilityCheckmark ability={ability} updateNewCharBonus={updateNewCharBonus} objectKey="plusTwoBonus" index={1} />
      <AbilityCheckmark ability={ability} updateNewCharBonus={updateNewCharBonus} objectKey="plusOneBonus" index={0} />
    </div>
  );
};
