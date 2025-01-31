import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="viewCharactersMainContainer">
      <div className="viewCharactersContainer">
        <h2>
          Welcome to the <span className="siteLogoText">BG3 Character Creator</span>
        </h2>
        <p>
          Here you can either <Link to={'/creator'}>create a new character</Link> for Baldur's Gate 3 or{' '}
          <Link to={'/view'}>view characters</Link> that others have created.
        </p>
        <p className="lastLineHome">At the moment you can make a character up to level 1.</p>
      </div>
    </div>
  );
};
