const api = require('../chuck_api');
const {
    GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');

const JokeType = new GraphQLObjectType({
    name: 'Joke',
    fields: () => ({
        id: {type: GraphQLString},
        value: {type: GraphQLString},
        competition: {type: GraphQLString},
        icon_url: {type: GraphQLString}
    })
});

const CategoryType = new GraphQLList(GraphQLString);

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        categories: {
            type: CategoryType,
            resolve(parent, args){
                return api
                    .get('/categories')
                    .then(res => res.data)
            }
        },
        random: {
            type: JokeType,
            args: {
                category: {type: GraphQLString}
            },
            resolve(parent, args){
                return api
                    .get(`/random?category=${args.category}`)
                    .then(res => res.data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});