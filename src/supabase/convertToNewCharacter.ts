import { Json } from "../../database.types";
import { INewEquipmentProficiencies } from "../models/dbModels/IEquipmentProficiencies";
import { IFavouredEnemy } from "../models/dbModels/IFavouredEnemy";
import { IFightingStyle } from "../models/dbModels/IFightingSyles";
import { INaturalExplorer } from "../models/dbModels/INaturalExplorer";
import { INewAbility, INewCharacter, INewCharacterSummary, ISkillProfNewChar, ISpellChociesNewChar } from "../models/INewCharater";
import { SupaCharacter } from "./supaIndex";

const convertJsonObject = <T>(dbEntry: Json | null): T[] => {
    if (dbEntry === null) {
        return []
    } else {
        let string = dbEntry.toString()
        return JSON.parse(string) as T[]
    }

}

export const convertToNewCharacter = (char: SupaCharacter): INewCharacterSummary => {
    let newCharacter: INewCharacterSummary = {
        id: char.charId,
        createdAt: char.createdAt,
        background: char.background,
        characterLevel: char.characterLevel,
        icon: char.icon,
        name: char.name,
        race: char.race,
        startingClass: char.startingClass,
    }
    if(char.startingSubclass !== null) newCharacter = {...newCharacter, startingSubclass: char.startingSubclass}
    if(char.subrace !== null) newCharacter = {...newCharacter, subrace: char.subrace}
    return newCharacter
}

export const convertToNewCharacterFull = (char: SupaCharacter): INewCharacter => {
    let newCharacter: INewCharacter = {
        id: char.charId,
        createdAt: char.createdAt,
        background: char.background,
        casterLevel: char.casterLevel,
        characterLevel: char.characterLevel,
        desc: char.desc,
        icon: char.icon,
        name: char.name,
        origin: char.origin,
        race: char.race,
        hasLockedChoices: false,
        startingClass: char.startingClass,
        abilities: convertJsonObject<INewAbility>(char.abilities),
        skillProficiencies: convertJsonObject<ISkillProfNewChar>(char.skillProficiencies),
        skillExpertises: convertJsonObject<ISkillProfNewChar>(char.skillExpertises),
        armorProficiencies: convertJsonObject<INewEquipmentProficiencies>(char.armorProficiencies),
        weaponProficiencies: convertJsonObject<INewEquipmentProficiencies>(char.weaponProficiencies)
 
    }
    if(char.startingSubclass !== null) newCharacter = {...newCharacter, startingSubclass: char.startingSubclass}
    if(char.subrace !== null) newCharacter = {...newCharacter, subrace: char.subrace}
    if(char.cantrips !== null) newCharacter = {...newCharacter, cantrips: convertJsonObject<ISpellChociesNewChar>(char.cantrips)}
    if(char.lvl1Spells !== null) newCharacter = {...newCharacter, lvl1Spells: convertJsonObject<ISpellChociesNewChar>(char.lvl1Spells)}
    if(char.fightingStyles !== null) newCharacter = {...newCharacter, fightingStyles: convertJsonObject<IFightingStyle>(char.fightingStyles)}
    if(char.favouredEnemy !== null) newCharacter = {...newCharacter, favouredEnemy: convertJsonObject<IFavouredEnemy>(char.favouredEnemy)}
    if (char.naturalExplorer !== null) newCharacter = { ...newCharacter, naturalExplorer: convertJsonObject<INaturalExplorer>(char.naturalExplorer) }
    return newCharacter
}