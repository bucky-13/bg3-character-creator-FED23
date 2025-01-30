import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { dbFightingStyles } from '../../../database/dbFightingStyles';
import { IFightingStyle } from '../../../models/dbModels/IFightingSyles';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SpecialClassCheckmark } from './creatorMinorComponents/SpecialClassCheckmark';

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
            <SpecialClassCheckmark isXPicked={isStylePicked} onChange={onChangeStyle} specialClass={style} key={i} />
          ))}
        </div>
        {selectedStyle && <SelectedChoiceContainer selectedChoice={selectedStyle} />}
      </div>
    </div>
  );
};
