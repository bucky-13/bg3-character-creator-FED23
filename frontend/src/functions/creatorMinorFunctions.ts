import { INewCharacter } from '../models/INewCharater';

export const isActiveIcon = (icon: string, key: keyof INewCharacter, newCharacter: INewCharacter): string => {
  return icon === newCharacter[key] ? 'creatorImageChoiceContainer activeChoice' : 'creatorImageChoiceContainer';
};
