import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API = 'http://127.0.0.1:8000/api/'

function ShowProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = async () => {
    const response = await axios.get(`${API}products`)
    setProducts(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${API}product/${id}`)
    getAllProducts()
  }

  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to={'create'} className='btn btn-success btn-lg mt-2 mb-2 text-white'>crear</Link>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((Product) => (
            <tr key={Product.id}>
              <td>{Product.description}</td>
              <td>{Product.price}</td>
              <td>{Product.stock}</td>
              <td>
                <Link to={`edit/${Product.id}`} className='btn btn-warning'>Edit</Link>
                <button onClick={() => { deleteProduct(Product.id) }} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts