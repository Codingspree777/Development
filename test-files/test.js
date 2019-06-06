import React from 'react';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import 'cross-fetch/polyfill';

const client = new ApolloClient({
    uri: 
  });

const ExchangeRates = () => (
    <Query
      query={gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `}
    >
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        let arrayOfCurrencies = [];
        data.rates.map(({ currency, rate }) => {
          arrayOfCurrencies.push(<InnerPost currency={currency} rate={rate} />)
        })
        console.log('ran div')
        return /*data.rates.map(({ currency, rate }) =>*/ (
          <div>
            <button style={{ "height": "50px", "width": "100px" }} onClick={() => refetch()}>Refetch!</button>
            {arrayOfCurrencies};
          </div>
        );
      }}
    </Query>
  );

ExchangeRates();