require("./associations");
const express = require("express");
const cors = require("cors");
const { port } = require("../config");
const { userRouter, contentRouter } = require("./routes");
const app = express();

app
  .use(express.json())
  .use(cors())
  .use("/user", userRouter)
  .use("/content", contentRouter)
  .listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
