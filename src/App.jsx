import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Problem from './components/Problem'
import Technology from './components/Technology'
import FilteringProcess from './components/FilteringProcess'
import Product from './components/Product'
import FinalProduct from './components/ProductCard'
import Footer from './components/Footer'
import ProductGallery from './components/ProductImage'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Problem/>
      <ProductGallery/>
      <Technology/>
      <FilteringProcess/>
      <Product/>
      <FinalProduct/>
      <Footer/>
    </>
  )
}

export default App
