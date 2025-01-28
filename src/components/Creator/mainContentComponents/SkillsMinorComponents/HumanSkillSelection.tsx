import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSkillProfPicked } from '../../../../functions/skillFunctions';
import { ISkill } from '../../../../models/dbModels/ISkill';

interface IHumanSkillCheckmarkProps {
  skill: ISkill;
  humanSkillsTaken: number;
  onTogglingSkill: (id: string, isToBeRemoved: boolean, isExpertise: boolean, fromSource: string) => void;
}

export const HumanSkillCheckmark = ({ skill, humanSkillsTaken, onTogglingSkill }: IHumanSkillCheckmarkProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button
      className={isSkillProfPicked(skill.id, newCharacter) ? 'checkmarkIcon checked' : 'checkmarkIcon'}
      disabled={humanSkillsTaken > 0 && !isSkillProfPicked(skill.id, newCharacter)}
      onClick={() => onTogglingSkill(skill.id, isSkillProfPicked(skill.id, newCharacter), false, 'race')}
      aria-label={'Select proficiency for ' + skill.name}
    >
      {isSkillProfPicked(skill.id, newCharacter) && <img src="./icons/check-mark-icon.png" alt={skill.name} />}
    </button>
  );
};
