const express = require("express");
const authRouter = require("./controllers/main-controller");
const cors = require("cors");
const db = require("./mongoDB");

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`It is work in port:${PORT}`));
