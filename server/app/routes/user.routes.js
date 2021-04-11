const {authJwt} = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/habits", [authJwt.verifyToken], controller.userHabits);
    app.post("/api/habits", [authJwt.verifyToken], controller.userAddHabit);
    app.put("/api/habits", [authJwt.verifyToken], controller.userUpdateHabit);
    app.delete("/api/habits", [authJwt.verifyToken], controller.userDeleteHabit);

    app.post("/api/habits/done", [authJwt.verifyToken], controller.userDoneHabit);


    app.get("/api/categories", [authJwt.verifyToken], controller.userCategories);
    app.post("/api/categories", [authJwt.verifyToken], controller.userAddCategory);

};
