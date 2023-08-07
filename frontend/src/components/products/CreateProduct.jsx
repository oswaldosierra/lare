import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = 'http://127.0.0.1:8000/api/'

function CreateProduct() {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(`${API}product`, {
            description: description,
            price: price,
            stock: stock
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Crear</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input className='form-control' type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input className='form-control' type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input className='form-control' type="number" value={stock} onChange={(e) => { setStock(e.target.value) }} />
                </div>

                <div className='mb-3'>
                    <button className='btn btn-success'>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct