const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "29ab4f75bb2db1deeb32771398e6c025";
const axios = require("axios").default;

const HOME_PAGE_PATH = "dist/home-page.html";
const MOVIES_PAGE_PATH = "dist/movies-page.html";

const appMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(express.json(), appMiddleware, express.static(__dirname + "/dist"));

//--------FETCH_ENDPOINTS------//

async function getDataMovie(cat, page) {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/" +
      cat +
      "?api_key=" +
      API_KEY +
      "&language=en-US&page=" +
      page
  );
  return data.data;
}
app.get("/exp/top-rated/:page", async (req, res) => {
  try {
    res.send(await getDataMovie("top_rated", req.params.page));
  } catch (err) {
    res.send("error!", err);
  }
});

app.get("/exp/upcoming/:page", async (req, res) => {
  try {
    res.send(await getDataMovie("upcoming", req.params.page));
  } catch (err) {
    res.send("error!", err);
  }
});

app.get("/exp/popular/:page", async (req, res) => {
  try {
    res.send(await getDataMovie("popular", req.params.page));
  } catch (err) {
    res.send("error!", err);
  }
});

app.get("/exp/genres", async (req, res) => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      API_KEY +
      "&language=en-US"
  );
  res.send(data.data);
});

app.get("/exp/search/:value", async (req, res) => {
  const value = req.params.value;
  const data = await axios.get(
    "https://api.themoviedb.org/3/search/movie/?api_key=" +
      API_KEY +
      "&query=" +
      value
  );
  res.send(data.data);
});

//-----------RENDER_PAGES------------//

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, HOME_PAGE_PATH));
});
app.get("/movies", (req, res) => {
  res.sendFile(path.resolve(__dirname, MOVIES_PAGE_PATH));
});

app.listen(PORT);
