import {IAuthorPublisher, IAuthorPublisherService} from "./authorPublisher.interfaces";
import {AuthorPublisherDal} from "./DAL/authorPublisher.dal";

export class AuthorPublisherService implements IAuthorPublisherService{
    private authorPublisherDal: AuthorPublisherDal;
    constructor() {
        this.authorPublisherDal = new AuthorPublisherDal();
    }

    public getAllAuthorsByPublisherId(publisherId: number): IAuthorPublisher[] {
        return this.authorPublisherDal.getAllAuthorsByPublisherId(publisherId);
    }

    public getAllPublishersByAuthorId(authorId: number): IAuthorPublisher[] {
        return this.authorPublisherDal.getAllPublishersByAuthorId(authorId);
    }

    public getSalary(data: IAuthorPublisher[]): number {
        return data.reduce((salary: number, item: IAuthorPublisher) => salary + item.salary, 0);
    }

    public addAuthorHouse(authorPublisher: IAuthorPublisher): void {
        this.authorPublisherDal.addAuthorHouse(authorPublisher);
    }

    public removeAuthorPublisher(authorId: number, publisherId: number): void {
        this.authorPublisherDal.removeAuthorHouse(authorId, publisherId);
    }
}