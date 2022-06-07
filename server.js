// const fetch = (url) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(url));
const express = require("express");
const app = express();
const path = require("path");
const lolChamps = require("./banki");
const cors = require("cors");
app.use(cors());
// let champs = [];
// getQuestion();
//displays the html and related files to the user
app.use(express.static(path.join(__dirname, "public")));

//This is just a link to access the banki api for the user
app.get("/api", (req, res) => {
  res.json(lolChamps);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// async function getQuestion() {
//   const res = await fetch(
//     `http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json`
//   );
//   const data = await res.json();
//   const champInfo = data.data;
//   for (key in champInfo) {
//     // console.log(champInfo[key].name);
//     let champ = {
//       "name": champInfo[key].name,
//       "title": champInfo[key].title,
//       "blurb": champInfo[key].blurb,
//       "primary role": champInfo[key].tags[0],
//     };
//     champs.push(champ);
//   }
// }
