import React from 'react';

import { useNotePollingQuery } from './useNotes';
import { Note } from '@/utils/types';

export const useNotesPolling = (notes: Note[], tagFilter?: string) => {
  console.log('🚀 ~ file: useNotesPolling.ts ~ line 7 ~ useNotesPolling ~ notes', notes);

  const noteIdsString = notes.map(note => note.id).toString();

  const { data, refetch } = useNotePollingQuery(tagFilter || '', {});

  React.useEffect(() => {
    const subscribe = setInterval(() => {
      refetch();
    }, 2000);

    return () => {
      clearInterval(subscribe);
    };
  }, []);

  return { isChange: (data || []).map(note => note.id).toString() !== noteIdsString };

};