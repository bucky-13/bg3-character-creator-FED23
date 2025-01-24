import { getDbSpell } from '../../../functions/getDbItems';
import { ISpellChociesNewChar } from '../../../models/INewCharater';

interface ISpellSummaryProps {
  title: string;
  spellArray: ISpellChociesNewChar[];
  spellLevel: number;
}

export const SpellSummary = ({ title, spellArray, spellLevel }: ISpellSummaryProps) => {
  return (
    <ul>
      <li>
        <span className="summaryTitle">{title}: </span>
      </li>
      {spellArray.map((spell, i) => (
        <li key={i}>
          <div className="spellListItem">
            <img src={getDbSpell(spell.id, spellLevel).icon} alt={getDbSpell(spell.id, spellLevel).name + ' icon'} />
            <span>
              {getDbSpell(spell.id, spellLevel).name}
              {i + 1 !== spellArray.length && ', '}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
