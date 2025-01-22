import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbSkill, getDbSpell } from '../../../functions/getDbItems';
import { dbNaturalExplorer } from '../../../models/dbModels/dbNaturalExplorer';
import { INaturalExplorer } from '../../../models/dbModels/INaturalExplorer';
import { addSkillsFromNewSource, removeRangerSkillFromOldSouce } from '../../../functions/skillFunctions';
import { removeSpell } from '../../../functions/spellFunctions';
import { ISkillProfNewChar, ISpellChociesNewChar } from '../../../models/INewCharater';

export const NaturalExplorer = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedNatural, setSelectedNatural] = useState<INaturalExplorer>(dbNaturalExplorer[2]);

  const displaySelectedExplorer = (nature: INaturalExplorer) => {
    setSelectedNatural(nature);
  };

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

    setNewCharacter({
      ...newCharacter,
      naturalExplorer: [explorer],
      skillProficiencies: skillProfs,
      lvl1Spells: newSpells,
    });
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Fighting Style</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbNaturalExplorer.map((explorer, i) => (
            <div
              key={i}
              className="styleContainer"
              onClick={() => onChangeExplorer(explorer)}
              onMouseEnter={() => displaySelectedExplorer(explorer)}
            >
              <button className={isStylePicked(explorer) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
                {isStylePicked(explorer) && <img src="./icons/check-mark-icon.png" alt={explorer.name} />}
              </button>
              <h4>{explorer.name}</h4>
            </div>
          ))}
        </div>
        {selectedNatural && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <h3>{selectedNatural.name}</h3>
            </div>
            <p>{selectedNatural.desc}</p>
            {selectedNatural.skillProficiencies && (
              <div className="featureContainer">
                <p>
                  <span>Skill Proficiency: </span>
                  {getDbSkill(selectedNatural.skillProficiencies).name}
                </p>
              </div>
            )}
            {selectedNatural.lvl1spell && (
              <div className="featureContainer">
                <span>Level 1 spell: </span>

                <img
                  src={getDbSpell(selectedNatural.lvl1spell, 1).icon}
                  alt={getDbSpell(selectedNatural.lvl1spell, 1).name + ' icon'}
                />
                <p>{getDbSpell(selectedNatural.lvl1spell, 1).name}</p>
              </div>
            )}
            {selectedNatural.resistance && (
              <div className="featureContainer">
                <p>
                  <span>Gain Resistance: </span>
                  {selectedNatural.resistance}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
