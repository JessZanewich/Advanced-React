import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// best practice to put queries in caps`
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

class Items extends Component {
    render() {
        return (
            <div>
              <p>Items!</p>
              <Query query={ALL_ITEMS_QUERY }>
                  {({ data, error, loading }) => {
                      if(loading) return <p>Loading...</p>
                      if(error) return <p>Error: {error.message}</p>
                      return <p>I found {data.items.length} items! </p>
                  }}
              </Query>
            </div>
        )
    }
}

export default Items;
