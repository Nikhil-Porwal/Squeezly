const express = require("express");
const{
    handleGenNewShortUrl,
    handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/" , handleGenNewShortUrl);

router.get("/analytics/:shortId" , handleGetAnalytics);

module.exports = router;