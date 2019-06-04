import {AuthorService} from "../services/AuthorService/author.service";
import {IAuthorController} from "./author.interfaces";
import {IAuthor} from "../services/AuthorService/author.interfaces";
import {AuthorPublisherService} from "../services/AuthorPublisherService/authorPublisher.service";
import {IAuthorPublisher, IPublishers, IWorkInfo} from "../services/AuthorPublisherService/authorPublisher.interfaces";
import {PublisherService} from "../services/PublisherService/publisher.service";
import {IPublisher} from "../services/PublisherService/publisher.interfaces";

export class AuthorController implements IAuthorController{
    private authorService: AuthorService;
    private publisherService: PublisherService;
    private authorPublisherService: AuthorPublisherService;

    constructor() {
        this.authorService = new AuthorService();
        this.publisherService = new PublisherService();
        this.authorPublisherService = new AuthorPublisherService();
    }

    public getAuthorById(authorId: number): IAuthor {
        return this.authorService.getById(authorId);
    }

    public addPublisher(authorId: number, publisherId: number, salary: number): void {
        let author: IAuthor = this.authorService.getById(authorId);
        let publisher: IPublisher = this.publisherService.getById(publisherId);

        if (!author) {
            throw new Error("There is no that author.")
        }

        if (!publisher) {
            throw new Error("There is no that publisher.")
        }

        let newAuthorPublisher: IAuthorPublisher = {
            authorId: authorId,
            publisherId: publisherId,
            dateOfJoin: new Date().toISOString(),
            salary: salary
        };

        this.authorPublisherService.addAuthorHouse(newAuthorPublisher);
    }

    public removePublisher(authorId: number, publisherId: number): void {
        this.authorPublisherService.removeAuthorPublisher(authorId, publisherId);
    }

    public getPublishers(authorId: number): IPublishers {
        const authorPublishers: IAuthorPublisher[] = this.authorPublisherService.getAllPublishersByAuthorId(authorId);
        let totalSalary: number = 0;

        let workInfos: IWorkInfo[] = authorPublishers.map((item: IAuthorPublisher) => {
            let publisherName: string = this.publisherService.getById(item.publisherId).name;

            let publisher: IWorkInfo = {
                name: publisherName,
                dateOfJoin: item.dateOfJoin,
                salary: item.salary
            };

            totalSalary += item.salary;

            return publisher;
        });

        return {
            publishers: workInfos,
            totalSalary: totalSalary
        }
    }
}