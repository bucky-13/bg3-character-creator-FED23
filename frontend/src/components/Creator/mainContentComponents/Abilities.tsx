import { useNewCharContext } from '../../../Context/CreatedCharacterContext';

export const Abilities = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();

  console.log(newCharacter);
  return <p>Abilities</p>;
};
