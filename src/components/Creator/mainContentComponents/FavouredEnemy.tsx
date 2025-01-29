import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { IFavouredEnemy } from '../../../models/dbModels/IFavouredEnemy';
import { dbFavouredEnemy } from '../../../database/dbFavouredEnemy';
import { updateRangerSkills } from '../../../functions/skillFunctions';
import { getDbClass, getDbEquipment, getDbSkill, getDbSpell } from '../../../functions/getDbItems';
import { ISpellChociesNewChar } from '../../../models/INewCharater';
import { removeSpell } from '../../../functions/spellFunctions';
import { updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { INewEquipmentProficiencies } from '../../../models/dbModels/IEquipmentProficiencies';

export const FavouredEnemy = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedEnemy, setSelectedEnemy] = useState<IFavouredEnemy>(dbFavouredEnemy[0]);

  const isStylePicked = (enemy: IFavouredEnemy): boolean => {
    return enemy.name === newCharacter.favouredEnemy![0].name ? true : false;
  };

  const updateSpells = (
    spell: string | undefined,
    spellArray: ISpellChociesNewChar[] | undefined,
    spellLevel: number,
  ): ISpellChociesNewChar[] => {
    let newSpells: ISpellChociesNewChar[] = spellArray ? spellArray : [];

    if (newSpells.length > 0) {
      if (spellLevel === 0) {
        newSpells = removeSpell(newSpells, 'spl021');
        newSpells = removeSpell(newSpells, 'spl016');
      } else if (spellLevel === 1) {
        newSpells = removeSpell(newSpells, 'spl140');
      }
    }

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

  const updateArmorProfs = (enemy: IFavouredEnemy): INewEquipmentProficiencies[] => {
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
    return armorProfs;
  };

  const onChangeStyle = (enemy: IFavouredEnemy) => {
    const newSkillProfs = updateRangerSkills(
      newCharacter.skillProficiencies,
      'class',
      [selectedEnemy.skillProficiencies],
      newCharacter.favouredEnemy![0].skillProficiencies,
    );

    let armorProfs = updateArmorProfs(enemy);

    let cantrips = newCharacter.cantrips;
    cantrips = updateSpells(enemy.cantrip, newCharacter.cantrips, 0);
    let lvl1spells = newCharacter.lvl1Spells;
    lvl1spells = updateSpells(enemy.lvl1spell, newCharacter.lvl1Spells, 1);

    setSelectedEnemy(enemy);
    setNewCharacter({
      ...newCharacter,
      favouredEnemy: [enemy],
      skillProficiencies: newSkillProfs,
      armorProficiencies: armorProfs,
      cantrips: cantrips,
      lvl1Spells: lvl1spells,
    });
  };

  return (
    <div className="creatorCenterContainer summaryMainContainer ">
      <h2>Favoured Enemy</h2>
      <div className="choicesAndSelectedContainer">
        <div className="summarySecondaryContainer stylesChoicesContainer">
          {dbFavouredEnemy.map((style, i) => (
            <div key={i} className="styleContainer" onClick={() => onChangeStyle(style)}>
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
            <div className="featureContainer">
              <p>
                <span>Skill Proficiency: </span>
                {getDbSkill(selectedEnemy.skillProficiencies).name}
              </p>
            </div>
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
