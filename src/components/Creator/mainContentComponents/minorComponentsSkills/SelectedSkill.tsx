import { getDbAbility } from '../../../../functions/getDbItems';
import { ISkill } from '../../../../models/dbModels/ISkill';

interface ISelectedSkillProps {
  skill: ISkill;
}

export const SelectedSkill = ({ skill }: ISelectedSkillProps) => {
  return (
    <div>
      <div className="selectedChoiceHeader">
        <h3>{skill.name}</h3>
      </div>
      <div className="featureContainer">
        <p>{skill.desc}</p>
      </div>
      <div className="featureContainer">
        <p>
          <span>Skill bonus given from Ability</span>: {getDbAbility(skill.parentId).name}
        </p>
      </div>
    </div>
  );
};
