let data = [];
const aysncFunc = (res) => {
    data.push(res);
}

const client = new ApolloClient({
    uri: 'https://graphql-demo.azurewebsites.net/'
  });
  
  client
    .query({
      query: gql`{
        me {
          displayName
          officeLocation
          skills
          messages {
            subject
            isRead
            from {
              emailAddress {
                address
              }
            }
          }
        }
      }`
    })
    .then(result => aysncFunc(result));
console.log(data);
module.exports = data