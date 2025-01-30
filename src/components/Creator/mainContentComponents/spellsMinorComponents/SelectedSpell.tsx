import { ISpell } from '../../../../models/dbModels/ISpell';
import { MiniSpellIconWithName } from './MiniSpellIconWithName';

interface ISelectedSpellProps {
  selectedSpell: ISpell;
}
export const SelectedSpell = ({ selectedSpell }: ISelectedSpellProps) => {
  return (
    <div className="selectedSpellContainer">
      <div className="selectedSpellHeader">
        <img src={selectedSpell.icon} alt={selectedSpell.name} />
        <h3>
          {selectedSpell.name} ({selectedSpell.school})
        </h3>
      </div>

      <p>{selectedSpell.desc}</p>
      <h4 className="featureH">Features:</h4>
      {selectedSpell.hasConcentration && <MiniSpellIconWithName name="Concentration" />}
      {selectedSpell.isRitual && <MiniSpellIconWithName name="Ritual" />}
      {selectedSpell.details.map((detail) => (
        <p key={detail}>{detail}</p>
      ))}
    </div>
  );
};
