import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Karate from "./pages/KaratePage"
import Videos from "./pages/Videos"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import News from "./pages/News"
import NewsDetails from "./pages/NewsDetails"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/karate" element={<Karate />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route
  path="/noticias"
  element={<News />}
/>

<Route
  path="/noticias/:slug"
  element={<NewsDetails />}
/>
        

      </Routes>

    </BrowserRouter>
  )

}

export default App