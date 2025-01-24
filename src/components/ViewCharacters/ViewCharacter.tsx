import { Link, useLoaderData } from 'react-router-dom';
import { INewCharacter } from '../../models/INewCharater';
import { Summary } from '../Creator/mainContentComponents/Summary';

export const ViewCharacter = () => {
  const character = useLoaderData() as INewCharacter;
  return (
    <div className="createdCharcontainer">
      <div className="backToCharsContainer">
        <div>
          <Link to={'/view'}>
            <button>Back to Characters</button>
          </Link>
        </div>
      </div>
      <Summary character={character} />;
    </div>
  );
};
