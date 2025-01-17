import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { displayAbilityTotalPoints } from '../../../functions/creatorMinorFunctions';
import {
  getDbBackground,
  getDbClass,
  getDbOrigin,
  getDbRace,
  getDbSkill,
  getDbSubClass,
  getDbSubrace,
} from '../../../functions/getDbItems';
import { TextItem } from '../summaryComponents/TextItem';
import './Summary.scss';

export const Summary = () => {
  const { newCharacter } = useNewCharContext();

  console.log(newCharacter);

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Character Summary</h2>
      <div className="summarySecondaryContainer">
        <TextItem title="Origin" name={getDbOrigin(newCharacter.origin).name} />
        <TextItem title="Race" name={getDbRace(newCharacter.race).name} />
        {newCharacter.subrace && <TextItem title="Subrace" name={getDbSubrace(newCharacter.subrace).name} />}
        <TextItem title="Class" name={getDbClass(newCharacter.startingClass).name} />
        {newCharacter.startingSubclass && (
          <TextItem title="Subclass" name={getDbSubClass(newCharacter.startingSubclass).name} />
        )}
        <TextItem title="Background" name={getDbBackground(newCharacter.background).name} />

        <ul>
          <li>
            <span className="summaryTitle">Abilities:</span>
          </li>
          {newCharacter.abilities.map((ability) => (
            <li key={ability.id}>
              <span className="summarySubTitle">{ability.shortName} </span>
              {displayAbilityTotalPoints(ability)}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <span className="summaryTitle">Character Skills:</span>
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
          {newCharacter.skillProficiencies.map((skill) => (
            <li key={skill.id}>
              <span className="summarySubTitle">{getDbSkill(skill.id).name} </span>({skill.fromSource})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
