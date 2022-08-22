const express = require("express");
const cors = require("cors");
const { port } = require("../config");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
