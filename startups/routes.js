const postRoutes = require("../routes/posts");
const userRoutes = require("../routes/users");

module.exports = (app) => {
    app.use("/posts", postRoutes);
    app.use("/", userRoutes);
};
