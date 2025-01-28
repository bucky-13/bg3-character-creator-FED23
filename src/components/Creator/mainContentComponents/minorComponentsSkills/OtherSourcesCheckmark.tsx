import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { selectCheckmarkIcon } from '../../../../functions/skillFunctions';
import { ISkill } from '../../../../models/dbModels/ISkill';

interface IOtherSourcesCheckmarkProps {
  skill: ISkill;
}

export const OtherSourcesCheckmark = ({ skill }: IOtherSourcesCheckmarkProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button className={'checkmarkIcon checked'} disabled aria-label={'Select proficiency for ' + skill.name}>
      <img src={selectCheckmarkIcon(skill.id, false, newCharacter)} alt={skill.name} />
    </button>
  );
};
