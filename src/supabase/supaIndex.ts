import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from '../../database.types'

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const getCharacters = async ():Promise<Tables<'characters'>[] | undefined> => {
    console.log('i happen');
    const { data, error } = await supabase.from('characters').select();
    if (data) {
      let char: Tables<'characters'>[] = data
      console.log(char);
      console.log(data);
      return data;
    } else {
      return undefined;
    }
  };