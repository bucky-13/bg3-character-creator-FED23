import { useState } from 'react';
import { CreatorMainContent } from '../components/Creator/CreatorMainContent';
import { SideNavbar } from '../components/Creator/SideNavbar';
import './Creator.scss';
import { Overview } from '../components/Creator/Overview';
import { INewCharacter } from '../models/INewCharater';
import { INewCharContext, NewCharContext } from '../Context/CreatedCharacterContext';
import { dbOrigins } from '../database/dbOrigins';

export const Creator = () => {
  const [currentSection, setCurrentSection] = useState('origin');

  const defaultValue: INewCharContext = {
    newCharacter: dbOrigins[0],
    setNewCharacter: () => {},
  };
  const [newCharacter, setNewCharacter] = useState<INewCharacter>(defaultValue.newCharacter);

  return (
    <NewCharContext.Provider value={{ newCharacter, setNewCharacter }}>
      <div className="creatorContainer">
        <SideNavbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <CreatorMainContent currentSection={currentSection} />
        <Overview />
      </div>
    </NewCharContext.Provider>
  );
};
