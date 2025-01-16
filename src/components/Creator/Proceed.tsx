import { useNewCharContext } from '../../Context/CreatedCharacterContext';
import { displayCantrips, displaySpells, isWarningDisplayed } from '../../functions/sideNavbarFunctions';

export const Proceed = () => {
  const { newCharacter } = useNewCharContext();

  const areChoicesPending = (): boolean => {
    let isPending = false;
    if (
      (newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') &&
      isWarningDisplayed('highelfcatnip', newCharacter)
    )
      isPending = true;
    if (displayCantrips(newCharacter) && isWarningDisplayed('cantrips', newCharacter)) isPending = true;
    if (displaySpells(newCharacter) && isWarningDisplayed('spellsLvl1', newCharacter)) isPending = true;
    if (isWarningDisplayed('abilities', newCharacter)) isPending = true;
    return isPending;
  };

  return (
    <div className="proceedContainer">
      {/* {areChoicesPending() && (
        <div className="alertTextContainer">
          <p>Choices Pending</p>
        </div>
      )} */}
      <button disabled={areChoicesPending()}>PROCEED!</button>
    </div>
  );
};
