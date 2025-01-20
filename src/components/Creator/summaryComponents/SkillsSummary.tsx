import { getDbSkill } from '../../../functions/getDbItems';
import { ISkillProfNewChar } from '../../../models/INewCharater';

interface ISkillsSummaryProps {
  title: string;
  skillsArray: ISkillProfNewChar[];
}

export const SkillsSummary = ({ title, skillsArray }: ISkillsSummaryProps) => {
  return (
    <ul>
      <li>
        <span className="summaryTitle">{title}:</span>
      </li>
      {skillsArray.map((skill, i) => (
        <li key={skill.id}>
          {getDbSkill(skill.id).name}
          {i + 1 !== skillsArray.length && ', '}
        </li>
      ))}
    </ul>
  );
};
