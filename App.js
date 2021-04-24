import React from 'react';  
import { BrowserRouter as Router,} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Hero from './Components/Hero/Index'
import Products from './Components/Products/Index'
import { dataPizza } from './Components/Products/Data'
import Feature from './Components/Feature/Index'
import { dataDeserts } from './Components/Deserts/Data'
import Deserts from './Components/Deserts/Index'
import Footer from './Components/Footer/Index'
import CheckOut from './Components/CheckOut/Index'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <GlobalStyle />
        <Hero />
        <Products  heading='Choose Your Favorite!' data={dataPizza}/>
        <Feature />
        <Deserts  heading='Favorite Deserts!' data={dataDeserts}/>
        <CheckOut />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
