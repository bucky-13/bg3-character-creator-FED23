import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { getDbOrigin, getDbRace, getDbSubrace } from '../../../functions/getDbItems';
import { races } from '../../../database/dbRaces';
import { IRace } from '../../../models/dbModels/IRace';
import { INewCharacter } from '../../../models/INewCharater';
import { removeEquipmentFromOldClass, updateEquipmentArray } from '../../../functions/equipmentFunctions';
import { updateSkillsArray } from '../../../functions/skillFunctions';
import { DisplaySelectionButton } from './creatorMinorComponents/DisplaySelectionButton';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SectionContainer } from './creatorMinorComponents/SectionContainer';

export const Race = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [selectedRace, setSelectedRace] = useState(getDbRace(newCharacter.race));

  const onChangeRace = (changedRace: IRace): void => {
    setSelectedRace(changedRace);
    let newSkillProfs = updateSkillsArray(newCharacter.skillProficiencies, 'race', changedRace.skillProficiencies);
    newSkillProfs = updateSkillsArray(newCharacter.skillProficiencies, 'race', changedRace.skillProficiencies);
    const defaultSubrace = changedRace.subraces ? getDbSubrace(changedRace.subraces[0]) : undefined;
    let newSkillExps = updateSkillsArray(newCharacter.skillExpertises, 'subrace', defaultSubrace?.skillExpertises);

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
        icon: getDbOrigin(newCharacter.origin).icon,
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
        icon: getDbOrigin(newCharacter.origin).icon,
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
    <SectionContainer title="Race">
      {!newCharacter.hasLockedChoices && (
        <div className="choicesContainer">
          {races.map((race, i) => (
            <DisplaySelectionButton selection={race} onChange={onChangeRace} key={i} typeOfSelection="race" />
          ))}
        </div>
      )}
      {selectedRace && <SelectedChoiceContainer selectedChoice={selectedRace} features={selectedRace.features} />}
    </SectionContainer>
  );
};
