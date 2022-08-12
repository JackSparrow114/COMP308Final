//https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
//
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const cors = require('cors')

const mongoose = require("mongoose");


// GraphQL schema
// buildSchema is helper function to build a GraphQLSchema
// directly from a source document.
var schema = require('./graphql/schema/schema');
//

// root resolver
// The root provides a resolver function for each API endpoint
var root = require('./graphql/root-setup');

// Create an express server and a GraphQL endpoint
var app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
//

const username = "admin";
const password = "admin";
const cluster = "comp308-cluster1.rxlejv6";
const dbname = "Hospital-DB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
