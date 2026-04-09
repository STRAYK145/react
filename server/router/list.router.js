const express = require("express");
const multer = require('multer');
const router = express.Router();
const { all } = require("../controller/all");
const { lim } = require("../controller/lim");
const { add } = require("../controller/add");
router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept, Authorization"
    );
    next();
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });
router.get("/all", all);
router.post("/add", upload.single('image'), add);
router.get("/lim", lim);
module.exports = router;