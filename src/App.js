import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Grid, Typography} from '@material-ui/core';

const url = "https://presyontest.herokuapp.com";
const fetchItems = () => axios.get(`${url}/purchases`);


function App() {

  const [purchases, setPurchases] = useState([{
    items:[],
    name: "",
    number: "",
    email: "",
    price: 0,

  }])
  useEffect(() => {
    getAllPurchases();
    console.log(purchases)
  }, []);
  
  const getAllPurchases = async () =>{
    try{
        const response = await fetchItems();
        setPurchases(response.data);
        console.log(response.data);
        const all = response.data;
    } catch(error){
        console.log(error);
    }
  }

  return (
    <div className="App">
      <Grid container>
          <Grid item xs={2}>
            <Typography>Ime Kupca</Typography>
              
          </Grid>
          <Grid item xs={3}>
            <Typography>Narudzba</Typography>
              
          </Grid>
          <Grid item xs={2}>
            
          <Typography>Email Kupca</Typography>
          
          </Grid>
            <Grid item xs={2}>
            <Typography>Ukupna cijena narudzbe</Typography>
            </Grid>
                <Grid item xs={3}>
            <Typography>Broj kupca</Typography>

            </Grid>
            </Grid>
        {purchases.map((purchase)=>(
          <Grid container style={{marginTop: 30, marginBottom:20}}>
          <Grid item xs={2}>
              {purchase.name}
          </Grid>
          <Grid item xs={3}>
          {purchase.items.map((item)=>(
            <div>
            <span>{item.name} </span>
            <span>{item.color} </span>
            <span>{item.size} </span>
            </div>
          ))}
          </Grid>
          <Grid item xs={2}>
          {purchase.email}
          </Grid>
            <Grid item xs={2}>
            {purchase.price}.00KM
            </Grid>
                <Grid item xs={3}>
                {purchase.number}
            </Grid>
            </Grid>
        ))}
        
      
    </div>
  );
}

export default App;
