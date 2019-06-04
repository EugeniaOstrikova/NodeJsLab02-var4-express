import {IAuthorPublisher, IAuthorPublisherDal} from "../authorPublisher.interfaces";
import * as fs from "fs";

export class AuthorPublisherDal implements IAuthorPublisherDal{
    constructor() {}

    public getAllAuthorsByPublisherId(publisherId: number): IAuthorPublisher[] {
        const data = this.getData();
        return data.filter((item: IAuthorPublisher) => item.publisherId === publisherId);
    }

    public getAllPublishersByAuthorId(authorId: number): IAuthorPublisher[] {
        const data = this.getData();
        return data.filter((item: IAuthorPublisher) => item.authorId === authorId);
    }

    public addAuthorHouse(authorPublisher: IAuthorPublisher): void {
        const data: IAuthorPublisher[] = this.getData();

        let checkData: IAuthorPublisher[] = data.filter((item: IAuthorPublisher) => item.authorId === authorPublisher.authorId);

        if(checkData.some((item: IAuthorPublisher) => item.publisherId === authorPublisher.publisherId)) {
            throw new Error("The author already has this publisher.")
        }

        if(checkData.length >= 5) {
            throw new Error("The author has many publishers.")
        }

        data.push(authorPublisher);
        this.setData(data);
    }

    public removeAuthorHouse(authorId: number, publisherId: number): void {
        const data: IAuthorPublisher[] = this.getData();

        let filterData: IAuthorPublisher[] = data.filter((item: IAuthorPublisher) => {
            return !(item.authorId === authorId && item.publisherId === publisherId);
        });

        this.setData(filterData);
    }

    private getData(): IAuthorPublisher[] {
        return JSON.parse(fs.readFileSync("./data/author_publisher.json", {encoding: "utf8"}));
    }

    private setData(authorPublishers: IAuthorPublisher[]): void {
        fs.writeFileSync("./data/author_publisher.json", JSON.stringify(authorPublishers));
    }
}