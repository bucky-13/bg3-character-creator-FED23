import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import './Overview.scss';

export const Overview = () => {
  const { newCharacter } = useNewCharContext();

  return <div className="creatorOverview">{newCharacter.name}</div>;
};
