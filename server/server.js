const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const usersRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionRoute");

app.use("/api/users", usersRoute);
app.use("api/transactions", transactionsRoute);

const PORT = process.env.PORT || 5000; // 3000 is running 'react app'

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
