import { INewAbility, INewCharacter, ISkillProfNewChar } from '../models/INewCharater';
import { displayAbilityTotalPoints } from './creatorMinorFunctions';
import { getDbBackground, getDbClass, getDbRace, getDbSubrace } from './getDbItems';

export const removeSkillsFromOldSouce = (
  charSkillArray: ISkillProfNewChar[],
  fromSource: string,
): ISkillProfNewChar[] => {
  let newArray = [];
  for (let i = 0; i < charSkillArray.length; i++) {
    if (charSkillArray[i].fromSource.length < 2) {
      if (charSkillArray[i].fromSource[0] !== fromSource) newArray.push(charSkillArray[i]);
    } else {
      const newFromSource: string[] = charSkillArray[i].fromSource.filter((o) => o !== fromSource);
      newArray.push({ ...charSkillArray[i], fromSource: newFromSource });
    }
  }
  return newArray;
};

export const addSkillsFromNewSource = (
  charSkillArray: ISkillProfNewChar[],
  fromSource: string,
  sourceSkillArray: string[],
): ISkillProfNewChar[] => {
  let newArray = charSkillArray;

  for (let i = 0; i < sourceSkillArray.length; i++) {
    let indexSkillExisting = charSkillArray.findIndex((o) => o.id === sourceSkillArray[i]);
    if (indexSkillExisting >= 0) {
      newArray[indexSkillExisting].fromSource.push(fromSource);
    } else {
      const newEquipment: ISkillProfNewChar = {
        id: sourceSkillArray[i],
        fromSource: [fromSource],
        canChange: false,
      };
      newArray.push(newEquipment);
    }
  }
  return newArray;
};

export const updateSkillsArray = (
  charSkillsArray: ISkillProfNewChar[],
  fromSource: string,
  sourceEquipmentArray: string[] | undefined,
): ISkillProfNewChar[] => {
  let newCharEquipmentArray = removeSkillsFromOldSouce(charSkillsArray, fromSource);
  if (sourceEquipmentArray)
    newCharEquipmentArray = addSkillsFromNewSource(newCharEquipmentArray, fromSource, sourceEquipmentArray);
  return newCharEquipmentArray;
};

export const removeRangerSkillFromOldSouce = (
  charSkillArray: ISkillProfNewChar[],
  fromSource: string,
  id: string,
): ISkillProfNewChar[] => {
  let newArray = [];
  for (let i = 0; i < charSkillArray.length; i++) {
    if (charSkillArray[i].fromSource.length < 2) {
      if (charSkillArray[i].id !== id) newArray.push(charSkillArray[i]);
    } else {
      if (charSkillArray[i].id !== id) {
        const newFromSource: string[] = charSkillArray[i].fromSource.filter((o) => o !== fromSource);
        newArray.push({ ...charSkillArray[i], fromSource: newFromSource });
      } else {
        newArray.push({ ...charSkillArray[i] });
      }
    }
  }
  return newArray;
};

export const updateRangerSkills = (
  charSkillsArray: ISkillProfNewChar[],
  fromSource: string,
  sourceEquipmentArray: string[],
  id: string,
): ISkillProfNewChar[] => {
  let newCharEquipmentArray = removeRangerSkillFromOldSouce(charSkillsArray, fromSource, id);
  newCharEquipmentArray = addSkillsFromNewSource(newCharEquipmentArray, fromSource, sourceEquipmentArray);
  return newCharEquipmentArray;
};

export  const isSourceTheSame = (skill: ISkillProfNewChar, source: string): boolean => {
  const hasSource = skill.fromSource.find((o) => o === source);
  return hasSource ? true : false;
};

export const findProfOnNewChar = (id: string, newCharacter: INewCharacter) => {
    return newCharacter.skillProficiencies.find((o) => o.id == id);
  };

export const findExpOnNewChar = (id: string, newCharacter: INewCharacter) => {
    return newCharacter.skillExpertises.find((o) => o.id == id);
};
  
export const isSkillDisabled = (id: string, newCharacter: INewCharacter): boolean => {
  const profIsAlreadyPicked = findProfOnNewChar(id, newCharacter);
  return profIsAlreadyPicked?.canChange === false ? true : false;
};

export const isSkillProfPicked = (id: string, newCharacter: INewCharacter): boolean => {
  const isToBeRemoved = findProfOnNewChar(id, newCharacter);
  return isToBeRemoved ? true : false;
};

export const isSkillExpPicked = (id: string, newCharacter: INewCharacter): boolean => {
  const isToBeRemoved = findExpOnNewChar(id, newCharacter);
  return isToBeRemoved ? true : false;
};

  export const selectCheckmarkIcon = (id: string, isExpertise: boolean, newCharacter: INewCharacter): string => {
    let source = '';

    if (isExpertise) {
      const exp = findExpOnNewChar(id, newCharacter)?.fromSource[0];
      exp ? (source = exp) : '';
    } else {
      const prof = findProfOnNewChar(id, newCharacter)?.fromSource[0];
      prof ? (source = prof) : '';
    }

    switch (source) {
      case 'background':
        return getDbBackground(newCharacter.background).icon;
      case 'race':
        return getDbRace(newCharacter.race).icon;
      case 'class':
        return getDbClass(newCharacter.startingClass).icon;
      case 'subrace':
        return newCharacter.subrace ? getDbSubrace(newCharacter.subrace).icon : '';
      default:
        return './icons/check-mark-icon.png';
    }
};
  
  export const getAbilityModifier = (key: string, id: string, newCharacter:INewCharacter): number => {
    const usedAbility = newCharacter.abilities.find((abi: INewAbility) => abi.id === key)!;
    const abilityTotal = displayAbilityTotalPoints(usedAbility);
    const hasProficiency = findProfOnNewChar(id, newCharacter);
    const hasExpertise = findExpOnNewChar(id, newCharacter);
    const bonus: number = hasExpertise ? 4 : hasProficiency ? 2 : 0;
    return Math.floor((abilityTotal - 10) / 2 + bonus);
};
  
export const createSkill = (id: string, source: string, canChange: boolean): ISkillProfNewChar => {
return {
  id: id,
  fromSource: [source],
  canChange: canChange,
};
}

export const isSkillTakenFromOtherSource = (id: string, newCharacter:INewCharacter): boolean => {
  const profIsAlreadyPicked = findProfOnNewChar(id, newCharacter);
  if (profIsAlreadyPicked && profIsAlreadyPicked.canChange === false) {
    return true;
  }
  const expIsAlreadyPicked = findExpOnNewChar(id, newCharacter);
  if (expIsAlreadyPicked && expIsAlreadyPicked.canChange === false) {
    return true;
  }
  return false;
};

export const checkIfPrimaryAbility = (newCharacter: INewCharacter, abilityId: string) => {
  const ability = getDbClass(newCharacter.startingClass).primaryAbility

  return ability === abilityId  
}