import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { lvl0spells } from '../../database/dbLvl0Spells';
import { lvl1spells } from '../../database/dbLvl1Spells';
import { Dispatcher } from '../../models/types';
import { Abilities } from './mainContentComponents/Abilities';
import { Background } from './mainContentComponents/Background';
import { Class } from './mainContentComponents/Class';
import { FavouredEnemy } from './mainContentComponents/FavouredEnemy';
import { FightingStyle } from './mainContentComponents/FightingStyle';
import { Name } from './mainContentComponents/Name';
import { NaturalExplorer } from './mainContentComponents/NaturalExplorer';
import { Origin } from './mainContentComponents/Origin';
import { Race } from './mainContentComponents/Race';
import { Skills } from './mainContentComponents/Skills';
import { CharSpells, ESpellArray } from './mainContentComponents/Spells';
import { Subclass } from './mainContentComponents/Subclass';
import { Subrace } from './mainContentComponents/Subrace';
import { Summary } from './mainContentComponents/Summary';
import { Proceed } from './Proceed';

interface CreatorMainContentProps {
  currentSection: string;
  setCurrentSection: Dispatcher<string>;
  setShowModal: Dispatcher<boolean>;
}

export const CreatorMainContent = ({ currentSection, setCurrentSection, setShowModal }: CreatorMainContentProps) => {
  const { newCharacter } = useNewCharContext();

  return (
    <div className="mainContentContainer">
      {currentSection === 'origin' && <Origin />}
      {currentSection === 'race' && <Race />}
      {currentSection === 'class' && <Class />}
      {currentSection === 'subclass' && <Subclass />}
      {currentSection === 'subrace' && <Subrace />}
      {currentSection === 'background' && <Background />}
      {currentSection === 'abilities' && <Abilities />}
      {currentSection === 'skills' && <Skills />}
      {currentSection === 'name' && <Name />}
      {currentSection === 'fighting style' && <FightingStyle />}
      {currentSection === 'favoured enemy' && <FavouredEnemy />}
      {currentSection === 'natural explorer' && <NaturalExplorer />}
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
      {currentSection === 'summary' && <Summary character={newCharacter} />}
      <Proceed currentSection={currentSection} setCurrentSection={setCurrentSection} setShowModal={setShowModal} />
    </div>
  );
};
