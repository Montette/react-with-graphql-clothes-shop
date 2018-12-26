//graphql yoga - express server, easiet way to run graphql server

const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('./resolvers/Mutation.js');
const Query = require('./resolvers/Query.js');
const db = require('./db.js');
//resolvers - query resolvers, when I pull data and mutation resolvers when I push data
//need to create two separate files for resolvers


//create yoga server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db })
    })
}

module.exports = createServer;
//tutaj tworzymy drugi graphql server(oprcz prismy), każdy z nim ma swoje typedefs, schema
