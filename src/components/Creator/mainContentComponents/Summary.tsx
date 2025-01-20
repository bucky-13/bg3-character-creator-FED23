import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSkill,
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
        {/* <ul>
          <li>
            <span className="summaryTitle">Abilities:</span>
          </li>
          {newCharacter.abilities.map((ability) => (
            <li key={ability.id}>
              <span className="summarySubTitle">{ability.shortName} </span>
              {displayAbilityTotalPoints(ability)}
            </li>
          ))}
        </ul> */}
        <ul>
          <li>
            <span className="summaryTitle">Character Skill Proficiencies:</span>
          </li>
          {newCharacter.skillProficiencies.map((skill, i) => (
            <li key={skill.id}>
              <span className="summarySubTitle">
                {getDbSkill(skill.id).name}
                {i + 1 !== newCharacter.skillProficiencies.length && ', '}{' '}
              </span>
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
                <span className="summarySubTitle">
                  {armor.name}
                  {i + 1 !== newCharacter.armorProficiencies.length && ', '}
                </span>
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
                <span className="summarySubTitle">
                  {weapon.name}
                  {i + 1 !== newCharacter.weaponProficiencies.length && ', '}{' '}
                </span>
              </li>
            ))
          ) : (
            <li>
              <span className="summarySubTitle">None</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
