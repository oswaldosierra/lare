import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const API = 'http://127.0.0.1:8000/api/'

function EditProduct() {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${API}product/${id}`, {
            description: description,
            price: price,
            stock: stock
        })
        navigate('/')
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`${API}product/${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProduct()
    }, [])


    return (
        <div>
            <h3>Crear</h3>
            <form onSubmit={update}>
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

export default EditProduct