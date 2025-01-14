import { lvl0spells } from '../../database/dbLvl0Spells';
import { lvl1spells } from '../../database/dbLvl1Spells';
import { AbilitiesAndSkills } from './mainContentComponents/AbilitiesAndSkills';
import { Background } from './mainContentComponents/Background';
import { Class } from './mainContentComponents/Class';
import { Origin } from './mainContentComponents/Origin';
import { Race } from './mainContentComponents/Race';
import { CharSpells, ESpellArray } from './mainContentComponents/Spells';
import { Subclass } from './mainContentComponents/Subclass';
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
      {currentSection === 'subclass' && <Subclass />}
      {currentSection === 'subrace' && <Subrace />}
      {currentSection === 'background' && <Background />}
      {currentSection === 'abilities' && <AbilitiesAndSkills />}
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
    </div>
  );
};
