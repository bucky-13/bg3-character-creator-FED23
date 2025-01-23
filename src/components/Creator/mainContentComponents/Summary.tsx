import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSubClass,
  getDbSubrace,
} from '../../../functions/getDbItems';
import { AbilitiesSummary } from '../summaryComponents/AbilitiesSummary';
import { EquipmentSummary } from '../summaryComponents/EquipmentSummary';
import { SkillsSummary } from '../summaryComponents/SkillsSummary';
import { SpellSummary } from '../summaryComponents/SpellSummary';
import { TextItem } from '../summaryComponents/TextItem';
import './Summary.scss';

export const Summary = () => {
  const { newCharacter } = useNewCharContext();

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Character Summary</h2>
      <div className="summarySecondaryContainer">
        <TextItem title="Character Name" name={newCharacter.name} />
        <TextItem title="Character Level" name={newCharacter.characterLevel.toString()} />
        <TextItem title="Origin" name={getDbOrigin(newCharacter.origin).name} />
        <TextItem title="Race" name={getDbRace(newCharacter.race).name} />
        {newCharacter.subrace && <TextItem title="Subrace" name={getDbSubrace(newCharacter.subrace).name} />}
        <TextItem title="Class" name={getDbClass(newCharacter.startingClass).name} />
        {newCharacter.startingSubclass && (
          <TextItem title="Subclass" name={getDbSubClass(newCharacter.startingSubclass).name} />
        )}
        <TextItem title="Background" name={getDbBackground(newCharacter.background).name} />
        <AbilitiesSummary />
        <SkillsSummary title="Character Skill Proficiencies" skillsArray={newCharacter.skillProficiencies} />
        {newCharacter.skillExpertises.length > 0 && (
          <SkillsSummary title="Character Skill Expertises" skillsArray={newCharacter.skillExpertises} />
        )}
        <EquipmentSummary title="Armor Proficiencies" equipmentArray={newCharacter.armorProficiencies} />
        <EquipmentSummary title="Weapon Proficiencies" equipmentArray={newCharacter.weaponProficiencies} />
        {newCharacter.cantrips && newCharacter.cantrips.length > 0 && (
          <SpellSummary title="Cantrips" spellArray={newCharacter.cantrips} spellLevel={0} />
        )}
        {newCharacter.lvl1Spells && newCharacter.lvl1Spells.length > 0 && (
          <SpellSummary title="Level 1 spells" spellArray={newCharacter.lvl1Spells} spellLevel={1} />
        )}
      </div>
    </div>
  );
};
