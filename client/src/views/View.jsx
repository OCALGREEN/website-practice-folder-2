import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios' 

const View = () => {

    const {id} = useParams() 
    const [product, setProduct] = useState() 

    useEffect(() => {
        axios.get(`http://localhost:8000/product/readOne/${id}`)
        .then(res => setProduct(res.data)) 
        .catch(err => console.log(err)) 
    })

    return (
        <div>
            <h1>View</h1>
                {
                    product? 
                    <div>
                        <h3>Title: {product.title}</h3>
                        <h3>Price: {product.price}</h3>
                        <h3>Description: {product.description}</h3>
                    </div>: 
                    <h3>There seems to be an error</h3>
                }
                <Link to={`/dashboard`}>Back to Dashboard</Link>
        </div>
    )
}

export default View 