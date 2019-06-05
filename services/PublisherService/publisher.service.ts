import {PublisherDal} from "./DAL/publisher.dal";
import {IPublisher, IPublisherService} from "./publisher.interfaces";

export class PublisherService implements IPublisherService{
    private publisherDal: PublisherDal;

    constructor() {
        this.publisherDal = new PublisherDal();
    }

    public getPublishers(): IPublisher[] {
        return this.publisherDal.getPublishers();
    }

    public addPublisher(publisherName): IPublisher {
        const publishers: IPublisher[] = this.publisherDal.getPublishers();

        let publisherId: number = publishers.length + 1;
        let checkPublisher: IPublisher = publishers.find((publisher: IPublisher) => publisher.id === publisherId);

        while (checkPublisher) {
            ++publisherId;
            checkPublisher = publishers.find((publisher: IPublisher) => publisher.id === publisherId);
        }

        const publisher: IPublisher = {
            id: publisherId,
            name: publisherName
        };

        this.publisherDal.addPublisher(publisher);
        return publisher;
    }

    public removePublisher(publisherId: number): void {
        this.publisherDal.removePublisher(publisherId);
    }

    public getById(publisherId: number): IPublisher {
        const publisher: IPublisher = this.publisherDal.getById(publisherId);
        if(!publisher) {
            throw new Error("Publisher not found.");
        }
        return publisher;
    }
}