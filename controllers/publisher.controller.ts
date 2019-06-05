import {IPublisherController} from "./publisher.interfaces";
import {PublisherService} from "../services/PublisherService/publisher.service";
import {IPublisher} from "../services/PublisherService/publisher.interfaces";
import {AuthorPublisherService} from "../services/AuthorPublisherService/authorPublisher.service";
import {IAuthorPublisher, IAuthors, IWorkInfo} from "../services/AuthorPublisherService/authorPublisher.interfaces";
import {AuthorService} from "../services/AuthorService/author.service";

export class PublisherController implements IPublisherController{
    private publisherService: PublisherService;
    private authorService: AuthorService;
    private authorPublisherService: AuthorPublisherService;

    constructor() {
        this.publisherService = new PublisherService();
        this.authorService = new AuthorService();
        this.authorPublisherService = new AuthorPublisherService();
    }

    public getPublishers():IPublisher[] {
        return this.publisherService.getPublishers();
    }

    public addPublisher(publisherName: string): IPublisher {
        return this.publisherService.addPublisher(publisherName);
    }

    public getPublisherById(publisherId: number): IPublisher {
        return this.publisherService.getById(publisherId);
    }

    public removePublisher(publisherId: number): void {
        this.publisherService.removePublisher(publisherId);
    }

    public removeAuthor(authorId: number, publisherId: number): void {
        this.authorPublisherService.removeAuthorPublisher(authorId, publisherId);
    }

    public getAuthors(publisherId: number): IAuthors {
        const authorPublishers: IAuthorPublisher[] = this.authorPublisherService.getAllAuthorsByPublisherId(publisherId);
        let totalSalary: number = 0;

        let workInfos: IWorkInfo[] = authorPublishers.map((item: IAuthorPublisher) => {
            let authorName: string = this.authorService.getById(item.authorId).name;

            let author: IWorkInfo = {
                name: authorName,
                dateOfJoin: item.dateOfJoin,
                salary: item.salary
            };

            totalSalary += item.salary;

            return author;
        });

        return {
            authors: workInfos,
            totalSalary: totalSalary
        }
    }
}