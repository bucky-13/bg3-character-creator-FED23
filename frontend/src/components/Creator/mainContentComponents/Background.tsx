import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbObject, getSkillProficiencies } from '../../../functions/getDbItems';
import { charBackgrounds } from '../../../database/dbCharBackgrounds';
import { ICharBackground } from '../../../models/dbModels/ICharBackground';

export const Background = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedBg, setSelectedBg] = useState(getDbObject(newCharacter.background, 'charBgs') as ICharBackground);
  const [skills, setSkills] = useState(getSkillProficiencies(selectedBg.skillProficienciesGiven));

  const isActiveIcon = (icon: string): string => {
    return icon === newCharacter.background ? 'racePortraitContainer activeRace' : 'racePortraitContainer';
  };

  const onChangeBg = (changedBg: ICharBackground): void => {
    setSelectedBg(changedBg);
    setNewCharacter({ ...newCharacter, background: changedBg.id });
    setSkills(getSkillProficiencies(selectedBg.skillProficienciesGiven));
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Character Background</h2>
      <div className="choicesAndSelectedContainer">
        {(!newCharacter.hasLockedChoices || newCharacter.origin === 'ori01') && (
          <div>
            <div className="choicesContainer">
              {charBackgrounds.map((bg) => (
                <div key={bg.id} className={isActiveIcon(bg.id)} onClick={() => onChangeBg(bg)}>
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
            <p>
              <h4 className="hInline">Starting Skills: </h4>
              {skills[0].name}, {skills[1].name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
