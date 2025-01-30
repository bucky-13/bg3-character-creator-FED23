import { IProperties } from '../../../../models/dbModels/properties';

interface ISpecialClassCheckmarkProps<T> {
  isXPicked: (x: T) => boolean;
  onChange: (x: T) => void;
  specialClass: T & IProperties;
}
export const SpecialClassCheckmark = <T,>({ isXPicked, specialClass, onChange }: ISpecialClassCheckmarkProps<T>) => {
  return (
    <div className="styleContainer" onClick={() => onChange(specialClass)}>
      <button className={isXPicked(specialClass) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
        {isXPicked(specialClass) && <img src="./icons/check-mark-icon.png" alt={specialClass.name} />}
      </button>
      <h4>{specialClass.name}</h4>
    </div>
  );
};
