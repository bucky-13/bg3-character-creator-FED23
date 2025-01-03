import { ECharClasses, charClasses } from '../database/dbCharClasses';
import { ERaces, races } from '../database/dbRaces';
import { ICharClass } from '../models/dbModels/ICharClass';
import { IRace } from '../models/dbModels/IRace';

export const getCharClassObject = (id: ECharClasses): ICharClass | undefined => {
  return charClasses.find((o) => o.id === id);
};
export const getRaceObject = (id: ERaces): IRace | undefined => {
  return races.find((o) => o.id === id);
};
