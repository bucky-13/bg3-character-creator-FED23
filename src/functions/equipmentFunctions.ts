import { INewEquipmentProficiencies } from '../models/dbModels/IEquipmentProficiencies';
import { getDbEquipment } from './getDbItems';

export const removeEquipmentFromOldClass = (
  charEquipmentArray: INewEquipmentProficiencies[],
  fromSource: string,
): INewEquipmentProficiencies[] => {
  let newArray = [];
  for (let i = 0; i < charEquipmentArray.length; i++) {
    if (charEquipmentArray[i].fromSource.length < 2) {
      if (charEquipmentArray[i].fromSource[0] !== fromSource) newArray.push(charEquipmentArray[i]);
    } else {
      const newFromSource: string[] = charEquipmentArray[i].fromSource.filter((o) => o !== fromSource);
      newArray.push({ ...charEquipmentArray[i], fromSource: newFromSource });
    }
  }
  return newArray;
};

export const addEquipmentFromNewClass = (
  charEquipmentArray: INewEquipmentProficiencies[],
  fromSource: string,
  sourceEquipmentArray: string[],
): INewEquipmentProficiencies[] => {
  let newArray = charEquipmentArray;

  for (let i = 0; i < sourceEquipmentArray.length; i++) {
    let skill = getDbEquipment(sourceEquipmentArray[i]);
    let indexSkillExisting = charEquipmentArray.findIndex((o) => o.id === sourceEquipmentArray[i]);
    if (indexSkillExisting >= 0) {
      newArray[indexSkillExisting].fromSource.push(fromSource);
    } else {
      const newEquipment: INewEquipmentProficiencies = {
        id: sourceEquipmentArray[i],
        name: skill.name,
        equipmentType: skill.equipmentType,
        fromSource: [fromSource],
      };
      newArray.push(newEquipment);
    }
  }
  return newArray;
};

export const updateEquipmentArray = (
  charEquipmentArray: INewEquipmentProficiencies[],
  fromSource: string,
  sourceEquipmentArray: string[],
): INewEquipmentProficiencies[] => {
  let newCharEquipmentArray = removeEquipmentFromOldClass(charEquipmentArray, fromSource);
  newCharEquipmentArray = addEquipmentFromNewClass(newCharEquipmentArray, fromSource, sourceEquipmentArray);
  return newCharEquipmentArray;
};
