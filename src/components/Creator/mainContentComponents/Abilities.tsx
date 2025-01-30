import { useState } from 'react';
import { useNewCharContext } from '../../../Context/CreatedCharacterContext';
import { abilities } from '../../../database/dbAbilities';
import { IAbility } from '../../../models/dbModels/IAbilitiy';
import './Abilities.scss';
import '../Overview.scss';
import { calculateAbilityPointsLeft } from '../../../functions/creatorMinorFunctions';
import { getDbClass } from '../../../functions/getDbItems';
import { AbilitiesTableHeader } from './abilityMinorComponents/AbilitiesTableHeader';
import { AbilityTableRow } from './abilityMinorComponents/AbilityTableRow';
import { SelectedChoiceContainer } from './creatorMinorComponents/SelectedChoiceContainer';
import { SectionContainer } from './creatorMinorComponents/SectionContainer';

export const Abilities = () => {
  const { newCharacter } = useNewCharContext();
  const [abilityPoints, setAbilityPoints] = useState(calculateAbilityPointsLeft(newCharacter.abilities));
  const [selectedAbility, setSelectedAbility] = useState<IAbility>(abilities[0]);

  return (
    <SectionContainer title="Abilities">
      <div className="abilitiesContainer">
        <p className={abilityPoints > 0 ? 'alertText' : ''}>Ability points left: {abilityPoints}</p>
        <div>
          <AbilitiesTableHeader />
          {newCharacter.abilities.map((ability, i) => (
            <AbilityTableRow
              ability={ability}
              setSelectedAbility={setSelectedAbility}
              abilityPoints={abilityPoints}
              setAbilityPoints={setAbilityPoints}
              key={i}
            />
          ))}
        </div>
        <p>
          <span className="starText">☆</span> = This is the primary ability for{' '}
          {getDbClass(newCharacter.startingClass).name}s.
        </p>
      </div>
      <SelectedChoiceContainer selectedChoice={selectedAbility} />
    </SectionContainer>
  );
};
