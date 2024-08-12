import { Routes, Route } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Home from './Home';
import Pizzas from './Pizzas';
import Contact from './Contact';
import Addpizza from './Addpizza';
import UpdatePizza from './UpdatePizza';
import Footer from './Footer';

function App(){
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pizzas" element={<Pizzas/>}/>
      <Route path="/add-pizzas" element={<Addpizza/>}/>
      <Route path="/update-pizza/:id" element={<UpdatePizza/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;