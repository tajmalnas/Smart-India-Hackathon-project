import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";
import WelcomeImage from "/assets/Home_page.png";
const HeroBanner = () => {
    const navigate = useNavigate();
    const gotoDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <div className="welcome">
            <div className="left__bar">
                <div className="welcome_note">
                    Welcome to
                </div>
                <div className="welcome_note">
                    Edudrop System
                </div>
                <div className="phrase">
                    Unlocking Success: Charting Dropout Rates for a Brighter Future
                </div>
                <div>
                    <button onClick={gotoDashboard} className="dashboard">Dashboard</button>
                </div>
            </div>
            <div className="right__bar">
                <div className="right__gradient">
                    <img src='/assets/Screenshot (121).png' />
                </div>
                <div className="welcome__image">
                    <img src={WelcomeImage} alt="" />
                </div>
            </div>
        </div>
    );
}
export default HeroBanner;