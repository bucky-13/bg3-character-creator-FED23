import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject, getSkillProficiencies } from '../../../functions/getDbItems';
import { charBackgrounds } from '../../../database/dbCharBackgrounds';
import { ICharBackground } from '../../../models/dbModels/ICharBackground';
import { changeSkillsProfs, isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { ISkillProfNewChar } from '../../../models/INewCharater';

export const Background = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedBg, setSelectedBg] = useState(getDbObject(newCharacter.background, 'charBgs') as ICharBackground);

  const onChangeBg = (changedBg: ICharBackground): void => {
    const skills: ISkillProfNewChar[] = changeSkillsProfs(newCharacter, 'background', changedBg);

    setSelectedBg(changedBg);
    setNewCharacter({ ...newCharacter, background: changedBg.id, skillProficiencies: skills });
  };

  const removeDUBackground = (): ICharBackground[] => {
    return charBackgrounds.filter((o) => o.id !== 'cbg07');
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Character Background</h2>
      <div className="choicesAndSelectedContainer">
        {newCharacter.origin === 'ori01' && (
          <div>
            <div className="choicesContainer">
              {removeDUBackground().map((bg) => (
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
            <div className="selectedChoiceHeader">
              <img src={selectedBg.icon} />
              <h3>{selectedBg.name}</h3>
            </div>
            <p>{selectedBg.desc}</p>
            <div>
              <h4 className="hInline">Starting Skills: </h4>
              <p>
                {getSkillProficiencies(selectedBg.skillProficiencies)[0].name}
                <span>, </span>
                {getSkillProficiencies(selectedBg.skillProficiencies)[1].name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
