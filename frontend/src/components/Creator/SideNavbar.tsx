import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { getDbClass } from '../../functions/getDbItems';
import { Dispatcher } from '../../models/types';
import { ButtonSideNavbar } from '../elements/ButtonSideNavbar';
import './SideNavbar.scss';

interface SideNavbarProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}
export const SideNavbar = ({ currentSection, setCurrentSection }: SideNavbarProps) => {
  const { newCharacter } = useNewCharContext();

  const displayCantrips = () => {
    const charClass = getDbClass(newCharacter.startingClass);
    let showCantrips = false;
    if (charClass.cantripsKnown) {
      for (let i = 0; i < charClass.cantripsKnown.length; i++) {
        const yes = charClass.cantripsKnown[i].fromLevel === newCharacter.characterLevel;
        if (yes) showCantrips = true;
      }
    }
    return showCantrips;
  };

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
      {newCharacter.subrace && (
        <ButtonSideNavbar
          textContent="Subrace"
          activeSection={isActiveSection('subrace')}
          setCurrentSection={setCurrentSection}
        />
      )}
      <ButtonSideNavbar
        textContent="Class"
        activeSection={isActiveSection('class')}
        setCurrentSection={setCurrentSection}
      />
      {newCharacter.startingSubclass && (
        <ButtonSideNavbar
          textContent="Subclass"
          activeSection={isActiveSection('subclass')}
          setCurrentSection={setCurrentSection}
        />
      )}
      {displayCantrips() && (
        <ButtonSideNavbar
          textContent="Cantrips"
          activeSection={isActiveSection('cantrips')}
          setCurrentSection={setCurrentSection}
        />
      )}
      <ButtonSideNavbar
        textContent="Background"
        activeSection={isActiveSection('background')}
        setCurrentSection={setCurrentSection}
      />
      <ButtonSideNavbar
        textContent="Abilities"
        activeSection={isActiveSection('abilitiesAndSkills')}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};
