import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import styled from 'styled-components';
//dane można przekazać albo przez HOC (jak w reduxie) albo przez render props - ostatnimi czasy apollo rekomenduje tę drugą metodę

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
const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;
export default class Items extends Component {
    render() {
        return (
            <Center>
                <p>items</p>
                <Query query={ALL_ITEMS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p>Loading...</p>
                        if(error) return <p>Error: {error.message}</p>
                        return <ItemsList>
                            {data.items.map(item => <div><p>{item.title}</p></div>)}
                        </ItemsList>
                    } }
                </Query>
            </Center>
        )
    }
}