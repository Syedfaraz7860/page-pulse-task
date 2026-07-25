const express = require("express");
const cors = require("cors");

const auditRoute = require("./routes/audit");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/audit", auditRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});