export interface Note {
    id: number | string,
    content: string
    tags: string[]
}

export interface Pagination {
    pageSize: number
}