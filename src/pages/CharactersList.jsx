import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import './CharactersList.css';
import { Link } from "react-router-dom";
import Search from "./Search";

// const GET_CHARACTERS = gql`
// query {
//     characters {
//       results {
//         id
//         name
//         image
//       }
//     }
//   }
// `


export default function CharactersList() {

    
    // const object = useQuery(GET_CHARACTERS);
    // object.error
    // // error catch
    // object.loading
    // // boolean value - true or false
    // object.data 
    // // actual data

    // IMPORT THE useCharacters hook/component BELOW TO DRY UP CODE INSTEAD OF REPEATING THE const GET_CHARACTERS ABOVE, or calling the useQuery like in the comment below 
    const { error, data, loading } = useCharacters();

    // const { error, data, loading} = useQuery(GET_CHARACTERS);
    // console.log({'error': error, 'loading': loading, 'data': data});

    if(loading) return <div>Loading ...</div>
    if(error) return <div>Error fetching data!</div>

    return (
        <div>
            <h1>Rick & Morty API</h1>
            <div className="search-bar">
                <Search />
            </div>
            <div className="CharacterList">
                {data.characters.results.map(character => {
                    return (
                        <Link to={`/${character.id}`} key={character.name} >
                        <img src={character.image} alt=''/>
                        <h2>{character.name}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}