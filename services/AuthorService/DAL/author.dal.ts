import {IAuthor, IAuthorDal} from "../author.interfaces";
import * as fs from "fs";

export class AuthorDal implements IAuthorDal {
    constructor() {};

    public getAuthors(): IAuthor[] {
        return this.getData();
    }

    public getById(authorId: number): IAuthor | null {
        const authors = this.getData();
        return authors.find((author: IAuthor) => author.id === authorId);
    }

    public addAuthor(author: IAuthor): void {
        let authors: IAuthor[] = this.getData();
        authors.push(author);

        this.setData(authors);
    }

    public removeAuthor(authorId: number): void {
        let authors: IAuthor[] = this.getData();

        let filterAuthors: IAuthor[] = authors.filter((author: IAuthor) => author.id != authorId);

        this.setData(filterAuthors);
    }

    private getData(): IAuthor[] {
        return JSON.parse(fs.readFileSync("./data/authors.json", {encoding: "utf8"}));
    }

    private setData(authors: IAuthor[]): void {
        fs.writeFileSync("./data/authors.json", JSON.stringify(authors));
    }
}