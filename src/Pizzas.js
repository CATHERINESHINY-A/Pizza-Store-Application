import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Pizzas(){

    const [pizzas, setPizzas]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchPizzas();
    }, [])

const fetchPizzas =() =>{
    axios.get('http://localhost:5500/pizzas')
    .then(response => {
        setPizzas(response.data);
    })
    .catch(error =>{
        console.error('There was an error fetching the pizza data', error)
    })
}

const handleDelete = (id)=>{
    axios.delete(`http://localhost:5500/pizzas/${id}`)
    .then(response =>
    {
        fetchPizzas();
    })
    .catch(error => {
        console.error('There was an error deleting the pizzas data', error)
    })
}
return(
    <div className="container mt-4">
        <h2 className="text-center">Available Pizzas</h2>
        <br/>
        <div className="row">
            {pizzas.map(pizza =>(
                <div key={pizza.id} className="col-md-4">
                    <div className="card mb-4">
                        <img src={pizza.image} height={300} className="card-img-top"/>
                        <div className="card-body">
                            <h4 className="card-title">{pizza.name}</h4>
                            <p className="card-text">Price: ${pizza.price}</p>
                            <p className="card-text">Description: {pizza.description}</p>
                            <p className="card-text">Customize: {pizza.custom}</p>
                            <button className="btn btn-warning me-2" onClick={() => navigate(`/update-pizza/${pizza.id}`)}>UPDATE</button>
                            <button className="btn btn-danger" onClick={()=>handleDelete(pizza.id)}>DELETE</button>
                        </div>
                        </div>
                        </div>
            ))}
        </div>
    </div>
)
}

export default Pizzas;