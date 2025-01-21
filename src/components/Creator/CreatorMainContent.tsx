import { lvl0spells } from '../../database/dbLvl0Spells';
import { lvl1spells } from '../../database/dbLvl1Spells';
import { Dispatcher } from '../../models/types';
import { AbilitiesAndSkills } from './mainContentComponents/AbilitiesAndSkills';
import { Background } from './mainContentComponents/Background';
import { Class } from './mainContentComponents/Class';
import { FightingStyle } from './mainContentComponents/FightingStyle';
import { Name } from './mainContentComponents/Name';
import { Origin } from './mainContentComponents/Origin';
import { Race } from './mainContentComponents/Race';
import { CharSpells, ESpellArray } from './mainContentComponents/Spells';
import { Subclass } from './mainContentComponents/Subclass';
import { Subrace } from './mainContentComponents/Subrace';
import { Summary } from './mainContentComponents/Summary';
import { Proceed } from './Proceed';

interface CreatorMainContentProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
}

export const CreatorMainContent = ({ currentSection, setCurrentSection }: CreatorMainContentProps) => {
  return (
    <div className="mainContentContainer">
      {currentSection === 'origin' && <Origin />}
      {currentSection === 'race' && <Race />}
      {currentSection === 'class' && <Class />}
      {currentSection === 'subclass' && <Subclass />}
      {currentSection === 'subrace' && <Subrace />}
      {currentSection === 'background' && <Background />}
      {currentSection === 'abilities' && <AbilitiesAndSkills />}
      {currentSection === 'name' && <Name />}
      {currentSection === 'fighting style' && <FightingStyle />}
      {currentSection === 'cantrips' && (
        <CharSpells spellLevel={ESpellArray.Lvl0} title="Cantrips" spellList={lvl0spells} />
      )}
      {currentSection === 'high elf cantrip' && (
        <CharSpells
          spellLevel={ESpellArray.Lvl0}
          title="High Elf Cantrip"
          spellList={lvl0spells}
          specialCase="highElfCantrip"
        />
      )}
      {currentSection === 'spells' && (
        <CharSpells spellLevel={ESpellArray.Lvl1} title="Spells" spellList={lvl1spells} />
      )}
      {currentSection === 'summary' && <Summary />}
      <Proceed currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};
