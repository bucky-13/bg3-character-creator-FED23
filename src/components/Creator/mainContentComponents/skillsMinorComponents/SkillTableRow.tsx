import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSkillTakenFromOtherSource, getAbilityModifier } from '../../../../functions/skillFunctions';
import { ISkill } from '../../../../models/dbModels/ISkill';
import { DummyCheckmark } from './DummyCheckmark';
import { ExpertiseCheckmark } from './ExpertiseCheckmark';
import { HumanSkillCheckmark } from './HumanSkillSelection';
import { OtherSourcesCheckmark } from './OtherSourcesCheckmark';
import { ProficiencyCheckmark } from './ProficiencyCheckmark';

interface ISkillTableRowProps {
  skill: ISkill;
  onSelectingSkill: (skill: ISkill) => void;
  isPossibleSkill: (isExpertise: boolean, id: string, source: string) => boolean;
  humanSkillsTaken: number;
  onTogglingSkill: (id: string, isToBeRemoved: boolean, isExpertise: boolean, fromSource: string) => void;
  profSlotsLeft: number;
  expertiseSlotsLeft: number;
  expertiseSlots: number;
}

export const SkillTableRow = ({
  skill,
  onSelectingSkill,
  isPossibleSkill,
  humanSkillsTaken,
  onTogglingSkill,
  profSlotsLeft,
  expertiseSlots,
  expertiseSlotsLeft,
}: ISkillTableRowProps) => {
  const { newCharacter } = useNewCharContext();
  return (
    <div
      className={newCharacter.race === 'race01' ? 'skillContainer humanSkills' : 'skillContainer'}
      onMouseEnter={() => onSelectingSkill(skill)}
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
          <HumanSkillCheckmark skill={skill} humanSkillsTaken={humanSkillsTaken} onTogglingSkill={onTogglingSkill} />
        ) : (
          <DummyCheckmark />
        ))}
      {isPossibleSkill(false, skill.id, 'skills') ? (
        <ProficiencyCheckmark skill={skill} profSlotsLeft={profSlotsLeft} onTogglingSkill={onTogglingSkill} />
      ) : (
        <DummyCheckmark />
      )}
      {isPossibleSkill(true, skill.id, '') && expertiseSlots > 0 ? (
        <ExpertiseCheckmark skill={skill} expertiseSlotsLeft={expertiseSlotsLeft} onTogglingSkill={onTogglingSkill} />
      ) : (
        <DummyCheckmark />
      )}
    </div>
  );
};
