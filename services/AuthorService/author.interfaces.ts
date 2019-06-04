export interface IAuthor {
    id: number;
    name: string;
}

export interface IAuthorService {
    getById(authorId: number): IAuthor;
}

export interface IAuthorDal {
    getById(authorId: number): IAuthor | null;
}