import React, {useState, useEffect} from "react";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from "@mui/material";
import axios from "axios";
import InfoPokemons from "./info-more";
import InfoName from "./info-more";


export default function DetailedView() {
    let params = useParams();
    const [namePokemon, setNamePokemon] = useState();
    const [data, setData] = useState();
    // const [type, setType] = useState();
    const [base, setBase] = useState();
    const [loading, setLoading] = useState(true);

    const id = params.id;
    const url = `http://localhost:3001/pokemon/${id}`

    useEffect(() => {
        setLoading(true);
        axios
        .get(url)
        .then(res => {
            console.log(res)
            setNamePokemon(res.data.name.english);
            console.log(res.data.base)
            console.log(res.data.name)
            setBase(res.data.base)
            setData(res.data.name)
            setLoading(false)

        })
        .catch(err => console.log(err));
        
    }, [])
  if (loading) return "Loading..."
  return (
    <>
    <Card style={{width: '256px'}}>
        <CardContent>
            <NavLink to={'./name'} key='name'>
            <Typography variant="h6" gutterBottom component="div">
                {namePokemon}
            </Typography>
            </NavLink>
            
            
            <Typography variant="subtitle2" gutterBottom component="div">
                Profile 
            </Typography>
            <Typography variant="body1" gutterBottom>
                Attack: {base.Attack}
                <br></br>
                Defense: {base.Defense}
            </Typography>
            <NavLink to={'./base'}>
            <Typography variant="caption" display="block" gutterBottom>
                Show more
            </Typography>
            </NavLink>
        </CardContent>
    </Card>
        <Outlet />
    </>
        
  )
}
