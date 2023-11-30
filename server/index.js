require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const port = process.env.PORT;
console.log(`*****${port}*****`);

const app = express();
connectDB();
app.use(bodyParser.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

app.listen(port, console.log(`Server running on port ${port}`));
