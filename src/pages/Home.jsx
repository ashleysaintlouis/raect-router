import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error} = useFetch(url)
  
    return (
    <div>
        <h1>Produtos</h1>
        {error && items.map((item) => (
            <ul>
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>    
                </li>
            </ul>
        )
        )}
    </div>
  )
}

export default Home