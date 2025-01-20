import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSkill,
  getDbSpell,
  getDbSubClass,
  getDbSubrace,
} from '../../../functions/getDbItems';
import { AbilitiesSummary } from '../summaryComponents/AbilitiesSummary';
import { TextItem } from '../summaryComponents/TextItem';
import './Summary.scss';

export const Summary = () => {
  const { newCharacter } = useNewCharContext();

  console.log(newCharacter);

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
        <ul>
          <li>
            <span className="summaryTitle">Character Skill Proficiencies:</span>
          </li>
          {newCharacter.skillProficiencies.map((skill, i) => (
            <li key={skill.id}>
              {getDbSkill(skill.id).name}
              {i + 1 !== newCharacter.skillProficiencies.length && ', '}{' '}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <span className="summaryTitle">Armor Proficiencies:</span>
          </li>
          {newCharacter.armorProficiencies.length > 0 ? (
            newCharacter.armorProficiencies.map((armor, i) => (
              <li key={armor.id}>
                {armor.name}
                {i + 1 !== newCharacter.armorProficiencies.length && ', '}
              </li>
            ))
          ) : (
            <li>
              <span className="summarySubTitle">None</span>
            </li>
          )}
        </ul>
        <ul>
          <li>
            <span className="summaryTitle">Weapon Proficiencies:</span>
          </li>
          {newCharacter.weaponProficiencies.length > 0 ? (
            newCharacter.weaponProficiencies.map((weapon, i) => (
              <li key={weapon.id}>
                {weapon.name}
                {i + 1 !== newCharacter.weaponProficiencies.length && ', '}
              </li>
            ))
          ) : (
            <li>
              <span className="summarySubTitle">None</span>
            </li>
          )}
        </ul>
        {newCharacter.cantrips && newCharacter.cantrips.length > 0 && (
          <ul>
            <li>
              <span className="summaryTitle">Cantrips: </span>
              {newCharacter.cantrips.map((cantrip, i) => (
                <li key={cantrip.id}>
                  {getDbSpell(cantrip.id, 0).name}
                  {i + 1 !== newCharacter.cantrips!.length && ', '}
                </li>
              ))}
            </li>
          </ul>
        )}
        {newCharacter.lvl1Spells && newCharacter.lvl1Spells.length > 0 && (
          <ul>
            <li>
              <span className="summaryTitle">Level 1 spells: </span>
              {newCharacter.lvl1Spells.map((spell, i) => (
                <li key={spell.id}>
                  {getDbSpell(spell.id, 1).name}
                  {i + 1 !== newCharacter.lvl1Spells!.length && ', '}
                </li>
              ))}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
