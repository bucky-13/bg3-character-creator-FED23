import { Dispatcher } from '../../models/types';

interface ButtonSideNavbarProps {
  textContent: string;
  activeSection: boolean;
  setCurrentSection: Dispatcher<string>;
  displayWarning?: boolean;
}

export const ButtonSideNavbar = ({
  textContent,
  activeSection,
  setCurrentSection,
  displayWarning,
}: ButtonSideNavbarProps) => {
  const navigateToSection = (section: string) => {
    setCurrentSection(section.toLowerCase());
  };

  return (
    <button className={activeSection ? 'activeSectionBtn' : ''} onClick={() => navigateToSection(textContent)}>
      {displayWarning && (
        <div className="alertDiv">
          <h4>!</h4>
        </div>
      )}
      <p>{textContent}</p>
    </button>
  );
};
