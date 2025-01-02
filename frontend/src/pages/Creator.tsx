import { useState } from 'react';
import { CreatorMainContent } from '../components/Creator/CreatorMainContent';
import { SideNavbar } from '../components/Creator/SideNavbar';
import './Creator.scss';
import { Overview } from '../components/Creator/Overview';

export const Creator = () => {
  const [currentSection, setCurrentSection] = useState('origin');

  return (
    <div className="creatorContainer">
      <SideNavbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <CreatorMainContent currentSection={currentSection} />
      <Overview />
    </div>
  );
};
