
import 'cross-fetch/polyfill';
import ApolloClient from "apollo-boost/lib/index";
import { gql } from "apollo-boost";


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
}); 



module.exports = {myFunc: myFunc}