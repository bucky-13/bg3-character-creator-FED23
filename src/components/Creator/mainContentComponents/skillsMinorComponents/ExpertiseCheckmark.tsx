import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSkillExpPicked } from '../../../../functions/skillFunctions';
import { ISkill } from '../../../../models/dbModels/ISkill';

interface IExpertiseCheckmarkProps {
  skill: ISkill;
  expertiseSlotsLeft: number;
  onTogglingSkill: (id: string, isToBeRemoved: boolean, isExpertise: boolean, fromSource: string) => void;
}

export const ExpertiseCheckmark = ({ skill, expertiseSlotsLeft, onTogglingSkill }: IExpertiseCheckmarkProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button
      className={isSkillExpPicked(skill.id, newCharacter) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
      disabled={isSkillExpPicked(skill.id, newCharacter) === false && expertiseSlotsLeft === 0}
      onClick={() => onTogglingSkill(skill.id, isSkillExpPicked(skill.id, newCharacter), true, 'skills')}
      aria-label={'Select expertise for ' + skill.name}
    >
      {isSkillExpPicked(skill.id, newCharacter) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
    </button>
  );
};
