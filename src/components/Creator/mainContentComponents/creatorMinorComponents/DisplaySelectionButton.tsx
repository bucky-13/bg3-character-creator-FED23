import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isActiveIcon } from '../../../../functions/creatorMinorFunctions';
import { IProperties } from '../../../../models/dbModels/properties';
import { INewCharacter } from '../../../../models/INewCharater';

interface IDisplaySelectionButtonProps<T> {
  selection: T & IProperties;
  onChange: (selection: T) => void;
  typeOfSelection: keyof INewCharacter;
}

export const DisplaySelectionButton = <T,>({
  selection,
  onChange,
  typeOfSelection,
}: IDisplaySelectionButtonProps<T>) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button className={isActiveIcon(selection.id, typeOfSelection, newCharacter)} onClick={() => onChange(selection)}>
      <img src={selection.icon} alt={'icon of a ' + selection.name} height={100} width={100} />
      <p>{selection.name}</p>
    </button>
  );
};
