import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArray }) {
 //console.log("collection:  ", pokemonArray)
 // console.log(Array.isArray(pokemonArray))

  return (
    <Card.Group itemsPerRow={6}>
        {pokemonArray.map(poke => {
          return (<PokemonCard pokeData={poke} key={poke.id} />)
        })
        }
    </Card.Group>
  );
}

export default PokemonCollection;
