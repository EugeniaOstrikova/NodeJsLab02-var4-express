import {IAuthor} from "../services/AuthorService/author.interfaces";
import {IPublishers} from "../services/AuthorPublisherService/authorPublisher.interfaces";

export interface IAuthorController {
    getAuthors(): IAuthor[];
    addAuthor(authorName: string): IAuthor;
    removeAuthor(authorId: number): void;
    getAuthorById(authorId: number): IAuthor;
    addPublisher(authorId: number, publisherId: number, salary: number): void;
    removePublisher(authorId: number, publisherId: number): void;
    getPublishers(authorId: number): IPublishers
}