module.exports = app => {
    //https://documenter.getpostman.com/view/12929730/TW71kSJY
    const user= require("../controller/user.controller.js");
    const food = require("../controller/food.controller.js");
    const request = require("../controller/request.controller.js");
    //USER
    app.post("/create/user", user.create);
    app.get("/users", user.findAll);
    app.post("/validate", user.findOne);
    app.post("/login", user.login);
    app.post("/update/user", user.update);
    app.post("/delete/user", user.delete);
    //FOOD
    app.post("/create/food",food.create);
    app.get("/foods", food.findAll);
    app.post("/food", food.findOne);
    app.post("/update/food", food.update);
    app.delete("/delete/food", food.delete);
    app.delete("/delete/all/foods", food.deleteAll);
    //REQUESTS
    app.post("/create/request",request.create);
    app.get("/requests", request.findAll);
    app.post("/request", request.findOne);
    app.post("/request/update", request.update);
    app.delete("/request/delete/:id", request.delete);
    app.delete("/request/delete/all", request.deleteAll);
  };