import { Database } from "../../database.types";
import { INewCharacter,  } from "../models/INewCharater";

export const convertToSupaJson = (char: INewCharacter): Database['public']['Tables']['characters']['Insert'] => {
    let newCharacter: Database['public']['Tables']['characters']['Insert'] = {
        background: char.background,
        casterLevel: char.casterLevel,
        characterLevel: char.characterLevel,
        desc: char.desc,
        icon: char.icon,
        name: char.name,
        origin: char.origin,
        race: char.race,
        startingClass: char.startingClass,
        abilities: JSON.stringify(char.abilities),
        skillProficiencies: JSON.stringify(char.skillProficiencies),
        skillExpertises: char.skillExpertises.length > 0 ? JSON.stringify(char.skillExpertises) : null,
        armorProficiencies: char.armorProficiencies.length > 0 ? JSON.stringify(char.armorProficiencies) : null,
        weaponProficiencies: char.weaponProficiencies.length > 0 ? JSON.stringify(char.weaponProficiencies) : null,
        startingSubclass: char.startingSubclass ? char.startingSubclass : null,
        subrace: char.subrace ? char.subrace : null,
        cantrips: char.cantrips ? JSON.stringify(char.cantrips) : null,
        lvl1Spells: char.lvl1Spells ? JSON.stringify(char.lvl1Spells) : null,
        fightingStyles: char.fightingStyles ? JSON.stringify(char.fightingStyles) : null,
        favouredEnemy: char.favouredEnemy ? JSON.stringify(char.favouredEnemy) : null,
        naturalExplorer: char.naturalExplorer ? JSON.stringify(char.naturalExplorer) : null,
        
    }
    return newCharacter

}