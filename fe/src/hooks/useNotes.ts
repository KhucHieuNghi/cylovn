import { useMutation, useQuery } from 'react-query';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { delNote, getNoteById, getNotes, getNotesByTag, postNote, updateNote } from '@/services/note.service';
import { Note } from '@/utils/types';

interface State {
    notes: Note[]
}

export const useNoteQuery = (key: string, options: {onSuccess?: (notes: Note[]) => void}) => useQuery(['notes', key], 
  () => key ? getNotesByTag(key) :getNotes(), 
  options);

export const useNotePollingQuery = (key: string, options: {onSuccess?: (notes: Note[]) => void}) => useQuery(['notes poling', key], 
  () => key ? getNotesByTag(key) :getNotes(), 
  options);

export const useNoteUpdateMutate = () => useMutation('notes update', updateNote);

export const useNotePostMutate = () => useMutation('notes insert', postNote);

export const useNoteDeleteMutate = () => useMutation('notes del', delNote);

export const useNoteByIdQuery = (id: string, options:{enabled: boolean, cacheTime: number}) => useQuery('note by id', () => getNoteById(id), options);

type StateStore = {
  updateNotes: (notes: Note[]) => void
} & State

const immerFn = () => immer<StateStore>((set) => ({
  notes: [],
  updateNotes: (notes: Note[]) => set(state => {
    state.notes = notes;
    
  }),
}));

export const useNote = create(immerFn());
