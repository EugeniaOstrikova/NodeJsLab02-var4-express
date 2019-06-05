export interface IAuthor {
    id: number;
    name: string;
}

export interface IAuthorService {
    getAuthors(): IAuthor[];
    addAuthor(authorName: string): IAuthor;
    removeAuthor(authorId: number): void;
    getById(authorId: number): IAuthor;
}

export interface IAuthorDal {
    getAuthors(): IAuthor[];
    addAuthor(author: IAuthor): void;
    removeAuthor(authorId: number): void;
    getById(authorId: number): IAuthor | null;
}