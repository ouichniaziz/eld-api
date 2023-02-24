import { Router } from "express";
import { body } from "express-validator";
import {
  createPost,
  deletePost,
  downVotePost,
  getAllPosts,
  getOnePost,
  upVotePost,
} from "./handlers/posts";
import { handleInputErrors } from "./modules/middlewares";

const router = Router();

/**
 * Posts
 */
router.get("/posts", getAllPosts);
router.get("/post/:id", getOnePost);
router.post(
  "/post",
  body("title").exists().isString(),
  body("content").exists().isString(),
  body("author").exists().isString(),
  handleInputErrors,
  createPost
);
router.delete("/post/:id", deletePost);

/**
 * Post votes
 */
router.put('/postup/:id', upVotePost)
router.put('/postdown/:id', downVotePost)

/**
 * Error hander
 */
router.use((err, req, res, next) => {
    res.json({message: `Error : ${err}`})
})

export default router;
