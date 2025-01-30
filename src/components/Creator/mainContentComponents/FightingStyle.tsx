import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { dbFightingStyles } from '../../../database/dbFightingStyles';
import { IFightingStyle } from '../../../models/dbModels/IFightingSyles';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';

export const FightingStyle = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedStyle, setSelectedStyle] = useState<IFightingStyle>(newCharacter.fightingStyles![0]);

  const isStylePicked = (style: IFightingStyle): boolean => {
    return style.name === newCharacter.fightingStyles![0].name ? true : false;
  };

  const onChangeStyle = (style: IFightingStyle) => {
    setSelectedStyle(style);
    setNewCharacter({ ...newCharacter, fightingStyles: [style] });
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Fighting Style</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbFightingStyles.map((style, i) => (
            <div key={i} className="styleContainer" onClick={() => onChangeStyle(style)}>
              <button className={isStylePicked(style) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
                {isStylePicked(style) && <img src="./icons/check-mark-icon.png" alt={style.name} />}
              </button>
              <h4>{style.name}</h4>
            </div>
          ))}
        </div>
        {selectedStyle && <SelectedChoiceContainer selectedChoice={selectedStyle} />}
      </div>
    </div>
  );
};
