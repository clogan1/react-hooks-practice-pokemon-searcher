import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const pokemonUrl = 'http://localhost:3001/pokemon'

  const [search, setSearch] = useState('')
  const [pokemonArray, setPokemonArray] = useState('')

  useEffect(() => { 
    fetch(pokemonUrl)
    .then(res => res.json())
    .then(json => setPokemonArray(json))
  }, [])

  //console.log("pokepage: ", search)
  function addPokemon(newPoke){
    setPokemonArray([...pokemonArray, newPoke])
  }

  let pokemonDisplay = pokemonArray.filter(poke => search ? poke.name.includes(search) : true)

  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonArray={pokemonDisplay} />
    </Container>
  );
}

export default PokemonPage;
