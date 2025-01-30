import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isSpellFromOtherSource } from '../../../../functions/spellFunctions';
import { ISpell } from '../../../../models/dbModels/ISpell';
import { ESpellArray } from '../Spells';

interface ISpellFromOtherSourceProps {
  title: string;
  spellList: ISpell[];
  spellLevel: ESpellArray;
}

export const SpellFromOtherSource = ({ title, spellList, spellLevel }: ISpellFromOtherSourceProps) => {
  const { newCharacter } = useNewCharContext();
  return (
    <div>
      <h3>{title} from other sources:</h3>
      <p>
        You already know these spells from other sources. If a spell can be selected again, it will give you access to a
        second version of the spell with another spellcasting modifier.
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
  );
};
