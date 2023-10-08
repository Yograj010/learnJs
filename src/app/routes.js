function apiRoutes(app) {
    app.use('/api', require("./conecpts/javascript/index"));
}

module.exports = apiRoutes;