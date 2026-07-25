const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    const start = Date.now();

    const response = await axios.get(url, {
      timeout: 10000,
    });

    const end = Date.now();

    const $ = cheerio.load(response.data);

    const title = $("title").text() || "Not Found";

    const metaDescription =
      $('meta[name="description"]').attr("content") || "Not Found";

    const h1Count = $("h1").length;

    const imagesWithoutAlt = $("img").filter(function () {
      return !$(this).attr("alt");
    }).length;

    const wordCount = $("body").text().trim().split(/\s+/).length;

    res.json({
      status: response.status,
      responseTime: end - start,
      title,
      metaDescription,
      h1Count,
      imagesWithoutAlt,
      wordCount,
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to analyze website",
      error: error.message,
    });

  }
});

module.exports = router;