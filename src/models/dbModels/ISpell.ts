export interface ISpell {
  id: string;
  name: string;
  school: string;
  desc: string;
  details: string[];
  icon: string;
  spellLevel: number;
  isRitual: boolean;
  hasConcentration: boolean;
  availableTo: string[];
}
