import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbRace, getDbSubrace } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';
import { changeSkillsProfs, isActiveIcon, updateExpertiseArray } from '../../../functions/creatorMinorFunctions';
import { removeEquipmentFromOldClass, updateEquipmentArray } from '../../../functions/equipmentFunctions';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbRace(newCharacter.race));

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    let newSkillProfs = changeSkillsProfs(newCharacter, 'race', changedRace);
    newSkillProfs = newSkillProfs.filter((o) => o.fromSource !== 'subrace');
    const defaultSubrace = changedRace.subraces ? getDbSubrace(changedRace.subraces[0]) : undefined;
    let newSkillExps = updateExpertiseArray(defaultSubrace, newCharacter, 'subrace');

    let newArmorProfs = updateEquipmentArray(newCharacter.armorProficiencies, 'race', changedRace.armorProficiencies);
    let newWeaponProfs = updateEquipmentArray(
      newCharacter.weaponProficiencies,
      'race',
      changedRace.weaponProficiencies,
    );

    if (changedRace.subraces) {
      const updatedSubrace = getDbSubrace(changedRace.subraces[0]);
      setNewCharacter({
        ...newCharacter,
        race: changedRace.id,
        subrace: changedRace.subraces[0],
        skillProficiencies: newSkillProfs,
        skillExpertises: newSkillExps,
        armorProficiencies: updateEquipmentArray(newArmorProfs, 'subrace', updatedSubrace.armorProficiencies),
        weaponProficiencies: newWeaponProfs,
      });
    } else {
      const newState: INewCharacter = {
        ...newCharacter,
        race: changedRace.id,
        skillProficiencies: newSkillProfs,
        skillExpertises: newSkillExps,
        armorProficiencies: removeEquipmentFromOldClass(newArmorProfs, 'subrace'),
        weaponProficiencies: newWeaponProfs,
      };
      delete newState.subrace;
      setNewCharacter(newState);
    }
  };

  return (
    <div className="creatorCenterContainer">
      <h2>Race</h2>
      <div className="choicesAndSelectedContainer">
        {!newCharacter.hasLockedChoices && (
          <div>
            <div className="choicesContainer">
              {races.map((race) => (
                <button
                  key={race.id}
                  className={isActiveIcon(race.id, 'race', newCharacter)}
                  onClick={() => onChangeRace(race)}
                  onMouseEnter={() => setSelectedRace(race)}
                >
                  <img src={race.icon} alt={race.name} />
                  <p>{race.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        {selectedRace && (
          <div className="selectedChoiceContainer">
            <div className="selectedChoiceHeader">
              <img src={selectedRace.icon} />
              <h3>{selectedRace.name}</h3>
            </div>
            <p>{selectedRace.desc}</p>
            <h4 className="featureH">Features:</h4>
            {selectedRace.features.map((feature) => (
              <div key={feature.name} className="featureContainer">
                {feature.icon && <img src={feature.icon} alt={selectedRace.name} />}
                <p>
                  <span>{feature.name}: </span>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
