import { useNewCharContext } from '../../../Context/CreatedCharacterContext';

export const Summary = () => {
  const { newCharacter } = useNewCharContext();

  console.log(newCharacter);
  return (
    <div>
      <p>I AM SUMMARY</p>
    </div>
  );
};
