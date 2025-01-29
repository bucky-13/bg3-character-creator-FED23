import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbBackground, getSkillProficiencies } from '../../../functions/getDbItems';
import { charBackgrounds } from '../../../database/dbCharBackgrounds';
import { ICharBackground } from '../../../models/dbModels/ICharBackground';
import { ISkillProfNewChar } from '../../../models/INewCharater';
import { updateSkillsArray } from '../../../functions/skillFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';

export const Background = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedBg, setSelectedBg] = useState(getDbBackground(newCharacter.background) as ICharBackground);

  const onChangeBg = (changedBg: ICharBackground): void => {
    const skills: ISkillProfNewChar[] = updateSkillsArray(
      newCharacter.skillProficiencies,
      'background',
      changedBg.skillProficiencies,
    );

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
              {removeDUBackground().map((bg, i) => (
                <DisplaySelectionButton selection={bg} onChange={onChangeBg} key={i} typeOfSelection="background" />
              ))}
            </div>
          </div>
        )}
        {selectedBg && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedBg.icon} alt={'icon for a ' + selectedBg.name} />
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
