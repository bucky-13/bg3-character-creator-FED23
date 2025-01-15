import { Dispatcher } from '../../models/types';

interface ButtonSideNavbarProps {
  textContent: string;
  activeSection: boolean;
  setCurrentSection: Dispatcher<string>;
}

export const ButtonSideNavbar = ({ textContent, activeSection, setCurrentSection }: ButtonSideNavbarProps) => {
  const navigateToSection = (section: string) => {
    setCurrentSection(section.toLowerCase());
  };

  return (
    <button className={activeSection ? 'activeSectionBtn' : ''} onClick={() => navigateToSection(textContent)}>
      {textContent}
    </button>
  );
};
