import React from "react";
import './Character.css';
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

export default function Character() {

    const {id} = useParams();

    const { data, loading, error } = useCharacter(id);

    if(error) return <div>Error fetching data!</div>
    if(loading) return <div>Loading ...</div>

    return (
        <div className="Character">
            <img src={data.character.image} width={600} height={600} alt="" />
            <div className="Character-content"  >
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.character.episode.map(episode => {
                        return (
                            <div className="Character-episode-individual">
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}