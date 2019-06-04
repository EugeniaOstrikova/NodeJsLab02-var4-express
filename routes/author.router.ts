import {AuthorController} from "../controllers/author.controller";
import {IAuthor} from "../services/AuthorService/author.interfaces";
import * as express from "express";
import {IPublishers} from "../services/AuthorPublisherService/authorPublisher.interfaces";

const router = express.Router();
const authorController: AuthorController = new AuthorController();

router.get("/:id", (req, res, next) => {
    try {
        const authorId: number = +req.params.id;

        const author: IAuthor = authorController.getAuthorById(authorId);

        res.json(author);
    } catch (error) {
        next(error);
    }
});

router.post("/:authorId/publishers/:publisherId", (req, res, next) => {
    try {
        const authorId: number = +req.params.authorId;
        const publisherId: number = +req.params.publisherId;
        const salary: number = +req.body.salary;

        authorController.addPublisher(authorId, publisherId, salary);

        res.send("Done");
    } catch (error) {
        next(error);
    }
});

router.delete("/:authorId/publishers/:publisherId", (req, res, next) => {
    try {
        const authorId: number = +req.params.authorId;
        const publisherId: number = +req.params.publisherId;

        authorController.removePublisher(authorId, publisherId);

        res.send("Done");
    } catch (error) {
        next(error);
    }
});

router.get("/:id/publishers", (req, res, next) => {
    try {
        const authorId: number = +req.params.id;
        const publishers: IPublishers = authorController.getPublishers(authorId);

        res.json(publishers);
    } catch (error) {
        next(error);
    }
});

module.exports = router;