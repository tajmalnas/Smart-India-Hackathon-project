import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Footers from './components/Footer/Footer'
import Features from './components/Features/Features'

function App() {
  return (
    <>
      <div className='app'>
        <div className="header">
          <Navbar/>
        </div>
        <div className="main">
          <HeroBanner/>
          <Features/>
        </div>
        <div className="footer">
          <Footers/>
        </div>
      </div>
    </>
  )
}

export default App