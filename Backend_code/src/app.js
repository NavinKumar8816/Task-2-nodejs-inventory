const express = require("express");
const cors = require("cors");

const app = express();
const orderRoutes = require("./routes/order.routes");


app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());
app.use("/api", orderRoutes);

module.exports = app;
