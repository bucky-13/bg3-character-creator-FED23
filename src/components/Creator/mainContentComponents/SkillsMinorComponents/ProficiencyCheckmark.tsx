import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSkillProfPicked, isSkillDisabled } from '../../../../functions/skillFunctions';
import { ISkill } from '../../../../models/dbModels/ISkill';

interface IProficiencyCheckmarkProps {
  skill: ISkill;
  profSlotsLeft: number;
  onTogglingSkill: (id: string, isToBeRemoved: boolean, isExpertise: boolean, fromSource: string) => void;
}

export const ProficiencyCheckmark = ({ skill, profSlotsLeft, onTogglingSkill }: IProficiencyCheckmarkProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button
      className={isSkillProfPicked(skill.id, newCharacter) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
      disabled={
        isSkillDisabled(skill.id, newCharacter) ||
        (isSkillProfPicked(skill.id, newCharacter) === false && profSlotsLeft === 0)
      }
      onClick={() => onTogglingSkill(skill.id, isSkillProfPicked(skill.id, newCharacter), false, 'skills')}
      aria-label={'Select proficiency for ' + skill.name}
    >
      {isSkillProfPicked(skill.id, newCharacter) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
    </button>
  );
};
