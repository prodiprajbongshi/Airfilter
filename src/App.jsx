
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Problem from './components/Problem'
import Technology from './components/Technology'
import FilteringProcess from './components/FilteringProcess'
import Product from './components/Product'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Problem/>
      <Technology/>
      <FilteringProcess/>
      <Product/>
      <About/>
    </>
  )
}

export default App
