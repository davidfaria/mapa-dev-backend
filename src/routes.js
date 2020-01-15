const { Router } = require("express");
const routes = Router();

/**
 * Controllers
 */
const DevController = require("./app/controllers/DevController");
const SearchController = require("./app/controllers/SearchController");

routes.get("/", (req, res) => {
  return res.json({
    name: "Api mapa dev",
    version: "1.0.0"
  });
});

routes.get("/search", SearchController.index);

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

module.exports = routes;
