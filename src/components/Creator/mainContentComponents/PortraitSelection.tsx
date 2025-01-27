import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { isActiveIcon } from '../../../functions/creatorMinorFunctions';
import { getDbOrigin, getDbRace, getDbSubrace } from '../../../functions/getDbItems';
import { IRace } from '../../../models/dbModels/IRace';
import { ISubrace } from '../../../models/dbModels/ISubrace';

export const PortraitSelection = () => {
  const { newCharacter, setNewCharacter } = useNewCharContext();

  const getRaceOrSubrace = (): IRace | ISubrace => {
    return newCharacter.subrace ? getDbSubrace(newCharacter.subrace) : getDbRace(newCharacter.race);
  };

  const portraitSelection = getRaceOrSubrace();

  const onChangePortrait = (icon: string) => {
    setNewCharacter({ ...newCharacter, icon: icon });
  };

  return (
    <div className="flexColCentered">
      <h3 className="portraitsH3">Select Portrait</h3>
      <div className="portraitsSelectionContainer">
        <button
          className={isActiveIcon(getDbOrigin(newCharacter.origin).icon, 'icon', newCharacter)}
          onClick={() => onChangePortrait(getDbOrigin(newCharacter.origin).icon)}
          aria-label="Pick Origin Portrait"
        >
          <img src={getDbOrigin(newCharacter.origin).icon} alt={'portrait of ' + getDbRace(newCharacter.race).name} />
          {getDbOrigin(newCharacter.origin).icon === newCharacter.icon && (
            <img src="./icons/check-mark-icon.png" className="checkmarkIconPortrait" alt="this portrait is selected" />
          )}
        </button>
        {portraitSelection.portraits!.map((port, i) => (
          <button
            className={isActiveIcon(port, 'icon', newCharacter)}
            key={i}
            onClick={() => onChangePortrait(port)}
            aria-label={`Pick Race or Subrace Portrait option ${i + 1}`}
          >
            <img src={port} alt={'portrait of ' + getDbRace(newCharacter.race).name} />
            {port === newCharacter.icon && (
              <img
                src="./icons/check-mark-icon.png"
                className="checkmarkIconPortrait"
                alt="this portrait is selected"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
