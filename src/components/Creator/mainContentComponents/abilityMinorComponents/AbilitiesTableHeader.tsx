import { useNewCharContext } from '../../../../Context/CreatedCharacterContext';
import { checkPlusTwoBonusMissing, checkPlusOneBonusMissing } from '../../../../functions/sideNavbarFunctions';

export const AbilitiesTableHeader = () => {
  const { newCharacter } = useNewCharContext();
  return (
    <div className="abilityContainer">
      <div className="abiDummy"></div>
      <p className={checkPlusTwoBonusMissing(newCharacter) ? 'alertText' : ''}>Assign +2</p>
      <p className={checkPlusOneBonusMissing(newCharacter) ? 'alertText' : ''}>Assign +1</p>
    </div>
  );
};
