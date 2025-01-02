export enum EquipmentTypes {
  Armor = 'Armor',
  SimpleW = 'SimpleW',
  MartialW = 'MartialW',
}

export interface IEquipmentProficiencies {
  equipmentId: string;
  name: string;
  equipmentType: EquipmentTypes;
}
