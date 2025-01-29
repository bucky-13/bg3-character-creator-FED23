import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { abilities } from '../../../database/dbAbilities';
import { IAbility } from '../../../models/dbModels/IAbilitiy';
import './Abilities.scss';
import '../Overview.scss';
import { INewAbility } from '../../../models/INewCharater';
import { calculateAbilityPointsLeft, displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';
import { checkPlusOneBonusMissing, checkPlusTwoBonusMissing } from '../../../functions/sideNavbarFunctions';
import { checkIfPrimaryAbility } from '../../../functions/skillFunctions';

export const Abilities = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [abilityPoints, setAbilityPoints] = useState(calculateAbilityPointsLeft(newCharacter.abilities));
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
    <div className="creatorCenterContainer">
      <h2>Abilities</h2>
      <div className="choicesAndSelectedContainer">
        <div className="abilitiesContainer">
          <p className={abilityPoints > 0 ? 'alertText' : ''}>Ability points left: {abilityPoints}</p>
          <div>
            <div className="abilityContainer">
              <div className="abiDummy"></div>
              <p className={checkPlusTwoBonusMissing(newCharacter) ? 'alertText' : ''}>Assign +2</p>
              <p className={checkPlusOneBonusMissing(newCharacter) ? 'alertText' : ''}>Assign +1</p>
            </div>
            {newCharacter.abilities.map((ability) => (
              <div
                className="abilityContainer"
                key={ability.id}
                onClick={() => setActiveAbility(getAbility(ability.id))}
                onMouseEnter={() => setActiveAbility(getAbility(ability.id))}
              >
                <img
                  src={getAbiValue(ability.id, 'icon')}
                  className="abilitiesIcon"
                  alt={'icon of ' + getAbiValue(ability.id, 'name')}
                />
                <p className="starText"> {checkIfPrimaryAbility(newCharacter, ability.id) ? '☆' : ''}</p>
                <p className="abilityName">{getAbiValue(ability.id, 'name')}</p>
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
                  aria-label={'Assign +2 bonus to' + ability.shortName}
                >
                  {ability.plusTwoBonus && <img src="./icons/check-mark-icon.png" />}
                </button>
                <button
                  className={ability.plusOneBonus ? 'checkmarkIcon checked' : 'checkmarkIcon'}
                  onClick={() => updateNewCharBonus(ability.id, 0)}
                  aria-label={'Assign +1 bonus to' + ability.shortName}
                >
                  {ability.plusOneBonus && <img src="./icons/check-mark-icon.png" />}
                </button>
              </div>
            ))}
          </div>
          <p>
            <span className="starText">☆</span> = This is the primary ability of your class
          </p>
        </div>
        <div className="abilityInfoContainer">
          <div className="flexRowCentered">
            <img
              src={activeAbility.icon}
              className="abilitiesIcon"
              alt={'icon of ' + getAbiValue(activeAbility.id, 'name')}
            />
            <h3>{activeAbility.name}</h3>
          </div>
          <p>{activeAbility.desc}</p>
        </div>
      </div>
    </div>
  );
};
