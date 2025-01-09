import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { skills } from '../../../database/dbSkills';
import { getDbClass } from '../../../functions/getDbItems';
import { INewAbility, ISkillProfNewChar } from '../../../models/INewCharater';
import './Skills.scss';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { checkForExpertiseSlots, displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';
import { useState } from 'react';

export const Skills = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const charClass: ICharClass = getDbClass(newCharacter.startingClass);
  const [profSlotsLeft, setProfSlotsLeft] = useState(charClass.skillProficiencySlots);
  const expertiseSlots = checkForExpertiseSlots(charClass, newCharacter);
  const [expertiseSlotsLeft, setExpertiseSlotsLeft] = useState(expertiseSlots);

  console.log(newCharacter);

  checkForExpertiseSlots(charClass, newCharacter);

  const getAbilityModifier = (key: string, id: string): number => {
    const usedAbility = newCharacter.abilities.find((abi: INewAbility) => abi.id === key)!;
    const abilityTotal = displayAbilityTotalPoints(usedAbility);
    const isToBeRemoved = newCharacter.skillProficiencies?.find((o) => o.id == id);
    const profiency: number = isToBeRemoved ? 2 : 0;
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
      const proficiencyIsToBeRemoved = newCharacter.skillProficiencies?.find((o) => o.id == id);
      if (proficiencyIsToBeRemoved === undefined) return false;
    }
    return true;
  };

  const isDisabled = (id: string): boolean => {
    const isAlreadyPicked = newCharacter.skillProficiencies?.find((o) => o.id == id);
    return isAlreadyPicked?.canChange === false ? true : false;
  };

  const isSkillProfPicked = (id: string): boolean => {
    const isToBeRemoved = newCharacter.skillProficiencies?.find((o) => o.id == id);
    return isToBeRemoved ? true : false;
  };
  const isSkillExpPicked = (id: string): boolean => {
    const isToBeRemoved = newCharacter.skillExpertises?.find((o) => o.id == id);
    return isToBeRemoved ? true : false;
  };

  const addSkill = (id: string, isExpertise: boolean) => {
    if (isExpertise) {
      const newSkill: ISkillProfNewChar = {
        id: id,
        fromSource: 'skills',
        canChange: true,
      };
      let newSkillExp = newCharacter.skillExpertises;
      newSkillExp ? newSkillExp?.push(newSkill) : (newSkillExp = [newSkill]);
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp });
      setExpertiseSlotsLeft(expertiseSlotsLeft - 1);
    } else {
      const newSkill: ISkillProfNewChar = {
        id: id,
        fromSource: 'skills',
        canChange: true,
      };
      const newSkillProfs = newCharacter.skillProficiencies;
      newSkillProfs?.push(newSkill);
      setNewCharacter({ ...newCharacter, skillProficiencies: newSkillProfs });
      setProfSlotsLeft(profSlotsLeft - 1);
    }
  };

  const filterProfs = (id: string) => {
    return newCharacter.skillProficiencies?.filter((o) => o.id !== id);
  };
  const filterExp = (id: string) => {
    return newCharacter.skillExpertises?.filter((o) => o.id !== id);
  };

  const removeSkill = (id: string, isExpertise: boolean, removeBoth: boolean) => {
    const newSkillProfs = newCharacter.skillProficiencies?.filter((o) => o.id !== id);
    const newSkillExp = newCharacter.skillExpertises?.filter((o) => o.id !== id);
    if (removeBoth) {
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp, skillProficiencies: newSkillProfs });
      setExpertiseSlotsLeft(expertiseSlotsLeft + 1);
      setProfSlotsLeft(profSlotsLeft + 1);
    } else if (isExpertise) {
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp });
      setExpertiseSlotsLeft(expertiseSlotsLeft + 1);
    } else {
      setNewCharacter({ ...newCharacter, skillProficiencies: newSkillProfs });
      setProfSlotsLeft(profSlotsLeft + 1);
    }
  };

  const onTogglingSkill = (id: string, isToBeRemoved: boolean, isExpertise: boolean) => {
    let removeBoth = false;
    if (isToBeRemoved && !isExpertise) {
      removeBoth = isSkillExpPicked(id);
    }
    isToBeRemoved ? removeSkill(id, isExpertise, removeBoth) : addSkill(id, isExpertise);
  };

  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <div>
        <div className="skillContainer">
          <h4 className="skillBonus">Skill Bonus </h4>
          <div>
            <h4>Prof </h4>
            <p>
              {profSlotsLeft} / {charClass.skillProficiencySlots}
            </p>
          </div>
          {expertiseSlots > 0 && (
            <div>
              <h4>Exp</h4>
              <p>
                {expertiseSlotsLeft} / {expertiseSlots}
              </p>
            </div>
          )}
        </div>
        {skills.map((skill) => (
          <div className="skillContainer" key={skill.id}>
            <h4>{skill.name}</h4>
            <p>{getAbilityModifier(skill.parentId, skill.id)}</p>
            {isPossibleSkill(false, skill.id) ? (
              <button
                className="checkmarkIcon"
                disabled={isDisabled(skill.id) || (isSkillProfPicked(skill.id) === false && profSlotsLeft === 0)}
                onClick={() => onTogglingSkill(skill.id, isSkillProfPicked(skill.id), false)}
              >
                {isSkillProfPicked(skill.id) && <img src="./icons/check-mark-icon.png" />}
              </button>
            ) : (
              <div></div>
            )}
            {isPossibleSkill(true, skill.id) && expertiseSlots > 0 ? (
              <button
                className="checkmarkIcon"
                disabled={isSkillExpPicked(skill.id) === false && expertiseSlotsLeft === 0}
                onClick={() => onTogglingSkill(skill.id, isSkillExpPicked(skill.id), true)}
              >
                {isSkillExpPicked(skill.id) && <img src="./icons/check-mark-icon.png" />}
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
