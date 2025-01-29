import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { calculateSkillPointsTaken } from '../../../../functions/creatorMinorFunctions';

interface ISkillsTableHeaderProps {
  humanSkillsTaken: number;
  profSlotsLeft: number;
  profSlots: number;
  expertiseSlotsLeft: number;
  expertiseSlots: number;
}

export const SkillsTableHeader = ({
  humanSkillsTaken,
  profSlotsLeft,
  profSlots,
  expertiseSlotsLeft,
  expertiseSlots,
}: ISkillsTableHeaderProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <div className={newCharacter.race === 'race01' ? 'skillContainer humanSkills' : 'skillContainer'}>
      <h3 className="skillTitle">Skill Name </h3>
      <h4 className="skillTitle">Bonus modified by</h4>
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
  );
};
