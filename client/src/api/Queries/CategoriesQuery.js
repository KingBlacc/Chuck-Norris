import gql from 'graphql-tag';
import client from '../../api';

const CATEGORIES_QUERY = gql`
    query Categories{
        categories
    }
`;

export default (callback) => {
    client.query({
        query: CATEGORIES_QUERY
    })
    .then(res => callback(res))
    .catch(err => console.log(err));
}