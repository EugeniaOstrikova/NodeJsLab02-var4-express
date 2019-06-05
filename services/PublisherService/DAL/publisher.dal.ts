import {IPublisher, IPublisherDal} from "../publisher.interfaces";
import * as fs from "fs";

export class PublisherDal implements IPublisherDal{
    constructor() {}

    public getPublishers(): IPublisher[] {
        return this.getData();
    }

    public addPublisher(publisher: IPublisher): void {
        let publishers: IPublisher[] = this.getData();
        publishers.push(publisher);

        this.setData(publishers);
    }

    public getById(publisherId: number): IPublisher | null {
        const publishers = this.getData();
        return publishers.find((publisher) => publisher.id === publisherId);
    }

    public removePublisher(publisherId: number): void {
        const publishers: IPublisher[] = this.getData();

        let filterPublishers: IPublisher[] = publishers.filter((publisher: IPublisher) => publisher.id != publisherId);

        this.setData(filterPublishers);
    }

    private getData(): IPublisher[] {
        return JSON.parse(fs.readFileSync("./data/publishers.json", {encoding: "utf8"}));
    }

    private setData(publishers: IPublisher[]): void {
        fs.writeFileSync("./data/publishers.json", JSON.stringify(publishers));
    }
}