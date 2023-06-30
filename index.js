require("dotenv").config();
const envData = require("./utils/config")
const port = envData.PORT ||5000;
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
// const swaggerUI = require("swagger-ui-express");
 const venderAuthRouter = require("./router/auth");
// const swaggerDocument = require("./swagger");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res,next) => {
  let host = req.headers.host
  req.subdomian = host.split('.')[0];
  next()
});
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use("/tenant", tenantRouter);
// app.use("/admin", adminRouter);
 app.use("/user", venderAuthRouter);
app.use("/", (req, res) => {
  res.send("Welcome to netweb tech mvp docs, Go to /docs to see all apis");
});
app.use((req, res) => {
  res.send("invalid endpoint please check http method and url");
});
app.listen(port, () => {
      console.log(`listen on ${port}`);
    });
