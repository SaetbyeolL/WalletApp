const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const usersRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionRoute");
const requestsRoute = require("./routes/requestsRoute");

app.use("/api/users", usersRoute);
app.use("/api/transactions", transactionsRoute);
app.use("/api/requests", requestsRoute);

const PORT = process.env.PORT || 5000; // 3000 is running 'react app'
const path = require("path");

// heroku deployment
if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
