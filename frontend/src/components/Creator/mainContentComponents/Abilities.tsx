import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { abilities } from '../../../database/dbAbilities';
import { IAbility } from '../../../models/dbModels/IAbilitiy';
import './Abilities.scss';
import { INewAbility } from '../../../models/INewCharater';
import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';

export const Abilities = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [abilityPoints, setAbilityPoints] = useState(15);
  const [activeAbility, setActiveAbility] = useState<IAbility>(abilities[0]);

  const getAbility = (key: string): IAbility => {
    return abilities.find((abi: IAbility) => abi.id === key)!;
  };

  const getAbiValue = (key: string, value: keyof IAbility): string => {
    const ability = getAbility(key);
    return ability ? ability[value] : 'error';
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

  const calculatePointCost = (ability: INewAbility): number => {
    return ability.baseValue < 14 ? 1 : 2;
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

  return (
    <div className="abilitiesContainer">
      <h2>Abilities</h2>
      <p>Ability points left: {abilityPoints}</p>
      <div>
        <div className="abilityContainer">
          <div className="abiDummy"></div>
          <p>Assign +2</p>
          <p>Assign +1</p>
        </div>
        {newCharacter.abilities.map((ability) => (
          <div
            className="abilityContainer"
            key={ability.id}
            onClick={() => setActiveAbility(getAbility(ability.id))}
            onMouseEnter={() => setActiveAbility(getAbility(ability.id))}
          >
            <img src={getAbiValue(ability.id, 'icon')} className="abilitiesIcon" />
            <h4>{getAbiValue(ability.id, 'name')}</h4>
            <button
              className="plusMinusBtn"
              onClick={() => removePoint(ability)}
              disabled={ability.baseValue <= 8 ? true : false}
            >
              -
            </button>
            <p>{displayAbilityTotalPoints(ability)}</p>
            <button
              className="plusMinusBtn"
              onClick={() => addPoint(ability)}
              disabled={ability.baseValue >= 15 ? true : false || abilityPoints - calculatePointCost(ability) < 0}
            >
              +
            </button>
            <button
              className={ability.plusTwoBonus ? 'checkmarkIcon checked' : 'checkmarkIcon'}
              onClick={() => updateNewCharBonus(ability.id, 1)}
            >
              {ability.plusTwoBonus && <img src="./icons/check-mark-icon.png" />}
            </button>
            <button
              className={ability.plusOneBonus ? 'checkmarkIcon checked' : 'checkmarkIcon'}
              onClick={() => updateNewCharBonus(ability.id, 0)}
            >
              {ability.plusOneBonus && <img src="./icons/check-mark-icon.png" />}
            </button>
          </div>
        ))}
      </div>
      <div className="abilityInfoContainer">
        <div className="flexRowCentered">
          <img src={activeAbility.icon} className="abilitiesIcon" />
          <h3>{activeAbility.name}</h3>
        </div>
        <p>{activeAbility.desc}</p>
      </div>
    </div>
  );
};
