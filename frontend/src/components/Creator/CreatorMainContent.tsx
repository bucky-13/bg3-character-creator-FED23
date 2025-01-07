import { Abilities } from './mainContentComponents/Abilities';
import { Background } from './mainContentComponents/Background';
import { Class } from './mainContentComponents/Class';
import { Origin } from './mainContentComponents/Origin';
import { Race } from './mainContentComponents/Race';
import { Skills } from './mainContentComponents/Skills';
import { Subrace } from './mainContentComponents/Subrace';

interface CreatorMainContentProps {
  currentSection: string;
}

export const CreatorMainContent = ({ currentSection }: CreatorMainContentProps) => {
  return (
    <div className="mainContentContainer">
      {currentSection === 'origin' && <Origin />}
      {currentSection === 'race' && <Race />}
      {currentSection === 'class' && <Class />}
      {currentSection === 'subrace' && <Subrace />}
      {currentSection === 'background' && <Background />}
      {currentSection === 'abilities' && <Abilities />}
      {currentSection === 'skills' && <Skills />}
    </div>
  );
};
