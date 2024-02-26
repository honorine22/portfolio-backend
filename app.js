const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const fs = require("file-system");
const commentRoutes = require("./routes/commentsRouters");
const projectRoutes = require("./routes/projectsRouters");
const { database } = require("./config/db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,PUT, OPTIONS"
  );
  next();
});

//configure database and mongoose
mongoose.set('strictQuery', false);
mongoose
  .connect(database, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log("Connection Failed!", { database_error: err });
  });

app.use(cors({}));
//configure body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan
app.use("/comments", commentRoutes);
app.use("/projects", projectRoutes);
// Pdf route that will serve pdf
app.get("/pdf", (req, res) => {
  var file = fs.createReadStream("./images/resume.pdf");
  file.pipe(res);
});
// define first route
app.get("/", (req, res) => {
  res.json("Nuxt Portfolio!!!");
});

module.exports = app;
