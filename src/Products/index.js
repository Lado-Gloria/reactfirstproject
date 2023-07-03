import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            await getProducts();
        })();
    }, [])
    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setLoading(false)
            setProducts(result.products)
        }
        catch (error) {
            console.log(error.message);
        }
    };
    console.log({ products });
    if(loading){
        return <h1>loading...</h1>
    }
    return (

        (<div className="detail">
            {products.map(item => (
                <div key={item.id}>     
             <img src={item.images[0]} alt={item.name} />
            <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.discountPercentage}</p>
              <Link to={`/product/${item.id}`} key={item.id} className="product-link"></Link>
             <button className="button" onClick={()=>alert(`You clicked ${item.title}`)}>Add to cart/</button>
            </div>
               
            ))}
        </div>)
    )
}
export default Products;