import * as express from "express";
import {IPublisherController} from "../controllers/publisher.interfaces";
import {PublisherController} from "../controllers/publisher.controller";
import {IPublisher} from "../services/PublisherService/publisher.interfaces";
import {IAuthors} from "../services/AuthorPublisherService/authorPublisher.interfaces";

const router = express.Router();
const publisherController: IPublisherController = new PublisherController();

router.get("", (req, res, next) => {
    try {
        const publishers: IPublisher[] = publisherController.getPublishers();

        res.json(publishers);
    } catch (error) {
        next(error);
    }
});

router.post("", (req, res, next) => {
    try {
        const publisherName: string = req.body.name;
        const publisher: IPublisher = publisherController.addPublisher(publisherName);

        res.json(publisher);

    } catch (error) {
        next(error);
    }
});

router.delete("/:id", (req, res, next) => {
    try {
        const publisherId: number = +req.params.id;
        publisherController.removePublisher(publisherId);

        res.send("Done");
    } catch (error) {
        next(error);
    }
});

router.get("/:id", (req, res, next) => {
    try {
        const publisherId: number = +req.params.id;
        const publisher: IPublisher = publisherController.getPublisherById(publisherId);

        res.json(publisher);
    } catch (error) {
        next(error);
    }
});

router.delete("/:publisherId/authors/:authorId", (req, res, next) => {
   try {
       const authorId: number = +req.params.authorId;
       const publisherId: number = +req.params.publisherId;

       publisherController.removeAuthor(authorId, publisherId);

       res.send("Done");
   } catch (error) {
       next(error);
   }
});

router.get("/:id/authors", (req, res, next) => {
   try {
       const publisherId: number = +req.params.id;
       const authors: IAuthors = publisherController.getAuthors(publisherId);

       res.json(authors);
   } catch (error) {
       next(error);
   }
});

module.exports = router;