import React from 'react'
import "./Search.css"

import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'



const Search = () => {
    const [searchParams] = useSearchParams();
    const urlSearch = "http://localhost:3000/products?" + searchParams;
    console.log(urlSearch)
    
    const {data: items, error} = useFetch(urlSearch)
    console.log(items)

  return (
    <>
        <h1>Resultados disponíveis</h1>
        {error && <p>{error}</p>}
         <ul className='products'>
            {items && items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                    {/* rota dinamica */}
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Search