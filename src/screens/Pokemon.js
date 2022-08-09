import { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { getPokemonDetailsById } from '../api/pokemon'
import Header from '../components/Pokemon/Header'

export default function Pokemon(props) {

  const { navigation, route: {params} } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () =>{

      try {
        const response = await getPokemonDetailsById(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }

    })()
  }, [params]);


  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order}
      image={pokemon.sprites.other['official-artwork'].front_default}
      type={pokemon.types[0].type.name}
      />
    </ScrollView>
  )
}