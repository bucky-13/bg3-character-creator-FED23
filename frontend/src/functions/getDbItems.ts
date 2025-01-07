import { charClasses } from '../database/dbCharClasses';
import { races } from '../database/dbRaces';
import { subClasses } from '../database/dbSubClass';
import { subraces } from '../database/dbSubraces';

export const getDbObject = (id: string, dbFile: string) => {
  switch (dbFile) {
    case 'races':
      return races.find((o) => o.id === id)!;
    case 'subraces':
      return subraces.find((o) => o.id === id)!;
    case 'charClass':
      return charClasses.find((o) => o.id === id)!;
    case 'subClasses':
      return subClasses.find((o) => o.id === id)!;
  }
};
