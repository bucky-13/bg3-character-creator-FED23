import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <p>
      Place not found, go back to{' '}
      <span>
        <Link to={'/'}>Home</Link>
      </span>
    </p>
  );
};
