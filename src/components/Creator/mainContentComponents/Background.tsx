import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbBackground, getSkillProficiencies } from '../../../functions/getDbItems';
import { charBackgrounds } from '../../../database/dbCharBackgrounds';
import { ICharBackground } from '../../../models/dbModels/ICharBackground';
import { ISkillProfNewChar } from '../../../models/INewCharater';
import { updateSkillsArray } from '../../../functions/skillFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SelectedManualFeature } from './creatorMinorComponents/SelectedManualFeature';
import { ESkills } from '../../../database/dbSkills';

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

  const generateSkillsGivenString = (skills: ESkills[]): string => {
    return `${getSkillProficiencies(skills)[0].name}, ${getSkillProficiencies(skills)[1].name}`;
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
          <SelectedChoiceContainer selectedChoice={selectedBg}>
            <SelectedManualFeature
              title="Skills Proficiencies Given"
              desc={generateSkillsGivenString(selectedBg.skillProficiencies)}
            />
          </SelectedChoiceContainer>
        )}
      </div>
    </div>
  );
};
