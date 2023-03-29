import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom' 
import axios from 'axios'

const Dashboard = () => {

    // ************ VARIABLES ************
    const [products, setProducts] = useState() 
    const [title, setTitle] = useState("") 
    const [price, setPrice] = useState(0) 
    const [description, setDescription] = useState("") 
    const history = useHistory() 

    // ************ METHOD ************
    useEffect(() => {
        axios.get(`http://localhost:8000/product/readAll`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err)) 
    }, [])

    const handleSubmit =(e) => {
        e.preventDefault() 
        axios.post(`http://localhost:8000/product/createOne`, {title, price, description})
            .then(res => {history.push("/dashboard")}) 
            .catch(err => console.log(err)) 
    }

    // ************ RETURN ************
    return (
        <div>
            <h1>Create Product</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

            <h1>All Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && 
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td><Link to={`/view/${product._id}`}>{product.title}</Link></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard 