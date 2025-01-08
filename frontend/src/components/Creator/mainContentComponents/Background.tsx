import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject, getSkillProficiencies } from '../../../functions/getDbItems';
import { charBackgrounds } from '../../../database/dbCharBackgrounds';
import { ICharBackground } from '../../../models/dbModels/ICharBackground';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { ISkillProfNewChar } from '../../../models/INewCharater';

export const Background = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedBg, setSelectedBg] = useState(getDbObject(newCharacter.background, 'charBgs') as ICharBackground);

  const onChangeBg = (changedBg: ICharBackground): void => {
    setSelectedBg(changedBg);
    let skills: ISkillProfNewChar[] = [];
    for (let i = 0; i < changedBg.skillProficienciesGiven.length; i++) {
      let skill: ISkillProfNewChar = {
        id: changedBg.skillProficienciesGiven[i],
        fromSource: 'origin',
        canChange: false,
      };
      skills.push(skill);
    }

    setNewCharacter({ ...newCharacter, background: changedBg.id, skillProficiencies: skills });
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Character Background</h2>
      <div className="choicesAndSelectedContainer">
        {(!newCharacter.hasLockedChoices || newCharacter.origin === 'ori01') && (
          <div>
            <div className="choicesContainer">
              {charBackgrounds.map((bg) => (
                <div
                  key={bg.id}
                  className={isActiveIcon(bg.id, 'background', newCharacter)}
                  onClick={() => onChangeBg(bg)}
                >
                  <img src={bg.icon} />
                  <p>{bg.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedBg && (
          <div className="selectedChoiceContainer">
            <h3>{selectedBg.name}</h3>
            <p>{selectedBg.desc}</p>
            <div>
              <h4 className="hInline">Starting Skills: </h4>
              <p>
                {getSkillProficiencies(selectedBg.skillProficienciesGiven)[0].name}
                <span>, </span>
                {getSkillProficiencies(selectedBg.skillProficienciesGiven)[1].name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
