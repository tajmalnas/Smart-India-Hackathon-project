import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar" >
        <div className="edudrop__logo">
            <img src="/assets/Edudrop 1.png" alt="logo" />
        </div>
        <div className="butt__section">
            <button className="butt__about">About</button>
            <button className="butt__help">Help</button>
            <div className="butt__login__section">
                <button className="butt__login">Login</button>
            </div>
        </div>
    </div>
  )
}
export default Navbar