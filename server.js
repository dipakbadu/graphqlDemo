const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema');
const mongoose = require("mongoose");
const app = express();
const winston = require("winston");
require('dotenv').config()
const auth = require("./middleware/auth")


const url = `mongodb://localhost:27017/Graphql`;
mongoose
    .connect(url)
    .then(() => winston.info("MongoDB is connected"));

app.use(auth);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,

}));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});