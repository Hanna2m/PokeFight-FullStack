import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/home';
import { Box } from '@mui/system';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsId, setPokemonsId] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    pokemonGetter()
  }, []);


const pokemonGetter = ()=> {
  setLoading(true)
  axios
  .get("http://localhost:3001/pokemon/")
  .then((res) => {
    setLoading(false)
    setPokemons(res.data.map(p => p))
    setPokemonsId(res.data.map(p => p.id))
    console.log(res.data[0].id)})
  .catch((err)=> {
    console.log(err)
  },[])
}

if (loading) return "Loading";

  return (
    <>
    <Box style={{
        paddingLeft: "100px",
        minwidth: "480px"}}>
        <Home pokemonData={pokemons} />
      </Box>
      
    </>
  );
}

export default App;
