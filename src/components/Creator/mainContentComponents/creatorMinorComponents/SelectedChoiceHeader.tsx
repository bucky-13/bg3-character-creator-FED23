import { IProperties } from '../../../../models/dbModels/properties';

interface ISelectedChoiceHeaderProps<T> {
  selectedChoice: T & IProperties;
}
export const SelectedChoiceHeader = <T,>({ selectedChoice }: ISelectedChoiceHeaderProps<T>) => {
  return (
    <div className="selectedChoiceHeader">
      <img src={selectedChoice.icon} alt={'icon for a ' + selectedChoice.name} />
      <h3>{selectedChoice.name}</h3>
    </div>
  );
};
