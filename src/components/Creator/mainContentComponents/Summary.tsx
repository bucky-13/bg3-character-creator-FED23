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
          {newCharacter.skillProficiencies.map((skill) => (
            <li key={skill.id}>
              <span className="summarySubTitle">{getDbSkill(skill.id).name} </span>({skill.fromSource})
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <span className="summaryTitle">Armor:</span>
          </li>
          {newCharacter.armorProficiencies.length > 0 ? (
            newCharacter.armorProficiencies.map((armor) => (
              <li key={armor.id}>
                <span className="summarySubTitle">{armor.name} </span>(
                {armor.fromSource.map((o, i) => (
                  <span>
                    {o}
                    {i + 1 !== armor.fromSource.length && ', '}
                  </span>
                ))}
                )
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
