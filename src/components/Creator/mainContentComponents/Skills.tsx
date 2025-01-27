import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { skills } from '../../../database/dbSkills';
import { getDbBackground, getDbClass, getDbRace, getDbSubClass, getDbSubrace } from '../../../functions/getDbItems';
import { INewAbility, ISkillProfNewChar } from '../../../models/INewCharater';
import './Skills.scss';
import '../Overview.scss';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import {
  calculateSkillPointsLeft,
  calculateSkillPointsTaken,
  displayAbilityTotalPoints,
  getExpertiseSlots,
} from '../../../functions/creatorMinorFunctions';
import { useState } from 'react';
import { ISubClass } from '../../../models/dbModels/ISubClass';

export const Skills = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const charClass: ICharClass = getDbClass(newCharacter.startingClass);
  const charSubClass: ISubClass | undefined = newCharacter.startingSubclass
    ? getDbSubClass(newCharacter.startingSubclass)
    : undefined;
  const profSlots = charClass.skillProficiencySlots;
  const [profSlotsLeft, setProfSlotsLeft] = useState(
    calculateSkillPointsLeft(profSlots, newCharacter.skillProficiencies),
  );
  const expertiseSlots = getExpertiseSlots(charClass, charSubClass, newCharacter);
  const [expertiseSlotsLeft, setExpertiseSlotsLeft] = useState(
    calculateSkillPointsLeft(expertiseSlots, newCharacter.skillExpertises),
  );

  const [humanSkillsTaken, setHumanSkillsTaken] = useState(0);

  const findProfOnNewChar = (id: string) => {
    return newCharacter.skillProficiencies.find((o) => o.id == id);
  };
  const findExpOnNewChar = (id: string) => {
    return newCharacter.skillExpertises.find((o) => o.id == id);
  };

  const isSourceTheSame = (skill: ISkillProfNewChar, source: string): boolean => {
    const hasSource = skill.fromSource.find((o) => o === source);
    return hasSource ? true : false;
  };

  const getAbilityModifier = (key: string, id: string): number => {
    const usedAbility = newCharacter.abilities.find((abi: INewAbility) => abi.id === key)!;
    const abilityTotal = displayAbilityTotalPoints(usedAbility);
    const hasProficiency = findProfOnNewChar(id);
    const hasExpertise = findExpOnNewChar(id);
    const bonus: number = hasExpertise ? 4 : hasProficiency ? 2 : 0;
    return Math.floor((abilityTotal - 10) / 2 + bonus);
  };

  const isPossibleSkill = (isExpertise: boolean, id: string, source: string): boolean => {
    const profIsAlreadyPicked = findProfOnNewChar(id);
    const expIsAlreadyPicked = findExpOnNewChar(id);
    const isOnSubClass = charSubClass?.skillExpertises ? charSubClass.skillExpertises.find((o) => o === id) : undefined;

    if (profIsAlreadyPicked && profIsAlreadyPicked.canChange === false && !isExpertise) return false;
    if (profIsAlreadyPicked && isExpertise && newCharacter.startingClass === 'ccl09') return true;
    if (expIsAlreadyPicked && expIsAlreadyPicked.canChange === false) return false;
    if (isOnSubClass && isExpertise) return true;
    if (isOnSubClass && !isExpertise && expIsAlreadyPicked) return false;
    if (newCharacter.startingSubclass === 'scl10' && !isOnSubClass && isExpertise) return false;
    if (expIsAlreadyPicked && isExpertise) return isSourceTheSame(expIsAlreadyPicked, source);
    if (profIsAlreadyPicked && !isExpertise) return isSourceTheSame(profIsAlreadyPicked, source);
    if (source === 'race' && profIsAlreadyPicked) return isSourceTheSame(profIsAlreadyPicked, source);
    if (source === 'race') return true;

    const isOnClass = charClass?.skillProficiencies.find((o) => o === id);
    if (isOnClass === undefined) return false;
    if (!isExpertise) {
      if (profIsAlreadyPicked && profIsAlreadyPicked.canChange === false) return false;
    } else {
      const proficiencyIsToBeRemoved = findProfOnNewChar(id);
      if (proficiencyIsToBeRemoved === undefined) return false;
    }
    return true;
  };

  const isSkillTakenFromOtherSource = (id: string): boolean => {
    const profIsAlreadyPicked = findProfOnNewChar(id);
    if (profIsAlreadyPicked && profIsAlreadyPicked.canChange === false) {
      return true;
    }
    const expIsAlreadyPicked = findExpOnNewChar(id);
    if (expIsAlreadyPicked && expIsAlreadyPicked.canChange === false) {
      return true;
    }
    return false;
  };

  const isDisabled = (id: string): boolean => {
    const profIsAlreadyPicked = findProfOnNewChar(id);
    return profIsAlreadyPicked?.canChange === false ? true : false;
  };

  const isSkillProfPicked = (id: string): boolean => {
    const isToBeRemoved = findProfOnNewChar(id);
    return isToBeRemoved ? true : false;
  };

  const isSkillExpPicked = (id: string): boolean => {
    const isToBeRemoved = findExpOnNewChar(id);
    return isToBeRemoved ? true : false;
  };

  const addSkill = (id: string, isExpertise: boolean, source: string) => {
    if (isExpertise) {
      const newSkill: ISkillProfNewChar = {
        id: id,
        fromSource: [source],
        canChange: true,
      };
      let newSkillExp = newCharacter.skillExpertises;
      newSkillExp ? newSkillExp?.push(newSkill) : (newSkillExp = [newSkill]);
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp });
      setExpertiseSlotsLeft(expertiseSlotsLeft - 1);
    } else {
      const newSkill: ISkillProfNewChar = {
        id: id,
        fromSource: [source],
        canChange: true,
      };
      const newSkillProfs = newCharacter.skillProficiencies;
      newSkillProfs?.push(newSkill);
      setNewCharacter({ ...newCharacter, skillProficiencies: newSkillProfs });
      source === 'skills' ? setProfSlotsLeft(profSlotsLeft - 1) : setHumanSkillsTaken(1);
    }
  };

  const removeSkill = (id: string, isExpertise: boolean, removeBoth: boolean, source: string) => {
    const newSkillProfs = newCharacter.skillProficiencies?.filter((o) => o.id !== id);
    const newSkillExp = newCharacter.skillExpertises?.filter((o) => o.id !== id);
    if (removeBoth) {
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp, skillProficiencies: newSkillProfs });
      setExpertiseSlotsLeft(expertiseSlotsLeft + 1);
      source === 'skills' ? setProfSlotsLeft(profSlotsLeft + 1) : setHumanSkillsTaken(0);
    } else if (isExpertise) {
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp });
      setExpertiseSlotsLeft(expertiseSlotsLeft + 1);
    } else {
      setNewCharacter({ ...newCharacter, skillProficiencies: newSkillProfs });
      source === 'skills' ? setProfSlotsLeft(profSlotsLeft + 1) : setHumanSkillsTaken(0);
    }
  };

  const onTogglingSkill = (id: string, isToBeRemoved: boolean, isExpertise: boolean, fromSource: string) => {
    let removeBoth = false;
    if (isToBeRemoved && !isExpertise) {
      removeBoth = isSkillExpPicked(id);
    }
    isToBeRemoved ? removeSkill(id, isExpertise, removeBoth, fromSource) : addSkill(id, isExpertise, fromSource);
  };

  const selectCheckmarkIcon = (id: string, isExpertise: boolean): string => {
    let source = '';

    if (isExpertise) {
      const exp = findExpOnNewChar(id)?.fromSource[0];
      exp ? (source = exp) : '';
    } else {
      const prof = findProfOnNewChar(id)?.fromSource[0];
      prof ? (source = prof) : '';
    }

    switch (source) {
      case 'background':
        return getDbBackground(newCharacter.background).icon;
      case 'race':
        return getDbRace(newCharacter.race).icon;
      case 'class':
        return getDbClass(newCharacter.startingClass).icon;
      case 'subrace':
        return newCharacter.subrace ? getDbSubrace(newCharacter.subrace).icon : '';
      default:
        return './icons/check-mark-icon.png';
    }
  };

  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <div>
        <div className={newCharacter.race === 'race01' ? 'skillContainer humanSkills' : 'skillContainer'}>
          <h3 className="skillTitle">Skill Name </h3>
          <h4 className="skillTitle">From Other source</h4>
          <h4 className="skillTitle">Skill Bonus </h4>
          {newCharacter.race === 'race01' && (
            <div className={humanSkillsTaken < 1 ? 'alertText' : 'skillTitle'}>
              <h4>Race</h4>
              <p>{calculateSkillPointsTaken(newCharacter.skillProficiencies, 'race')} / 1</p>
            </div>
          )}
          <div className={profSlotsLeft > 0 ? 'alertText' : 'skillTitle'}>
            <h4>Prof </h4>
            <p>
              {calculateSkillPointsTaken(newCharacter.skillProficiencies, 'skills')} / {profSlots}
            </p>
          </div>
          {expertiseSlots > 0 && (
            <div className={expertiseSlotsLeft > 0 ? 'alertText' : 'skillTitle'}>
              <h4>Exp</h4>
              <p>
                {calculateSkillPointsTaken(newCharacter.skillExpertises, 'skills')} / {expertiseSlots}
              </p>
            </div>
          )}
        </div>

        {skills.map((skill) => (
          <div
            className={newCharacter.race === 'race01' ? 'skillContainer humanSkills' : 'skillContainer'}
            key={skill.id}
          >
            <h4>{skill.name}</h4>
            {isSkillTakenFromOtherSource(skill.id) ? (
              <button className={'checkmarkIcon checked'} disabled aria-label={'Select proficiency for ' + skill.name}>
                <img src={selectCheckmarkIcon(skill.id, false)} alt={skill.name} />
              </button>
            ) : (
              <div className="dummyCheckmark"></div>
            )}
            <p>{getAbilityModifier(skill.parentId, skill.id)}</p>
            {newCharacter.race === 'race01' &&
              (isPossibleSkill(false, skill.id, 'race') ? (
                <button
                  className={isSkillProfPicked(skill.id) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
                  disabled={humanSkillsTaken > 0 && !isSkillProfPicked(skill.id)}
                  onClick={() => onTogglingSkill(skill.id, isSkillProfPicked(skill.id), false, 'race')}
                  aria-label={'Select proficiency for ' + skill.name}
                >
                  {isSkillProfPicked(skill.id) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
                </button>
              ) : (
                <div className="dummyCheckmark"></div>
              ))}
            {isPossibleSkill(false, skill.id, 'skills') ? (
              <button
                className={isSkillProfPicked(skill.id) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
                disabled={isDisabled(skill.id) || (isSkillProfPicked(skill.id) === false && profSlotsLeft === 0)}
                onClick={() => onTogglingSkill(skill.id, isSkillProfPicked(skill.id), false, 'skills')}
                aria-label={'Select proficiency for ' + skill.name}
              >
                {isSkillProfPicked(skill.id) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
              </button>
            ) : (
              <div className="dummyCheckmark"></div>
            )}
            {isPossibleSkill(true, skill.id, '') && expertiseSlots > 0 ? (
              <button
                className={isSkillExpPicked(skill.id) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
                disabled={isSkillExpPicked(skill.id) === false && expertiseSlotsLeft === 0}
                onClick={() => onTogglingSkill(skill.id, isSkillExpPicked(skill.id), true, 'skills')}
                aria-label={'Select expertise for ' + skill.name}
              >
                {isSkillExpPicked(skill.id) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
              </button>
            ) : (
              <div className="dummyCheckmark"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
