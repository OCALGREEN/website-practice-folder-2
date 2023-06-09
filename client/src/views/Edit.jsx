import React, { useState, useEffect } from 'react' 
import { useHistory, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

    // variables
    const {id} = useParams() 
    const [title, setTitle] = useState("") 
    const [price, setPrice] = useState(0) 
    const [description, setDescription] = useState("") 
    const [errors, setErrors] = useState() 
    const history = useHistory() 

    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/product/readOne/${id}`)
            .then(res => {
                const product = res.data 
                setTitle(product.title) 
                setPrice(product.price) 
                setDescription(product.description) 
            })
            .catch(err => console.log(err)) 
    }, [])

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.put(`http://localhost:8000/product/updateOne/${id}`, {title, price, description})
            .then(res => {history.push("/dashboard")})
            .catch(err => {
                const errRes = err.response.data.errors // grabs all the error keys 
                const errArr = [] // empty array to store the errors 
                for(const key of Object.keys(errRes)) {
                    errArr.push(errRes[key]["message"])
                }
                setErrors(errArr) 
            }) 
    }



    // return 
    return (
        <div>
            <h1>Edit</h1>
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
                    <label>Title</label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <button>Edit</button>
            </form>
            <Link to={`/dashboard`}>Back to Dashboard</Link>
            {
                errors && 
                errors.map((err, i) => {
                    return (
                        <p key={i} style={{color:"red"}}>{err}</p>
                    )
                })
            }
        </div>
    )
}

export default Edit 