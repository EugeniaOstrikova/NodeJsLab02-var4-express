import {IPublisher} from "../services/PublisherService/publisher.interfaces";
import {IAuthors} from "../services/AuthorPublisherService/authorPublisher.interfaces";

export interface IPublisherController {
    getPublisherById(publisherId: number): IPublisher;
    removeAuthor(authorId: number, publisherId: number): void;
    getAuthors(publisherId: number): IAuthors;
}