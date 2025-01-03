import React, { createContext, useContext } from 'react';
import { INewCharacter } from '../models/INewCharater';
import { Dispatcher } from '../models/types';

export interface INewCharContext {
  newCharacter: INewCharacter;
  setNewCharacter: Dispatcher<INewCharacter>;
}

export const NewCharContext = createContext<INewCharContext | undefined>(undefined);

export const useNewCharContext = () => {
  const context = useContext(NewCharContext);
  if (context === undefined) {
    throw new Error('context not found');
  }
  return context;
};
