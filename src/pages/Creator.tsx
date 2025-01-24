import { useState } from 'react';
import { CreatorMainContent } from '../components/Creator/CreatorMainContent';
import { SideNavbar } from '../components/Creator/SideNavbar';
import './Creator.scss';
import { INewCharacter } from '../models/INewCharater';
import { INewCharContext, NewCharContext } from '../Context/CreatedCharacterContext';
import { dbOrigins } from '../database/dbOrigins';
import { SaveCharacterModal } from '../components/Creator/modals/SaveCharacterModal';

export const Creator = () => {
  const [currentSection, setCurrentSection] = useState('origin');
  const [showModal, setShowModal] = useState(false);

  const defaultValue: INewCharContext = {
    newCharacter: { ...dbOrigins[0], name: 'Tav' },
    setNewCharacter: () => {},
  };
  const [newCharacter, setNewCharacter] = useState<INewCharacter>(defaultValue.newCharacter);
  return (
    <NewCharContext.Provider value={{ newCharacter, setNewCharacter }}>
      <div className="creatorContainer">
        <SideNavbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <CreatorMainContent
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          setShowModal={setShowModal}
        />
        {showModal && <SaveCharacterModal setShowModal={setShowModal} />}
      </div>
    </NewCharContext.Provider>
  );
};
