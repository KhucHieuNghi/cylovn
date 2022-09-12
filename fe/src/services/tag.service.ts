import request from '@/utils/request';

export const getTags = (): Promise<string[]> => request.get('/tags');
