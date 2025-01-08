import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { abilities } from '../../../database/dbAbilities';
import { IAbility } from '../../../models/dbModels/IAbilitiy';
import './Abilities.scss';
import { INewAbility } from '../../../models/INewCharater';

export const Abilities = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [abilityPoints, setAbilityPoints] = useState(15);

  const getAbiValue = (key: string, value: keyof IAbility): string => {
    const ability = abilities.find((abi: IAbility) => abi.id === key);
    return ability ? ability[value] : 'error';
  };

  const addPoint = (ability: INewAbility) => {};

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

  const displayAbilityTotal = (ability: INewAbility): number => {
    const plus1Bonus = ability.plusOneBonus ? 1 : 0;
    const plus2Bonus = ability.plusTwoBonus ? 2 : 0;
    return ability.baseValue + plus1Bonus + plus2Bonus;
  };

  console.log(newCharacter);
  return (
    <div className="abilitiesContainer">
      <h2>Abilities</h2>
      <p>Ability points left: {abilityPoints}</p>
      <div>
        <div className="abilityContainer">
          <div className="abiDummy"></div>
          <p>Assign +1</p>
          <p>Assign +2</p>
        </div>
        {newCharacter.abilities.map((ability) => (
          <div className="abilityContainer" key={ability.id}>
            <img src={getAbiValue(ability.id, 'icon')} className="abilitiesIcon" />
            <h4>{getAbiValue(ability.id, 'name')}</h4>
            <button className="plusMinusBtn">-</button>
            <p>{displayAbilityTotal(ability)}</p>
            <button className="plusMinusBtn">+</button>
            <button className="plusMinusBtn checkmarkIcon" onClick={() => updateNewCharBonus(ability.id, 0)}>
              {ability.plusOneBonus && <img src="./icons/check-mark-icon.png" />}
            </button>
            <button className="plusMinusBtn checkmarkIcon" onClick={() => updateNewCharBonus(ability.id, 1)}>
              {ability.plusTwoBonus && <img src="./icons/check-mark-icon.png" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
