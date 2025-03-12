import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Product = () => {
  //rota dinamica
  const { id } = useParams()
  //caregamento de dado individual
  const url = "http://localhost:3000/products/" + id

  const {data : product/* , loading */, error} = useFetch(url)

  return (
    <div>
        <p>Id do produto: {id}</p>
        {error && <p>{error}</p>}
{/*         {loading && <p>Carregando dados...</p>}
 */}        {product && (
          <div>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p> 
            <Link to={`/products/${product.id}/info`}>Mais informações</Link> 
          </div>
        )}
    </div>
  )
}

export default Product