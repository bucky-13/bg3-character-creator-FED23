import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbSkill, getDbSpell } from '../../../functions/getDbItems';
import { dbNaturalExplorer } from '../../../models/dbModels/dbNaturalExplorer';
import { INaturalExplorer } from '../../../models/dbModels/INaturalExplorer';
import { addSkillsFromNewSource, removeRangerSkillFromOldSouce } from '../../../functions/skillFunctions';
import { removeSpell } from '../../../functions/spellFunctions';
import { ISkillProfNewChar, ISpellChociesNewChar } from '../../../models/INewCharater';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SelectedManualFeature } from './creatorMinorComponents/SelectedManualFeature';

export const NaturalExplorer = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedNatural, setSelectedNatural] = useState<INaturalExplorer>(dbNaturalExplorer[2]);

  const isStylePicked = (nature: INaturalExplorer): boolean => {
    return nature.name === newCharacter.naturalExplorer![0].name ? true : false;
  };

  const updateSpells = (explorer: INaturalExplorer): ISpellChociesNewChar[] | undefined => {
    let newSpells = newCharacter.lvl1Spells;
    if (explorer.lvl1spell) {
      let newSpell = [{ id: explorer.lvl1spell, fromSource: 'ccl08', canChange: true, specialCase: 'no' }];
      if (newSpells && newSpells.length > 0) {
        newSpells = newSpells.concat(newSpell);
      } else {
        newSpells = newSpell;
      }
    } else {
      if (newSpells && newSpells.length > 0) {
        newSpells = removeSpell(newSpells, 'spl124');
      }
    }
    return newSpells;
  };

  const updateProfs = (explorer: INaturalExplorer): ISkillProfNewChar[] => {
    let skillProfs = newCharacter.skillProficiencies;

    if (explorer.skillProficiencies) {
      skillProfs = addSkillsFromNewSource(newCharacter.skillProficiencies, 'class', [explorer.skillProficiencies]);
    } else {
      skillProfs = removeRangerSkillFromOldSouce(newCharacter.skillProficiencies, 'class', 'ski03');
    }
    return skillProfs;
  };

  const onChangeExplorer = (explorer: INaturalExplorer) => {
    const skillProfs = updateProfs(explorer);
    const newSpells = updateSpells(explorer);

    setSelectedNatural(explorer);
    setNewCharacter({
      ...newCharacter,
      naturalExplorer: [explorer],
      skillProficiencies: skillProfs,
      lvl1Spells: newSpells,
    });
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Natural Explorer</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbNaturalExplorer.map((explorer, i) => (
            <div key={i} className="styleContainer" onClick={() => onChangeExplorer(explorer)}>
              <button className={isStylePicked(explorer) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
                {isStylePicked(explorer) && <img src="./icons/check-mark-icon.png" alt={explorer.name} />}
              </button>
              <h4>{explorer.name}</h4>
            </div>
          ))}
        </div>
        {selectedNatural && (
          <SelectedChoiceContainer selectedChoice={selectedNatural}>
            {selectedNatural.skillProficiencies && (
              <SelectedManualFeature
                title="Skill Proficiency"
                desc={getDbSkill(selectedNatural.skillProficiencies).name}
              />
            )}
            {selectedNatural.lvl1spell && (
              <SelectedManualFeature
                title="Level 1 spell"
                desc={getDbSpell(selectedNatural.lvl1spell, 1).name}
                icon={getDbSpell(selectedNatural.lvl1spell, 1).icon}
              />
            )}
            {selectedNatural.resistance && (
              <SelectedManualFeature title="Gain Resistance" desc={selectedNatural.resistance} />
            )}
          </SelectedChoiceContainer>
        )}
      </div>
    </div>
  );
};
