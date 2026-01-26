const express = require("express");
const path = require("path");
const cors = require("cors");
const ejsMate = require("ejs-mate");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 8080;

app.use(cors());

// view engine
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.set("layout", "layouts/main");

// static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/home", (req, res) => {
  res.render("pages/home", { title: "Home" });
});

app.get("/profile", (req, res) => {
  res.render("pages/profile", { title: "Profile" });
});

app.get("/skills", (req, res) => {
  res.render("pages/skills", { title: "Skills" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact" });
});

app.get("/menu", (req, res) => {
  res.render("pages/menu", { title: "Menu" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
