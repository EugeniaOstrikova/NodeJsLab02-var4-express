import {IPublisher} from "../services/PublisherService/publisher.interfaces";
import {IAuthors} from "../services/AuthorPublisherService/authorPublisher.interfaces";

export interface IPublisherController {
    getPublishers():IPublisher[];
    getPublisherById(publisherId: number): IPublisher;
    addPublisher(publisherName: string): IPublisher;
    removePublisher(publisherId: number): void;
    removeAuthor(authorId: number, publisherId: number): void;
    getAuthors(publisherId: number): IAuthors;
}