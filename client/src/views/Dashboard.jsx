import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {

    // ************ VARIABLES ************
    const [products, setProducts] = useState() 

    // ************ METHOD ************
    useEffect(() => {
        axios.get(`http://localhost:8000/product/readAll`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err)) 
    }, [])


    // ************ RETURN ************
    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && 
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard 