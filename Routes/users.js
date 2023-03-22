const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req,res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
   res.render("users/new", {firstName: "Test"});
});

router.post("/", (req, res) => {
    const isValied = true;
    if (isValied) {
        users.push();
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log("Error");
        res.push("users/new", {firstName: req.body.firstName});
    }

    res.send("hi");
});

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    });

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;