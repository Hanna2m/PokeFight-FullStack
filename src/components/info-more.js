import React, {useState, useEffect} from "react";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import axios from "axios";



export default function InfoMore(){
    let params = useParams();
    const [moreData, setMoreData] = useState();
    // const [type, setType] = useState();
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:3001/pokemon/${params.id}/${params.info}`

    useEffect(() => {
        setLoading(true);
        axios
        .get(url)
        .then(res => {
            console.log(res)
            setMoreData(res.data);
            console.log(res.data)
            setLoading(false)

        })
        .catch(err => console.log(err));
        
    }, []);
  if (loading) return "Loading..."

    return(
<>
<Box style={{marginLeft: '32px', padding: '16px', backgroundColor: "#DAE8F8"}}>
    <Typography>
        French: {moreData.french}
        <br></br>
        Chinese: {moreData.chinese}
        <br></br>
        Japanese: {moreData.japanese}
    </Typography>
</Box>

</>
  )
}