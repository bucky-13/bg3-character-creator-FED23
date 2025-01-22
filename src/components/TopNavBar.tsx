import { NavLink } from 'react-router-dom';

export const TopNavbar = () => {
  return (
    <>
      <nav>
        <NavLink to={'/'}>
          <span className="siteLogo">BG3 Character Creator</span>
        </NavLink>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/creator'}>Create Character</NavLink>
          </li>
          <li>
            <NavLink to={'/view'}>View Characters</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
