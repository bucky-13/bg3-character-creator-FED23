import { ParamParseKey, Params } from "react-router-dom";
import { INewCharacter } from "../models/INewCharater"
import { getCharacter } from "../supabase/supaIndex"

const PathNames = {
    charDetail: '/characters/:charId',
  } as const;

interface ICharacterLoader {
    params: Params<ParamParseKey<typeof PathNames.charDetail>>;
}

export const characterLoader = async ({ params }: ICharacterLoader):Promise<INewCharacter | undefined> => {

    if (params.charId) {
        const character: INewCharacter | undefined = await getCharacter(params.charId)
        return character
    }
    else {
        return undefined
    }
    
}