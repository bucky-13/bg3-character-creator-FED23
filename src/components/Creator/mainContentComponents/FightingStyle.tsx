import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { dbFightingStyles } from '../../../database/dbFightingStyles';
import { IFightingStyle } from '../../../models/dbModels/IFightingSyles';

export const FightingStyle = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedStyle, setSelectedStyle] = useState<IFightingStyle>(newCharacter.fightingStyles![0]);

  const isStylePicked = (style: IFightingStyle): boolean => {
    return style.name === newCharacter.fightingStyles![0].name ? true : false;
  };

  const onChangeStyle = (style: IFightingStyle) => {
    setNewCharacter({ ...newCharacter, fightingStyles: [style] });
  };

  const displaySelectedStyle = (style: IFightingStyle) => {
    setSelectedStyle(style);
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Fighting Style</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbFightingStyles.map((style, i) => (
            <div
              key={i}
              className="styleContainer"
              onClick={() => onChangeStyle(style)}
              onMouseEnter={() => displaySelectedStyle(style)}
            >
              <button className={isStylePicked(style) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
                {isStylePicked(style) && <img src="./icons/check-mark-icon.png" alt={style.name} />}
              </button>
              <h4>{style.name}</h4>
            </div>
          ))}
        </div>
        {selectedStyle && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <h3>{selectedStyle.name}</h3>
            </div>
            <p>{selectedStyle.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};
