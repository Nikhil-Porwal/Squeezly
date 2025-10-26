const { nanoId, nanoid } = require("nanoid");
const URL = require("../models/url");
const {
    restrictToLoggedInUserOnly,
    checkAuth,
} = require("../service/auth")

async function handleGenNewShortUrl(req,res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error:"url is required!"});
    const shortID = nanoid(8);

    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visited: [],
        createdBy: req.user,
    });

    return res.render("home",{
        id: shortID,
    });
}

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visited.length,
        analytics: result.visited,
    });
}

module.exports = {
    handleGenNewShortUrl,
    handleGetAnalytics,
};