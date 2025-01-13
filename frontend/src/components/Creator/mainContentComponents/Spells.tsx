import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { ISpell } from '../../../models/dbModels/ISpell';

export interface ICantripsProps {
  spellLevel: number;
  title: string;
  spellList: ISpell[];
}

export const CharSpells = ({ spellLevel, title, spellList }: ICantripsProps) => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedSpell, setSelectedSpell] = useState<ISpell>(spellList[0]);
  console.log(newCharacter);

  const isSpellAvailable = (spell: ISpell) => {
    if (spell.availableTo.includes(newCharacter.startingClass)) return true;
    if (newCharacter.startingSubclass && spell.availableTo.includes(newCharacter.startingSubclass)) return true;
    return false;
  };

  const onChangeSpell = (spell: ISpell) => {
    setSelectedSpell(spell);
  };
  return (
    <div className="creatorCenterContainer">
      <h2>{title}</h2>

      <div className="choicesAndSelectedContainer">
        <div>
          <div className="choicesContainer">
            {spellList.map(
              (spell) =>
                isSpellAvailable(spell) && (
                  <div
                    key={spell.id}
                    className={isActiveIcon(spell.id, 'subrace', newCharacter)}
                    onClick={() => onChangeSpell(spell)}
                  >
                    <img src={spell.icon} className="spellChoiceIcon" />
                  </div>
                ),
            )}
          </div>
        </div>

        {selectedSpell && (
          <div className="selectedSpellContainer">
            <div className="selectedSpellHeader">
              <img src={selectedSpell.icon} />
              <h3>
                {selectedSpell.name} ({selectedSpell.school})
              </h3>
            </div>

            <p>{selectedSpell.desc}</p>
            <h4 className="featureH">Features:</h4>
            {selectedSpell.hasConcentration && (
              <div className="iconPContainer">
                <img src="./icons/features/Concentration.png" />
                <p>Concentration Spell</p>
              </div>
            )}
            {selectedSpell.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
