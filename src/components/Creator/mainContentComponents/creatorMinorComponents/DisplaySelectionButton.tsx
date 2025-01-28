import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { isActiveIcon } from '../../../../functions/creatorMinorFunctions';
import { INewCharacter } from '../../../../models/INewCharater';

interface IProperties {
  id: string;
  name: string;
  icon: string;
}

interface IDisplaySelectionButtonProps<T> {
  selection: T & IProperties;
  onChange: (selection: T) => void;
  setActiveSelection: (selection: T) => void;
  typeOfSelection: keyof INewCharacter;
}

export const DisplaySelectionButton = <T,>({
  selection,
  onChange,
  setActiveSelection,
  typeOfSelection,
}: IDisplaySelectionButtonProps<T>) => {
  const { newCharacter } = useNewCharContext();

  return (
    <button
      className={isActiveIcon(selection.id, typeOfSelection, newCharacter)}
      onClick={() => onChange(selection)}
      onMouseEnter={() => setActiveSelection(selection)}
    >
      <img src={selection.icon} alt={'icon of a ' + selection.name} height={100} width={100} />
      <p>{selection.name}</p>
    </button>
  );
};
