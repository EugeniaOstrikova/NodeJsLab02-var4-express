export interface IAuthorPublisher {
    authorId: number;
    publisherId: number;
    dateOfJoin: string;
    salary: number;
}

export interface IWorkInfo {
    name: string;
    salary: number;
    dateOfJoin: string;
}

export interface IPublishers {
    publishers: IWorkInfo[];
    totalSalary: number;
}

export interface IAuthors {
    authors: IWorkInfo[];
    totalSalary: number;
}

export interface IAuthorPublisherService {
    getAllAuthorsByPublisherId(publisherId: number): IAuthorPublisher[];
    getAllPublishersByAuthorId(authorId: number): IAuthorPublisher[];
    getSalary(data: IAuthorPublisher[]): number;
    addAuthorHouse(authorPublisher: IAuthorPublisher): void;
    removeAuthorPublisher(authorId: number, publisherId: number): void;
}

export interface IAuthorPublisherDal {
    getAllAuthorsByPublisherId(publisherId: number): IAuthorPublisher[];
    getAllPublishersByAuthorId(authorId: number): IAuthorPublisher[];
    addAuthorHouse(authorPublisher: IAuthorPublisher): void;
    removeAuthorHouse(authorId: number, publisherId: number): void;
}