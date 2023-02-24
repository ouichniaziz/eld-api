import prisma from "../db";

/**
 * Get all posts
 * @param req
 * @param res
 * @param next
 */
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany();

    res.json({ data: posts });
  } catch (err) {
    next(err);
  }
};

/**
 * Get one post
 * @param req
 * @param res
 * @param next
 */
export const getOnePost = async (req, res, next) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: post });
  } catch (err) {
    next(err);
  }
};

/**
 * Create one post
 * @param req
 * @param res
 * @param next
 */
export const createPost = async (req, res, next) => {
  try {
    const createdPost = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
      },
    });

    res.json({ data: createdPost });
  } catch (err) {
    next(err);
  }
};

/**
 * Delete a post
 * @param req
 * @param res
 * @param next
 */
export const deletePost = async (req, res, next) => {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: deletedPost });
  } catch (err) {
    next(err);
  }
};

/**
 * Upvote a post by one
 * @param req 
 * @param res 
 * @param next 
 */
export const upVotePost = async (req, res, next) => {
  try {
    const upVotedPost = await prisma.post.update({
      where: {
        id: req.params.id,
      },
      data: {
        upvote: {
          increment: 1,
        },
      },
    });

    res.json({ data: upVotedPost });
  } catch (err) {
    next(err);
  }
};

/**
 * Downvote a post by one
 * @param req 
 * @param res 
 * @param next 
 */
export const downVotePost = async (req, res, next) => {
  try {
    const downVotedPost = await prisma.post.update({
      where: {
        id: req.params.id,
      },
      data: {
        downvote: {
          increment: 1,
        },
      },
    });

    res.json({ data: downVotedPost });
  } catch (err) {
    next(err);
  }
};
