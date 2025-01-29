import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { Dispatcher } from '../../../models/types';
import './Modal.scss';
import { Link } from 'react-router-dom';
import { INewCharacter } from '../../../models/INewCharater';
import { postCharacter } from '../../../supabase/supaIndex';
import { dbOrigins } from '../../../database/dbOrigins';

interface ISaveCharacterModalProps {
  setShowModal: Dispatcher<boolean>;
}

export const SaveCharacterModal = ({ setShowModal }: ISaveCharacterModalProps) => {
  const { newCharacter, setNewCharacter } = useNewCharContext();
  const [isCharacterSaved, setIsCharacterSaved] = useState<boolean | null>(null);
  const [savedCharacter, setSavedCharacter] = useState<INewCharacter>();

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.currentTarget === e.target) setShowModal(false);
    if (isCharacterSaved === true) setNewCharacter(dbOrigins[0]);
  };

  const cancelSaveCharacter = () => {
    setShowModal(false);
    if (isCharacterSaved === true) setNewCharacter(dbOrigins[0]);
  };

  const saveCharacter = async () => {
    let postResult = await postCharacter(newCharacter);
    if (typeof postResult !== 'string') {
      setIsCharacterSaved(true);
      setSavedCharacter(postResult);
    } else {
      setIsCharacterSaved(false);
    }
    console.error(postResult);
  };

  return (
    <div className="modalContainer" id="modalContainer" onClick={(e) => onClickOutside(e)}>
      {isCharacterSaved !== true ? (
        <div className="modalContent">
          <h2>Save Character?</h2>
          <p>Do you wish to save your character? You will get a link so you can find it later on.</p>
          <p>NOTE: after saving your character you won't be able to edit it anymore.</p>
          {isCharacterSaved === false && (
            <p className="alertText">Something went wrong, your character was not saved</p>
          )}
          <div className="modalButtonContainer">
            <button className="cancelBtn" onClick={() => cancelSaveCharacter()}>
              Cancel
            </button>
            <button className="confirmBtn" onClick={() => saveCharacter()}>
              Save Character
            </button>
          </div>
        </div>
      ) : (
        <div className="modalContent">
          <h2>Character Saved Successfully!</h2>
          <p>Link to newly created character: </p>
          <p>
            https://bucky-13.github.io/bg3-character-creator-FED23/#/characters/{savedCharacter && savedCharacter.id}
          </p>
          <div className="modalButtonContainer">
            <button onClick={() => cancelSaveCharacter()}>Create Another Character</button>

            <Link to={`/characters/${savedCharacter?.id}`}>
              <button>View Character</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
