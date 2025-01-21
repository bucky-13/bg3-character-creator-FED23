import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { IFavouredEnemy } from '../../../models/dbModels/IFavouredEnemy';
import { dbFavouredEnemy } from '../../../database/dbFavouredEnemy';
import { updateRangerSkills } from '../../../functions/skillFunctions';
import { getDbClass, getDbEquipment, getDbSpell } from '../../../functions/getDbItems';

import { ISpellChociesNewChar } from '../../../models/INewCharater';
import { removeClassSpells } from '../../../functions/spellFunctions';
import { ESpellArray } from './Spells';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';

export const FavouredEnemy = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedEnemy, setSelectedEnemy] = useState<IFavouredEnemy>(dbFavouredEnemy[0]);

  const isStylePicked = (enemy: IFavouredEnemy): boolean => {
    return enemy.name === newCharacter.favouredEnemy![0].name ? true : false;
  };

  const updateCantrips = (
    spell: string | undefined,
    spellArray: ISpellChociesNewChar[] | undefined,
  ): ISpellChociesNewChar[] => {
    let newSpells: ISpellChociesNewChar[] = removeClassSpells(ESpellArray.Lvl0, newCharacter);
    if (spell) {
      let newSpell = [{ id: spell, fromSource: 'ccl08', canChange: true, specialCase: 'no' }];

      if (spellArray && spellArray.length > 0) {
        newSpells = newSpells.concat(newSpell);
      } else {
        newSpells = newSpell;
      }
    }
    return newSpells;
  };

  const onChangeStyle = (enemy: IFavouredEnemy) => {
    const newSkillProfs = updateRangerSkills(
      newCharacter.skillProficiencies,
      'class',
      [selectedEnemy.skillProficiencies],
      newCharacter.favouredEnemy![0].skillProficiencies,
    );
    let armorProfs = newCharacter.armorProficiencies;
    if (enemy.armorProficiencies) {
      armorProfs.push({
        id: enemy.armorProficiencies,
        name: getDbEquipment(enemy.armorProficiencies).name,
        equipmentType: getDbEquipment(enemy.armorProficiencies).equipmentType,
        fromSource: ['class'],
      });
    } else {
      armorProfs = updateEquipmentArray(
        newCharacter.armorProficiencies,
        'class',
        getDbClass(newCharacter.startingClass).armorProficiencies,
      );
    }
    let cantrips = newCharacter.cantrips;
    cantrips = updateCantrips(enemy.cantrip, newCharacter.cantrips);
    let lvl1spells = newCharacter.lvl1Spells;
    lvl1spells = updateCantrips(enemy.lvl1spell, newCharacter.lvl1Spells);

    setNewCharacter({
      ...newCharacter,
      favouredEnemy: [enemy],
      skillProficiencies: newSkillProfs,
      armorProficiencies: armorProfs,
      cantrips: cantrips,
      lvl1Spells: lvl1spells,
    });
  };

  const displaySelectedStyle = (enemy: IFavouredEnemy) => {
    setSelectedEnemy(enemy);
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Fighting Style</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbFavouredEnemy.map((style, i) => (
            <div
              key={i}
              className="styleContainer"
              onClick={() => onChangeStyle(style)}
              onMouseEnter={() => displaySelectedStyle(style)}
            >
              <button className={isStylePicked(style) ? 'checkmarkIcon checked' : 'checkmarkIcon'}>
                {isStylePicked(style) && <img src="./icons/check-mark-icon.png" alt={style.name} />}
              </button>
              <h4>{style.name}</h4>
            </div>
          ))}
        </div>
        {selectedEnemy && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <h3>{selectedEnemy.name}</h3>
            </div>
            <p>{selectedEnemy.desc}</p>
            {selectedEnemy.cantrip && (
              <div className="featureContainer">
                <span>Cantrip: </span>

                <img
                  src={getDbSpell(selectedEnemy.cantrip, 0).icon}
                  alt={getDbSpell(selectedEnemy.cantrip, 0).name + ' icon'}
                />
                <p>{getDbSpell(selectedEnemy.cantrip, 0).name}</p>
              </div>
            )}
            {selectedEnemy.lvl1spell && (
              <div className="featureContainer">
                <span>Level 1 spell: </span>

                <img
                  src={getDbSpell(selectedEnemy.lvl1spell, 1).icon}
                  alt={getDbSpell(selectedEnemy.lvl1spell, 1).name + ' icon'}
                />
                <p>{getDbSpell(selectedEnemy.lvl1spell, 1).name}</p>
              </div>
            )}
            {selectedEnemy.armorProficiencies && (
              <div className="featureContainer">
                <p>
                  <span>Armor Proficiency: </span>
                  {getDbEquipment(selectedEnemy.armorProficiencies).name}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
