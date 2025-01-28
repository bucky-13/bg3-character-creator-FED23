import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { skills } from '../../../database/dbSkills';
import { getDbClass, getDbSubClass } from '../../../functions/getDbItems';
import { ISkillProfNewChar } from '../../../models/INewCharater';
import './Skills.scss';
import '../Overview.scss';
import { ICharClass } from '../../../models/dbModels/ICharClass';
import { calculateSkillPointsLeft, getExpertiseSlots } from '../../../functions/creatorMinorFunctions';
import { useState } from 'react';
import { ISubClass } from '../../../models/dbModels/ISubClass';
import {
  createSkill,
  findExpOnNewChar,
  findProfOnNewChar,
  getAbilityModifier,
  isSkillExpPicked,
  isSkillTakenFromOtherSource,
  isSourceTheSame,
} from '../../../functions/skillFunctions';
import { DummyCheckmark } from './minorComponentsSkills/DummyCheckmark';
import { HumanSkillCheckmark } from './minorComponentsSkills/HumanSkillSelection';
import { ProficiencyCheckmark } from './minorComponentsSkills/ProficiencyCheckmark';
import { ExpertiseCheckmark } from './minorComponentsSkills/ExpertiseCheckmark';
import { SkillsTableHeader } from './minorComponentsSkills/SkillsTableHeader';
import { OtherSourcesCheckmark } from './minorComponentsSkills/OtherSourcesCheckmark';

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

  //This function is probably the worst function I've ever written. I might split it into checking expertise and profs separately to cut down on the checks if I have the time...
  const isPossibleSkill = (isExpertise: boolean, id: string, source: string): boolean => {
    const profIsAlreadyPicked = findProfOnNewChar(id, newCharacter);
    const expIsAlreadyPicked = findExpOnNewChar(id, newCharacter);
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
      const proficiencyIsToBeRemoved = findProfOnNewChar(id, newCharacter);
      if (proficiencyIsToBeRemoved === undefined) return false;
    }
    return true;
  };

  const addSkill = (id: string, isExpertise: boolean, source: string) => {
    if (isExpertise) {
      const newSkill: ISkillProfNewChar = createSkill(id, source, true);
      let newSkillExp = newCharacter.skillExpertises;

      newSkillExp ? newSkillExp?.push(newSkill) : (newSkillExp = [newSkill]);
      setNewCharacter({ ...newCharacter, skillExpertises: newSkillExp });
      setExpertiseSlotsLeft(expertiseSlotsLeft - 1);
    } else {
      const newSkill: ISkillProfNewChar = createSkill(id, source, true);
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
      removeBoth = isSkillExpPicked(id, newCharacter);
    }
    isToBeRemoved ? removeSkill(id, isExpertise, removeBoth, fromSource) : addSkill(id, isExpertise, fromSource);
  };

  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <div>
        <SkillsTableHeader
          humanSkillsTaken={humanSkillsTaken}
          profSlotsLeft={profSlotsLeft}
          profSlots={profSlots}
          expertiseSlotsLeft={expertiseSlotsLeft}
          expertiseSlots={expertiseSlots}
        />

        {skills.map((skill) => (
          <div
            className={newCharacter.race === 'race01' ? 'skillContainer humanSkills' : 'skillContainer'}
            key={skill.id}
          >
            <h4>{skill.name}</h4>
            {isSkillTakenFromOtherSource(skill.id, newCharacter) ? (
              <OtherSourcesCheckmark skill={skill} />
            ) : (
              <DummyCheckmark />
            )}
            <p>{getAbilityModifier(skill.parentId, skill.id, newCharacter)}</p>
            {newCharacter.race === 'race01' &&
              (isPossibleSkill(false, skill.id, 'race') ? (
                <HumanSkillCheckmark
                  skill={skill}
                  humanSkillsTaken={humanSkillsTaken}
                  onTogglingSkill={onTogglingSkill}
                />
              ) : (
                <DummyCheckmark />
              ))}
            {isPossibleSkill(false, skill.id, 'skills') ? (
              <ProficiencyCheckmark skill={skill} profSlotsLeft={profSlotsLeft} onTogglingSkill={onTogglingSkill} />
            ) : (
              <DummyCheckmark />
            )}
            {isPossibleSkill(true, skill.id, '') && expertiseSlots > 0 ? (
              <ExpertiseCheckmark
                skill={skill}
                expertiseSlotsLeft={expertiseSlotsLeft}
                onTogglingSkill={onTogglingSkill}
              />
            ) : (
              <DummyCheckmark />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
