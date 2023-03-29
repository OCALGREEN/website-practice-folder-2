import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Dashboard = () => {

    // ************ VARIABLES ************
    const [products, setProducts] = useState() 
    const [title, setTitle] = useState("") 
    const [price, setPrice] = useState(0) 
    const [description, setDescription] = useState("") 
    const [refresh, setRefresh] = useState(true) 
    const [errors, setErrors] = useState() 

    // ************ METHOD ************
    useEffect(() => {
        axios.get(`http://localhost:8000/product/readAll`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err)) 
    }, [refresh])

    const handleSubmit =(e) => {
        e.preventDefault() 
        axios.post(`http://localhost:8000/product/createOne`, {title, price, description})
            .then(res => {setRefresh(!refresh)}) 
            .catch(err => {
                const errorResponse = err.response.data.errors // grabs all the error keys
                const errorArr = [] // empty array to store errors 
                for(const key of Object.keys(errorResponse)) { // grab the error message using the keys
                    errorArr.push(errorResponse[key]["message"]) // adds the errors to the empty array 
                }
                setErrors(errorArr) 
            }) 
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/product/deleteOne/${id}`)
            .then(res => {setRefresh(!refresh)})
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
                {
                    errors && 
                    errors.map((err, i) => {
                        return (
                            <p key={i} style={{color:"red"}}>{err}</p>
                        )
                })
            }
            </div>

            <h1>All Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && 
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td><Link to={`/view/${product._id}`}>{product.title}</Link></td>
                                    <td><Link to={`/edit/${product._id}`}>Edit</Link></td>
                                    <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard 