const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9000;

const { connect } = require("./utils/dbconnect");
// GLOBAL MIDDLEWARE
app.use(cors());
app.use(express.json());


connect();

// routes 
const paintingsRoutes = require("./routes/paintings.route");
app.use('/paintings',paintingsRoutes)

app.get("/", (req, res) => {
  res.send({ data: "Crack ai Server Side ", status: 200 });
});

app.listen(port, () => {
  console.log("Server is running port : " + port);
});
