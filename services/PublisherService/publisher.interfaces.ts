export interface IPublisher {
    id: number;
    name: string;
}

export interface IPublisherService {
    getPublishers(): IPublisher[];
    addPublisher(publisherName): IPublisher;
    getById(publishingHouseId: number): IPublisher;
    removePublisher(publisherId: number): void;
}

export interface IPublisherDal {
    getPublishers(): IPublisher[];
    addPublisher(publisher: IPublisher): void;
    getById(publishingHouseId: number): IPublisher | null;
    removePublisher(publisherId: number): void;
}