import {IPublisher, IPublisherDal} from "../publisher.interfaces";
import * as fs from "fs";

export class PublisherDal implements IPublisherDal{
    constructor() {}

    public getById(publisherId: number): IPublisher | null {
        const publishers = this.getData();
        return publishers.find((publisher) => publisher.id === publisherId);
    }

    private getData(): IPublisher[] {
        return JSON.parse(fs.readFileSync("./data/publishers.json", {encoding: "utf8"}));
    }
}