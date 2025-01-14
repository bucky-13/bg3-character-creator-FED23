import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import './Spells.scss';
import { ISpell } from '../../../models/dbModels/ISpell';
import { getDbClass } from '../../../functions/getDbItems';
import { ISkillProfNewChar } from '../../../models/INewCharater';

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
}

export const CharSpells = ({ spellLevel, title, spellList }: ICantripsProps) => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [activeSpell, setActiveSpell] = useState<ISpell>(spellList[0]);

  const getCantripTotal = (): number => {
    const charClass = getDbClass(newCharacter.startingClass);
    const cantripObject = charClass.cantripsKnown!.find((arr) => arr.fromLevel === newCharacter.characterLevel);
    return cantripObject!.amount;
  };

  const getSpellTotal = (): number => {
    const charClass = getDbClass(newCharacter.startingClass);
    return newCharacter.characterLevel === 1 ? charClass.spellsOnStartingLevel! : charClass.spellsPerLevel!;
  };

  const amountToPick = spellLevel === ESpellArray.Lvl0 ? getCantripTotal() : getSpellTotal();

  const isSpellAvailable = (spell: ISpell) => {
    if (spell.availableTo.includes(newCharacter.startingClass)) return true;
    if (newCharacter.startingSubclass && spell.availableTo.includes(newCharacter.startingSubclass)) return true;
    return false;
  };

  const updateSpellList = (spell: ISpell) => {
    const isSpellTaken = newCharacter[spellLevel] ? newCharacter[spellLevel].find((o) => o.id === spell.id) : undefined;

    if (isSpellTaken) {
      const updatedNewSpellArray = newCharacter[spellLevel]!.filter((o) => o.id !== spell.id);
      setNewCharacter({ ...newCharacter, [spellLevel]: updatedNewSpellArray });
    } else {
      let newSpell: ISkillProfNewChar = { id: spell.id, fromSource: spellLevel, canChange: true };
      if (newCharacter[spellLevel]) {
        setNewCharacter({ ...newCharacter, [spellLevel]: newCharacter[spellLevel]?.concat([newSpell]) });
      } else {
        setNewCharacter({ ...newCharacter, [spellLevel]: [newSpell] });
      }
    }
  };

  const totalSpellsSelected = (spellArray: ISkillProfNewChar[] | undefined, source: string): number => {
    if (spellArray) {
      const arrayWithNiceSource = spellArray.filter((o) => o.fromSource === source);
      return arrayWithNiceSource.length;
    } else {
      return 0;
    }
  };

  const isDisabled = (spellId: string): boolean => {
    if (newCharacter[spellLevel]) {
      const spellIsSelected = newCharacter[spellLevel].find((o) => o.id === spellId);
      if (spellIsSelected && spellIsSelected.fromSource !== spellLevel) return true;

      if (spellIsSelected && spellIsSelected.fromSource === spellLevel) return false;
      return amountToPick - totalSpellsSelected(newCharacter[spellLevel], spellLevel) <= 0 ? true : false;
    } else {
      return false;
    }
  };

  const isSelected = (spellId: string): string => {
    const isOnSpellList = newCharacter[spellLevel] ? newCharacter[spellLevel].find((o) => o.id === spellId) : undefined;
    return isOnSpellList ? 'spellChoiceBtn selectedChoice' : 'spellChoiceBtn';
  };

  const onChangeSpell = (spell: ISpell) => {
    updateSpellList(spell);
    setActiveSpell(spell);
  };
  return (
    <div className="creatorCenterContainer">
      <h2>{title}</h2>
      <p>
        {title} chosen: {totalSpellsSelected(newCharacter[spellLevel], spellLevel)} / {amountToPick}
      </p>
      <div className="choicesAndSelectedContainer">
        <div>
          <div className="choicesContainer">
            {spellList.map(
              (spell) =>
                isSpellAvailable(spell) && (
                  <button
                    key={spell.id}
                    className={isSelected(spell.id)}
                    disabled={isDisabled(spell.id)}
                    onClick={() => onChangeSpell(spell)}
                  >
                    <img src={spell.icon} className="spellChoiceIcon" />
                  </button>
                ),
            )}
          </div>
        </div>

        {activeSpell && (
          <div className="selectedSpellContainer">
            <div className="selectedSpellHeader">
              <img src={activeSpell.icon} />
              <h3>
                {activeSpell.name} ({activeSpell.school})
              </h3>
            </div>

            <p>{activeSpell.desc}</p>
            <h4 className="featureH">Features:</h4>
            {activeSpell.hasConcentration && (
              <div className="iconPContainer">
                <img src="./icons/features/Concentration.png" />
                <p>Concentration Spell</p>
              </div>
            )}
            {activeSpell.isRitual && (
              <div className="iconPContainer">
                <img src="./icons/features/Ritual.png" />
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
