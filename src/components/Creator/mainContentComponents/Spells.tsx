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
  isSpellAvailable,
  totalSpellsSelected,
} from '../../../functions/spellFunctions';
import { MainSpellIcon } from './spellsMinorComponents/MainSpellIcon';
import { SpellFromOtherSource } from './spellsMinorComponents/SpellFromOtherSource';
import { SelectedSpell } from './spellsMinorComponents/SelectedSpell';

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
                  <MainSpellIcon
                    spell={spell}
                    onChangeSpell={onChangeSpell}
                    spellLevel={spellLevel}
                    specialCase={specialCase}
                    amountToPick={amountToPick}
                  />
                ),
            )}
            {hasSpellsFromOtherSource(newCharacter, spellLevel) && !specialCase && (
              <SpellFromOtherSource title={title} spellList={spellList} spellLevel={spellLevel} />
            )}
          </div>
        </div>

        {activeSpell && <SelectedSpell selectedSpell={activeSpell} />}
      </div>
    </div>
  );
};
