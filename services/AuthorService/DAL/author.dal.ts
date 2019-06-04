import {IAuthor, IAuthorDal} from "../author.interfaces";
import * as fs from "fs";

export class AuthorDal implements IAuthorDal {
    constructor() {};

    public getById(authorId: number): IAuthor | null {
        const authors = this.getData();
        return authors.find((author: IAuthor) => author.id === authorId);
    }

    private getData(): IAuthor[] {
        return JSON.parse(fs.readFileSync("./data/authors.json", {encoding: "utf8"}));
    }
}