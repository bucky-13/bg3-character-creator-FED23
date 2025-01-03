import { useMemo, useState } from 'react';
import { CreatorMainContent } from '../components/Creator/CreatorMainContent';
import { SideNavbar } from '../components/Creator/SideNavbar';
import './Creator.scss';
import { Overview } from '../components/Creator/Overview';
import { INewCharacter } from '../models/!NewCharater';
import { dbDefaultCharacter } from '../database/dbDefaultCharacter';
import { INewCharContext, NewCharContext } from '../Context/CreatedCharacterContext';

export const Creator = () => {
  const [currentSection, setCurrentSection] = useState('origin');

  const defaultValue: INewCharContext = {
    newCharacter: dbDefaultCharacter,
    setNewCharacter: () => {},
  };
  const [newCharacter, setNewCharacter] = useState<INewCharacter>(defaultValue.newCharacter);

  console.log(newCharacter);

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
