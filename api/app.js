const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Config static files
app.use(express.static(path.join(__dirname, "/assets")));

// Avoid CORS policy
app.use(cors());

// This help us to protect our app
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use(require("./routes/authRoute"));
app.use(require("./routes/profileRoute"));
app.use(require("./routes/rolRoute"));
app.use(require("./routes/userRoute"));
app.use(require("./routes/uploadRoute"));
app.use(require("./routes/searchRoute"));
app.use(require("./routes/generatorRoute"));
app.use(require("./routes/mainRoute"));
app.use(require("./routes/solicityRoute"));
app.use(require("./routes/appreticeRoute"));

module.exports = app;
