import './Landing.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Features from '../../components/Features/Features';
import Footers from '../../components/Footer/Footer';
const Landing = () => {
  return (
    <div>
        <div className='landing'>
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
    </div>
  )
}

export default Landing