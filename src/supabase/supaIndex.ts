import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from '../../database.types'
import { INewCharacter, INewCharacterSummary } from '../models/INewCharater';
import { convertToNewCharacter, convertToNewCharacterFull } from './convertToNewCharacter';
import { convertToSupaJson } from './convertToSupaJson';

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export type SupaCharacter = Tables<'characters'>;

export const getCharacters = async ():Promise<INewCharacterSummary[] | undefined> => {
    const { data, error } = await supabase.from('characters').select();
    if (data) {
      let chars: Tables<'characters'>[] = data
        const convertedChars: INewCharacterSummary[] = chars.map((char) => { return convertToNewCharacter(char) })
        localStorage.setItem('characters', JSON.stringify(convertedChars))
        return convertedChars
    } else {
        localStorage.removeItem('characters')
        console.error(error);
      return undefined;
    }
};
  
export const postCharacter = async (newCharacter: INewCharacter):Promise<INewCharacter | string> => {
    const convertedNewCharacter: Database['public']['Tables']['characters']['Insert'] = convertToSupaJson(newCharacter)

    const { data, error } = await supabase.from('characters').insert(convertedNewCharacter).select()
    if (data) {
      let newChar: INewCharacter = convertToNewCharacterFull(data[0])
      return newChar
    } else {
        return JSON.stringify(error)
    }

}

export const getCharacter = async (id: string):Promise<INewCharacter | undefined> => {
    const { data, error } = await supabase.from('characters').select().eq('charId', id);
    if (data) {
      let chars: Tables<'characters'> = data[0]
        const convertedChar: INewCharacter = convertToNewCharacterFull(chars)
        return convertedChar
    } else {
        console.error(error);
      return undefined;
    }
};