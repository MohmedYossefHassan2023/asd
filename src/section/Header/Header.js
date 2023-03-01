import './Header.css'
import logo from '../../assets/images/logo.png'
import {Link} from'react-router-dom'


const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark  cybrog-navbar ">
        <div className="container">
            <a href="#" className="navbar-brand">
            <img src={logo}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <navitem>
                    <Link to="/" className="nav-link">home</Link>
                    
                    </navitem>
                    <navitem >
                    <a href="#hero" className="nav-link">browser</a>
                    </navitem>
                    <navitemDropdown>
                    <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                        </ul>
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                        
                    </navitemDropdown>
                    <navitem>   
                    <a href="#hero" className="nav-link">strems</a>
                    </navitem>
                    <navitem>
                    <a href="#hero" className="nav-link">us</a>
                    </navitem>
                    <Link to="/Profile" className="nav-link">Profile</Link>
                </ul>
            </div>  
        </div>
    </div>
  )
}

export default Header