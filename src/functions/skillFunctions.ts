import { ISkillProfNewChar } from '../models/INewCharater';

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
