import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from '../../database.types'
import { INewAbility, INewCharacter } from '../models/INewCharater';
import { convertToNewCharacter } from './convertToNewCharacter';

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export type SupaCharacter = Tables<'characters'>;

export const getCharacters = async ():Promise<INewCharacter[] | undefined> => {
    console.log('i happen');
    const { data, error } = await supabase.from('characters').select();
    if (data) {
      let chars: Tables<'characters'>[] = data
        const convertedChars: INewCharacter[] = chars.map((char) => {return convertToNewCharacter(char)})
        return convertedChars
    } else {
        console.log(error);
      return undefined;
    }
  };