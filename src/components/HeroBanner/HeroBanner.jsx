import "./HeroBanner.css";
import WelcomeImage from "/assets/Home_page.png";
const HeroBanner = () => {
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
                    <button className="dashboard">Dashboard</button>
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