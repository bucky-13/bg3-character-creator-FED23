import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSubClass,
  getDbSubrace,
} from '../../../functions/getDbItems';
import { INewCharacter } from '../../../models/INewCharater';
import { AbilitiesSummary } from '../summaryComponents/AbilitiesSummary';
import { EquipmentSummary } from '../summaryComponents/EquipmentSummary';
import { SkillsSummary } from '../summaryComponents/SkillsSummary';
import { SpellSummary } from '../summaryComponents/SpellSummary';
import { TextItem } from '../summaryComponents/TextItem';
import './Summary.scss';

interface ISummaryProps {
  character: INewCharacter;
}

export const Summary = ({ character }: ISummaryProps) => {
  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Character Summary</h2>
      <div className="summarySecondaryContainer">
        <img className="portraitImage" src={character.icon} />
        <TextItem title="Character Name" name={character.name} />
        <TextItem title="Character Level" name={character.characterLevel.toString()} />
        <TextItem title="Origin" name={getDbOrigin(character.origin).name} />
        <TextItem title="Race" name={getDbRace(character.race).name} />
        {character.subrace && <TextItem title="Subrace" name={getDbSubrace(character.subrace).name} />}
        <TextItem title="Class" name={getDbClass(character.startingClass).name} />
        {character.startingSubclass && (
          <TextItem title="Subclass" name={getDbSubClass(character.startingSubclass).name} />
        )}
        <TextItem title="Background" name={getDbBackground(character.background).name} />
        <AbilitiesSummary character={character} />
        <SkillsSummary title="Character Skill Proficiencies" skillsArray={character.skillProficiencies} />
        {character.skillExpertises.length > 0 && (
          <SkillsSummary title="Character Skill Expertises" skillsArray={character.skillExpertises} />
        )}
        <EquipmentSummary title="Armor Proficiencies" equipmentArray={character.armorProficiencies} />
        <EquipmentSummary title="Weapon Proficiencies" equipmentArray={character.weaponProficiencies} />
        {character.cantrips && character.cantrips.length > 0 && (
          <SpellSummary title="Cantrips" spellArray={character.cantrips} spellLevel={0} />
        )}
        {character.lvl1Spells && character.lvl1Spells.length > 0 && (
          <SpellSummary title="Level 1 spells" spellArray={character.lvl1Spells} spellLevel={1} />
        )}
      </div>
    </div>
  );
};
