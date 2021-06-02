const express = require("express");
const router = express.Router();

const controller = require("../controller/fileUpload.controller");

router.post("/upload-file", controller.uploadFile)

router.get("/files", controller.getFilesList)

router.get("/files/:name", controller.downloadFiles)

module.exports = router;