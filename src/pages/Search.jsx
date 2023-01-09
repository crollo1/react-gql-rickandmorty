import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useState } from 'react';
import './Search.css';

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter: { name: $name}) {
      results {
        location {
          name
        }
      }
    }
  }
`

export default function Search() {

    const [name, setName] = useState("");

    const [getLocations, {loading, error, data, called}] = useLazyQuery(
        GET_CHARACTER_LOCATIONS, 
        {
            variables: {
                name,
            },
        }
    );

    console.log({called, loading, error, data});

    return (
        <div id="Search">
            <h3>Search Name For Character Episodes</h3>
            <input value={name} onChange={ (e) => setName(e.target.value)} />
            <button onClick={() => getLocations()} >Search</button>
            {loading && <div>Loading ...</div>}
            {error && <div>Error fetching data!</div>}
            { data && (
                <ul>
                    { data.characters.results.map((character) => { 
                        return <li>{character.location.name}</li>
                    })}
                </ul>
                
            ) }
        </div>
    )
}