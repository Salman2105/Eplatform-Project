import express from 'express';
import getBooks from "../control/bookControler.js"

const router = express.Router();

router.get("/books", getBooks);

export default router;