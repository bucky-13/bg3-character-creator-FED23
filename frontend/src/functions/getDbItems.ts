import { ECharClasses, charClasses } from '../database/dbCharClasses';
import { races } from '../database/dbRaces';
import { subraces } from '../database/dbSubraces';
import { ICharClass } from '../models/dbModels/ICharClass';
import { IRace } from '../models/dbModels/IRace';
import { ISubrace } from '../models/dbModels/ISubrace';

export const getCharClassObject = (id: ECharClasses): ICharClass | undefined => {
  return charClasses.find((o) => o.id === id);
};
export const getRaceObject = (id: string): IRace => {
  return races.find((o) => o.id === id)!;
};

export const getSubracesArray = (id: string): ISubrace[] => {
  const mainRace = getRaceObject(id);
  let usedSubraces!: ISubrace[];

  mainRace.subraces!.forEach((element) => {
    console.log(element);
    const test = subraces.find((o) => o.id === element);
    if (test) {
      usedSubraces.push(test);
    }
    console.log(test);
  });

  console.log(subraces);

  return usedSubraces!;
};

export const getSubraceObject = (id: string): ISubrace => {
  return subraces.find((o) => o.id === id)!;
};

export const test3 = (e: string) => {
  console.log(e);
  const mainRace = getRaceObject(e);
  console.log(mainRace.subraces);
  let kuk!: ISubrace[];
  console.log(subraces);
  mainRace.subraces?.forEach((x) => {
    console.log(x);
    let röv = getSubraceObject(x);
    console.log(röv);
    if (röv) kuk.push(röv);
  });
};
