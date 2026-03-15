import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Category Routes - Pointing to Products for now */}
        <Route path="category-industrial" element={<Products />} />
        <Route path="category-medical" element={<Products />} />
        <Route path="category-hospitality" element={<Products />} />
        <Route path="category-corporate" element={<Products />} />
        <Route path="category-specialty" element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App
