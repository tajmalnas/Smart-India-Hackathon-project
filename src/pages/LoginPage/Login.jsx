import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import LoginImage from '/assets/login_image.png';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="login__page">
                <div className="left__side__box">
                    <img className='image' src={LoginImage} alt="Image" />
                </div>
                <div className="right__side__box">
                    <div className='right__side__box__content'>
                        <div className=''>
                            <div className="welcome__text">Welcome to</div>
                            <div className="heading">Edudrop System</div>
                        </div>
                        <div className="selection__text">Please select your user type</div>
                    </div>
                    <div className="user__buttons">
                        <div className="">
                            <button className="government__btn btn">Government</button>
                        </div>
                        <div className="">
                            <button className="school__btn btn">School/org.</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Login;