
import 'cross-fetch/polyfill';
import ApolloClient from "apollo-boost/lib/index";
import { gql } from "apollo-boost";


  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });



  client.query({
    query: gql`{launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      ships {
        name
        home_port
        image
      }
    }
  }`
  }).then(result => console.log(result)); 



module.exports = {myFunc: myFunc};