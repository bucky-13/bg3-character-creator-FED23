import { lvl1spells } from '../../../database/dbLvl1Spells';
import { ISpell } from '../../../models/dbModels/ISpell';
import { INewCharacter } from '../../../models/INewCharater';

interface IGivenSpellsSummaryProps {
  character: INewCharacter;
  levelXSpells: number;
}

export const GivenSpellsSummary = ({ character, levelXSpells }: IGivenSpellsSummaryProps) => {
  const getClassSpellsArray = (classId: string, levelXSpells: number): ISpell[] => {
    let spells: ISpell[] = [];
    if (levelXSpells === 1) {
      spells = lvl1spells.filter((o) => o.availableTo.includes(classId));
    }
    return spells;
  };

  const classSpells = getClassSpellsArray(character.startingClass, levelXSpells);

  return (
    <ul>
      <li>
        <span className="summaryTitle">Level {levelXSpells} Spells Given by Class: </span>
      </li>
      {classSpells.map((spell, i) => (
        <li key={i}>
          <div className="spellListItem">
            <img src={spell.icon} alt={spell.name + ' icon'} />
            <span>
              {spell.name}
              {i + 1 !== classSpells.length && ', '}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
