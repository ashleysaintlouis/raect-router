import './App.css'

// config react router
import { BrowserRouter, Routes, Route} from "react-router-dom"

/* Pages */
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product from './pages/products/Product'
import Info from './pages/info/Info'
import NotFound from './pages/notfound/NotFound'
import Search from './pages/search/Search'

/* Componentes */
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'


function App() {

  return (
   <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product/>} />
          {/* Rota nested router */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* Search */}
          <Route path='/search' element={<Search />} />
          {/* No match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
