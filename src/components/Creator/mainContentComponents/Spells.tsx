import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import './Spells.scss';
import { ISpell } from '../../../models/dbModels/ISpell';
import { ISpellChociesNewChar } from '../../../models/INewCharater';
import {
  createSpellSource,
  getCantripTotal,
  getSpellTotal,
  hasSpellsFromOtherSource,
  isDisabled,
  isSelected,
  isSpellAvailable,
  isSpellFromOtherSource,
  totalSpellsSelected,
} from '../../../functions/spellFunctions';

export enum ESpecialSpellCases {
  HighElf = 'highelf',
  NatureDomain = 'nature',
  ArcaneTrickster = 'trickster',
  EldrichKnight = 'eldritch',
}

export enum ESpellArray {
  Lvl0 = 'cantrips',
  Lvl1 = 'lvl1Spells',
  Lvl2 = 'lvl2Spells',
  Lvl3 = 'lvl3Spells',
  Lvl4 = 'lvl4Spells',
  Lvl5 = 'lvl5Spells',
  Lvl6 = 'lvl6Spells',
}

export interface ICantripsProps {
  spellLevel: ESpellArray;
  title: string;
  spellList: ISpell[];
  specialCase?: string;
}

export const CharSpells = ({ spellLevel, title, spellList, specialCase }: ICantripsProps) => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [activeSpell, setActiveSpell] = useState<ISpell>(spellList[0]);
  const amountToPick =
    spellLevel === ESpellArray.Lvl0 ? getCantripTotal(newCharacter, specialCase) : getSpellTotal(newCharacter);

  const setIsSpellTaken = (spell: ISpell) => {
    if (specialCase) {
      return newCharacter[spellLevel]!.find((o) => o.id === spell.id && o.fromSource === 'ccl12');
    } else {
      return newCharacter[spellLevel]!.find((o) => o.id === spell.id && o.fromSource === newCharacter.startingClass);
    }
  };

  const filterSpellArrayNoSpecialCase = (o: ISpellChociesNewChar, spell: ISpell) => {
    if (o.id !== spell.id) return o;
    if (o.fromSource !== newCharacter.startingClass) return o;
  };

  const updateSpellList = (spell: ISpell) => {
    const isSpellTaken = newCharacter[spellLevel] ? setIsSpellTaken(spell) : undefined;

    if (isSpellTaken) {
      let updatedNewSpellArray = newCharacter[spellLevel];
      if (specialCase) {
        updatedNewSpellArray = newCharacter[spellLevel]!.filter(
          (o) => o.id !== spell.id && o.specialCase !== 'highelfcatnip',
        );
      } else {
        updatedNewSpellArray = newCharacter[spellLevel]!.filter((o) => filterSpellArrayNoSpecialCase(o, spell));
      }
      setNewCharacter({ ...newCharacter, [spellLevel]: updatedNewSpellArray });
    } else {
      const newSpell: ISpellChociesNewChar = {
        id: spell.id,
        fromSource: createSpellSource(newCharacter, specialCase),
        canChange: true,
        specialCase: specialCase ? 'highelfcatnip' : 'no',
      };
      if (newCharacter[spellLevel]) {
        setNewCharacter({ ...newCharacter, [spellLevel]: newCharacter[spellLevel]?.concat([newSpell]) });
      } else {
        setNewCharacter({ ...newCharacter, [spellLevel]: [newSpell] });
      }
    }
  };

  const onChangeSpell = (spell: ISpell) => {
    updateSpellList(spell);
    setActiveSpell(spell);
  };

  const displayAlertText = (): boolean => {
    const spellsTaken = totalSpellsSelected(newCharacter[spellLevel], newCharacter, specialCase);
    return spellsTaken === amountToPick ? false : true;
  };

  return (
    <div className="creatorCenterContainer">
      <h2>{title}</h2>
      <p className={displayAlertText() ? 'alertText' : ''}>
        {title} chosen: {totalSpellsSelected(newCharacter[spellLevel], newCharacter, specialCase)} / {amountToPick}
      </p>
      <div className="choicesAndSelectedContainer">
        <div>
          <div className="choicesContainer">
            {spellList.map(
              (spell) =>
                isSpellAvailable(spell, newCharacter, specialCase) && (
                  <button
                    key={spell.id}
                    className={isSelected(spell.id, newCharacter, spellLevel, specialCase)}
                    disabled={isDisabled(spell.id, newCharacter, spellLevel, amountToPick, specialCase)}
                    onClick={() => onChangeSpell(spell)}
                    onMouseEnter={() => setActiveSpell(spell)}
                  >
                    <img src={spell.icon} className="spellChoiceIcon" alt={spell.name} />
                  </button>
                ),
            )}
            {hasSpellsFromOtherSource(newCharacter, spellLevel) && !specialCase && (
              <div>
                <h3>{title} from other sources:</h3>
                <p>
                  You already know these spells from other sources. If a spell can be selected again, it will give you
                  access to a second version of the spell with another spellcasting modifier.
                </p>
                {spellList.map(
                  (spell) =>
                    isSpellFromOtherSource(newCharacter, spellLevel, spell.id) && (
                      <div key={spell.id} className="alreadySelectedSpellContainer">
                        <button className="spellChoiceBtn alreadySelectedButton" disabled>
                          <img src={spell.icon} className="spellChoiceIcon" alt={spell.name} />
                        </button>
                        {spell.name}
                      </div>
                    ),
                )}
              </div>
            )}
          </div>
        </div>

        {activeSpell && (
          <div className="selectedSpellContainer">
            <div className="selectedSpellHeader">
              <img src={activeSpell.icon} alt={activeSpell.name} />
              <h3>
                {activeSpell.name} ({activeSpell.school})
              </h3>
            </div>

            <p>{activeSpell.desc}</p>
            <h4 className="featureH">Features:</h4>
            {activeSpell.hasConcentration && (
              <div className="iconPContainer">
                <img src="./icons/features/Concentration.png" alt="Spell have Concentration" />
                <p>Concentration Spell</p>
              </div>
            )}
            {activeSpell.isRitual && (
              <div className="iconPContainer">
                <img src="./icons/features/Ritual.png" alt="Is a Ritual Spell" />
                <p>Ritual Spell</p>
              </div>
            )}
            {activeSpell.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
