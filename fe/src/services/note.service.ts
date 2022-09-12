import request from '@/utils/request';
import { Note } from '@/utils/types';

export const getNotesFunny = () => request.get('/note/funny');

export const getNotes = () => request.get('/note');

export const getNoteById = (id: string) => request.get(`/note/${id}`);

export const postNote = (note: Note) => request.post('/note', note);

export const updateNote = (note: Note) => request.put(`/note/${note.id}`, note);

export const delNote = (note: Note) => request.delete(`/note/${note.id}`);

export const getNotesByTag = (tag: string) => request.get(`/note/tag/${tag}`);