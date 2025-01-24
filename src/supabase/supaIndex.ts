import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from '../../database.types'
import { INewCharacter } from '../models/INewCharater';
import { convertToNewCharacter } from './convertToNewCharacter';
import { convertToSupaJson } from './convertToSupaJson';

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export type SupaCharacter = Tables<'characters'>;

export const getCharacters = async ():Promise<INewCharacter[] | undefined> => {
    const { data, error } = await supabase.from('characters').select();
    if (data) {
      let chars: Tables<'characters'>[] = data
        const convertedChars: INewCharacter[] = chars.map((char) => {return convertToNewCharacter(char)})
        return convertedChars
    } else {
        console.error(error);
      return undefined;
    }
};
  
export const postCharacter = async (newCharacter: INewCharacter) => {
    const convertedNewCharacter: Database['public']['Tables']['characters']['Insert'] = convertToSupaJson(newCharacter)

    const { data, error } = await supabase.from('characters').insert(convertedNewCharacter).select()
    if (data) {
        return 'yay!'
    } else {
        return JSON.stringify(error)
    }

}