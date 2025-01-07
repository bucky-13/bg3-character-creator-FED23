import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { Dispatcher } from '../../models/types';
import { ButtonSideNavbar } from '../elements/ButtonSideNavbar';
import './SideNavbar.scss';

interface SideNavbarProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}
export const SideNavbar = ({ currentSection, setCurrentSection }: SideNavbarProps) => {
  const { newCharacter } = useNewCharContext();

  console.log(newCharacter);

  const isActiveSection = (section: string): boolean => {
    return currentSection === section ? true : false;
  };
  return (
    <div className="sideNavbar">
      <ButtonSideNavbar
        textContent="Origin"
        activeSection={isActiveSection('origin')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Race"
        activeSection={isActiveSection('race')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Class"
        activeSection={isActiveSection('class')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Background"
        activeSection={isActiveSection('background')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Abilities"
        activeSection={isActiveSection('abilities')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Skills"
        activeSection={isActiveSection('skills')}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};
