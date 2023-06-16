const postRoutes = require("../routes/postsRoutes");

module.exports = (app) => {
    app.use("/posts", postRoutes);
};
