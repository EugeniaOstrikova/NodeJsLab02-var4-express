import {IAuthor, IAuthorService} from "./author.interfaces";
import {AuthorDal} from "./DAL/author.dal";

export class AuthorService implements IAuthorService {
    private authorDal: AuthorDal;

    constructor() {
        this.authorDal = new AuthorDal();
    }

    public getAuthors(): IAuthor[] {
        return this.authorDal.getAuthors();
    }

    public addAuthor(authorName: string): IAuthor {
        const authors:IAuthor[] = this.authorDal.getAuthors();

        let authorId: number = authors.length + 1;
        let checkAuthor: IAuthor = authors.find((author: IAuthor) => author.id === authorId);

        while (checkAuthor) {
            ++authorId;
            checkAuthor = authors.find((author: IAuthor) => author.id === authorId);
        }

        const author: IAuthor = {
            id: authorId,
            name: authorName
        };

        this.authorDal.addAuthor(author);

        return author;
    }

    public removeAuthor(authorId: number): void {
        this.authorDal.removeAuthor(authorId);
    }

    public getById(authorId: number): IAuthor {
        const author: IAuthor | null = this.authorDal.getById(authorId);
        if(!author) {
            throw new Error("Author not found.")
        }

        return author;
    }
}