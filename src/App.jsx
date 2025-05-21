import './App.css'
import Footer from './components/Footer'
import Qlinks from './components/Qlinks'
import Header from './components/Header'
import Populartopics from './components/Populartopics'
import Qline from './components/Qline'
import Destinations from './components/Destinations'
import Navbar from './components/Navbar'
import Map from './components/Map'
import Herosection from './components/Herosection'
function App() {
 

  return (
    <>
    <Navbar/>
    <Herosection/>
    <Map/>
    <Destinations/>
    <Qlinks/>
    <Populartopics/>
    <Qline/>
  <Header/>
<Footer/>
    </>
  )
}

export default App
