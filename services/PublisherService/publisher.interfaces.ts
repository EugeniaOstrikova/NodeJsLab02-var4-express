export interface IPublisher {
    id: number;
    name: string;
}

export interface IPublisherService {
    getById(publishingHouseId: number): IPublisher;
}

export interface IPublisherDal {
    getById(publishingHouseId: number): IPublisher | null;
}