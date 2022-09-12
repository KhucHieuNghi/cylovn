import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getTags } from '@/services/tag.service';

interface TagsState {
    tags: string[]
}

const initialState:TagsState = {
  tags: [],
};

interface TagsStore extends TagsState {
  addTag: (tag: string) => void  
  initial: () => Promise<void>  
}

const immerFn = () => immer<TagsStore>((set) => ({
  ...initialState,
  addTag: (tag: string) => set(state => {
    const isExisted = state.tags.includes(tag);

    if(isExisted) {return;}

    state.tags.push(tag);
  }),
  initial: async () => {
    set({ tags: await getTags() });
  },
}));

export const useTagsStore = create(immerFn());
