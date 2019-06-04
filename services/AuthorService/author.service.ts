import {IAuthor, IAuthorService} from "./author.interfaces";
import {AuthorDal} from "./DAL/author.dal";

export class AuthorService implements IAuthorService {
    private authorDal: AuthorDal;

    constructor() {
        this.authorDal = new AuthorDal();
    }

    public getById(authorId: number): IAuthor {
        const author: IAuthor | null = this.authorDal.getById(authorId);
        if(!author) {
            throw new Error("Author not found.")
        }

        return author;
    }
}