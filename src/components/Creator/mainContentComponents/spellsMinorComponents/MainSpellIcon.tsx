import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSelected, isDisabled } from '../../../../functions/spellFunctions';
import { ISpell } from '../../../../models/dbModels/ISpell';
import { ESpellArray } from '../Spells';

interface IMainSpellIconProps {
  spell: ISpell;
  onChangeSpell: (spell: ISpell) => void;
  spellLevel: ESpellArray;
  specialCase?: string;
  amountToPick: number;
}
export const MainSpellIcon = ({ spell, onChangeSpell, spellLevel, specialCase, amountToPick }: IMainSpellIconProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button
      key={spell.id}
      className={isSelected(spell.id, newCharacter, spellLevel, specialCase)}
      disabled={isDisabled(spell.id, newCharacter, spellLevel, amountToPick, specialCase)}
      onClick={() => onChangeSpell(spell)}
    >
      <img src={spell.icon} className="spellChoiceIcon" alt={`Icon of ${spell.name}`} />
    </button>
  );
};
