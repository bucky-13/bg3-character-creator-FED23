import { getDbEquipment } from '../../../../functions/getDbItems';
import { ICharClass } from '../../../../models/dbModels/ICharClass';

interface IClassEquipmentFeatureProps {
  selectedClass: ICharClass;
  equipmentType: string;
}
export const ClassEquipmentFeature = ({ selectedClass, equipmentType }: IClassEquipmentFeatureProps) => {
  const classKey = equipmentType === 'Weapon' ? 'weaponProficiencies' : 'armorProficiencies';
  return (
    <div className="featureContainer">
      <p>
        <span>{equipmentType} Proficiencies: </span>
        {selectedClass[classKey].length > 0
          ? selectedClass[classKey].map((o, i) => (
              <span className="whiteSpan" key={o}>
                {getDbEquipment(o).name}
                {i + 1 !== selectedClass[classKey].length && ', '}
              </span>
            ))
          : 'None'}
      </p>
    </div>
  );
};
