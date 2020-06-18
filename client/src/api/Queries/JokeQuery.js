import gql from 'graphql-tag';
import client from '../../api';

const JOKE_QUERY = gql`
    query JokeQuery($category: String!){
        random(category: $category){
            value
        }
    }
`;

export default (variable, callback) => {
    client.query({
        query: JOKE_QUERY,
        variables: variable
    })
    .then(res => callback(res))
    .catch(err => console.log(err));
}