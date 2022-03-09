import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from "@mui/material";


export default function Home({ pokemonData }) {

  return (
    <>
    <nav style={{padding: '1rem'}}>
            {pokemonData.map(p => (
        <NavLink 
            style={
            ({ isActive }) => {
                return {
                    display: "block",
                    marginTop: "0.6rem",
                    textDecorationLine: "none",
                    color: isActive ? "#61C87B" : ""
                    };}}
                to={`/${p.id}`}
                key={p.id}>
                <Card sx={{ width: "150px", display: "flex",
                            flexDirection: "row"}} 
                    style={{
                            height: "64px", 
                            alignContent: "center"}}>
                    <CardContent>
                    <Typography variant="body1" sx={{ fontWeight: 'bold'}}> 
                    </Typography> 
                    {p.name.english}
                    </CardContent>
                </Card>
                
            </NavLink>
            ))}
        </nav>

        <Outlet />
    </>
        
  )
}
