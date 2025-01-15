import './Abilities.scss';
import { Skills } from './Skills';
import { Abilities } from './Abilities';

export const AbilitiesAndSkills = () => {
  return (
    <div className="creatorCenterContainer">
      <div className="choicesAndSelectedContainer">
        <Abilities />
        <Skills />
      </div>
    </div>
  );
};
