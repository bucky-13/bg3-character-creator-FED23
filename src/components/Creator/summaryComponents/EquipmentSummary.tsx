import { INewEquipmentProficiencies } from '../../../models/dbModels/IEquipmentProficiencies';

interface IEquipemtSummaryProps {
  title: string;
  equipmentArray: INewEquipmentProficiencies[];
}

export const EquipmentSummary = ({ title, equipmentArray }: IEquipemtSummaryProps) => {
  return (
    <ul>
      <li>
        <span className="summaryTitle">{title}:</span>
      </li>
      {equipmentArray.length > 0 ? (
        equipmentArray.map((armor, i) => (
          <li key={armor.id}>
            {armor.name}
            {i + 1 !== equipmentArray.length && ', '}
          </li>
        ))
      ) : (
        <li>
          <span className="summarySubTitle">None</span>
        </li>
      )}
    </ul>
  );
};
