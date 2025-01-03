export enum EEquipmentTypes {
  Armor = 'Armor',
  SimpleW = 'SimpleW',
  MartialW = 'MartialW',
}

export interface IEquipmentProficiencies {
  id: string;
  name: string;
  equipmentType: EEquipmentTypes;
}
