const getPostsMiddleware = (req, res, next) => {
    next();
};

const addPostMiddleware = (req, res, next) => {
    if (req.body) {
        if (!req.body.title) {
            return res.send({ status: 422, message: 'Title is required' })
        }
        if (!req.body.description) {
            return res.send({ status: 422, message: 'Description is required' })
        }
        if (!req.body.author) {
            return res.send({ status: 422, message: 'Author is required' })
        }
    } else {
        next();
    }
}

const updatePostMiddleware = (req, res, next) => {
    if (!req.params.id) {
        return res.send({ status: 422, message: 'id is required' })
    }
    else {
        next();
    }
}

const deletePostMiddleware = (req, res, next) => {
    if (!req.params.id) {
        return res.send({ status: 422, message: 'id is required' })
    }
    else {
        next();
    }
}

module.exports = {
    getPostsMiddleware,
    addPostMiddleware,
    updatePostMiddleware,
    deletePostMiddleware
};
