import React, { useState, useEffect}  from 'react';
import './App.css';
import Country from'./Components/Country/Country';
import Cart from'./Components/Cart/Cart';
import Show from'./Components/Show/Show';

function App() {

  const [countries, setCountries]=useState([]);
  const [cart, setCart] = useState([]);
  const [indCountry,setindCountry]= useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data=> setCountries(data))
    .catch(error=>console.log(error))
  },[])

  const handleAddCountry=(country)=>{
    
    const newCart = [...cart, country];

    setindCountry(country)
    // console.log(country.name);
     setCart(newCart);
    
}

  return (
    <div className="App"> 

     <Show> </Show>

    <h3>Countries Loaded: {countries.length}</h3>
    
    <div>
    <h2>Country Added: {cart.length}</h2>
    <h2>name: {indCountry.name}</h2>
    <h2>Population: {indCountry.population}</h2>
    </div>
    

    <Cart cart={cart}>  </Cart>
        {
          countries.map(country => <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
        }
    </div>
  );
}

export default App;
