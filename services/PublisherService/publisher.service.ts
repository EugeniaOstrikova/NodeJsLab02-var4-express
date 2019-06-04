import {PublisherDal} from "./DAL/publisher.dal";
import {IPublisher, IPublisherService} from "./publisher.interfaces";

export class PublisherService implements IPublisherService{
    private publisherDal: PublisherDal;

    constructor() {
        this.publisherDal = new PublisherDal();
    }

    public getById(publisherId: number): IPublisher {
        const publisher: IPublisher = this.publisherDal.getById(publisherId);
        if(!publisher) {
            throw new Error("Publisher not found.");
        }
        return publisher;
    }
}