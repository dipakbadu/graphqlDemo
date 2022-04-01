const graphql = require('graphql');
const { GraphQLSchema }  = graphql;
const query  = require("./queries/rootQuery")
const mutation = require('./mutations/rootMutations');

module.exports =  new GraphQLSchema({
    query,
    mutation,
});