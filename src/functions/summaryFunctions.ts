import { INewCharacter } from "../models/INewCharater";
import { displayCantrips, displaySpells, isWarningDisplayed } from "./sideNavbarFunctions";

export   const isSummaryPending = (newCharacter: INewCharacter): boolean => {
    let summaryPending = false;
    if (newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') {
      if (isWarningDisplayed('high elf cantrip', newCharacter)) summaryPending = true;
    }
    if (displayCantrips(newCharacter)) {
      if (isWarningDisplayed('cantrips', newCharacter)) summaryPending = true;
    }
    if (displaySpells(newCharacter)) {
      if (isWarningDisplayed('spellsLvl1', newCharacter)) summaryPending = true;
      
    }
    if (isWarningDisplayed('abilities', newCharacter))  summaryPending = true;
    
    if (newCharacter.background === 'cbg01' || newCharacter.background === 'cbg07') {
      if (isWarningDisplayed('name', newCharacter)) summaryPending = true
    }
    return summaryPending;
};

const generateSummaryWarningsText = (newCharacter: INewCharacter):string[] => {
    let warningText = [];
    if (newCharacter.subrace === 'subr01' || newCharacter.subrace === 'subr05') {
        if (isWarningDisplayed('high elf cantrip', newCharacter)) warningText.push('High Elf Cantrip');
      }
      if (displayCantrips(newCharacter)) {
        if (isWarningDisplayed('cantrips', newCharacter)) warningText.push('Cantrips');
      }
      if (displaySpells(newCharacter)) {
        if (isWarningDisplayed('spellsLvl1', newCharacter))  warningText.push('Level 1 Spells');      
      }
      if (isWarningDisplayed('abilities', newCharacter)) warningText.push('Abilites');
      if (newCharacter.background === 'cbg01' || newCharacter.background === 'cbg07') {
        if (isWarningDisplayed('name', newCharacter))   warningText.push('Name');
    }
    return warningText
}
  
export const generateWarningsText = (currentSection: string, newCharacter: INewCharacter): string[] => {
    let warningText:string[] = [];
    if (currentSection === 'summary') warningText = generateSummaryWarningsText(newCharacter)
        
return warningText;
}

export const areChoicesPending = (currentSection: string, newCharacter: INewCharacter): boolean => {
    let isPending = false;
    if (currentSection === 'high elf cantrip' && isWarningDisplayed('high elf cantrip', newCharacter)) isPending = true;
    if (currentSection === 'cantrips' && isWarningDisplayed('cantrips', newCharacter)) isPending = true;
    if (currentSection === 'spells' && isWarningDisplayed('spellsLvl1', newCharacter)) isPending = true;
    if (currentSection === 'abilities' && isWarningDisplayed('abilities', newCharacter)) isPending = true;
    if (currentSection === 'skills' && isWarningDisplayed('skills', newCharacter)) isPending = true;
    if (currentSection === 'name' && isWarningDisplayed('name', newCharacter)) isPending = true;
    if (currentSection === 'summary') {
      isPending = isSummaryPending(newCharacter);
    }
    return isPending;
  };