import { Routes, Route, useHref, useHistory } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
 import Home from "./Components/Home/Home.js"
 import Footer from "./Components/Footer/footer.js"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
  
      </Routes>
      <Footer/>
    </div>

  )
}

export default App