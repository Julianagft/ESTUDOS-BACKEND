import express from 'express';


const router = express.Router();

router.get("/", (re, res) => {
    return  res.send("Hello  World!")
 });

export default router;