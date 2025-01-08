import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { skills } from '../../../database/dbSkills';
import { getDbClass, getDbObject } from '../../../functions/getDbItems';
import { INewAbility } from '../../../models/INewCharater';
import './Skills.scss';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';

export const Skills = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const charClass: ICharClass = getDbClass(newCharacter.startingClass);
  console.log(newCharacter);

  const getAbilityModifier = (key: string, id: string): number => {
    const usedAbility = newCharacter.abilities.find((abi: INewAbility) => abi.id === key)!;
    const abilityTotal = displayAbilityTotalPoints(usedAbility);
    const isPicked = newCharacter.skillProficiencies?.find((o) => o.id == id);
    const profiency: number = isPicked ? 2 : 0;
    return Math.floor((abilityTotal - 10) / 2 + profiency);
  };

  const isPossibleSkill = (isExpertise: boolean, id: string): boolean => {
    const isAlreadyPicked = newCharacter.skillProficiencies?.find((o) => o.id == id);
    if (isAlreadyPicked && !isExpertise) return true;
    const isOnClass = charClass?.skillProficiencies.find((o) => o === id);
    if (isOnClass === undefined) return false;
    if (!isExpertise) {
      if (isAlreadyPicked && isAlreadyPicked.canChange === false) return false;
    } else {
      if (!newCharacter.skillExpertises) return false;
    }
    return true;
  };

  const isDisabled = (id: string): boolean => {
    const isAlreadyPicked = newCharacter.skillProficiencies?.find((o) => o.id == id);
    return isAlreadyPicked?.canChange === false ? true : false;
  };

  const isPicked = (id: string): boolean => {
    const isPicked = newCharacter.skillProficiencies?.find((o) => o.id == id);
    return isPicked ? true : false;
  };

  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <div>
        {skills.map((skill) => (
          <div className="skillContainer" key={skill.id}>
            <h4>{skill.name}</h4>
            <p>{getAbilityModifier(skill.parentId, skill.id)}</p>
            {isPossibleSkill(false, skill.id) ? (
              <button className="checkmarkIcon" disabled={isDisabled(skill.id)}>
                {isPicked(skill.id) && <img src="./icons/check-mark-icon.png" />}
              </button>
            ) : (
              <div></div>
            )}
            {isPossibleSkill(true, skill.id) ? (
              <button className="checkmarkIcon">
                {isPicked(skill.id) && <img src="./icons/check-mark-icon.png" />}
              </button>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
