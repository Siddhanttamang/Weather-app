import {Link} from 'react-router-dom'
function NavBar(){
    return <div className="navbar">
        <div className="Navbar-logo">
            <Link to='/'>Weather</Link>
        </div>

    </div>

}
export default NavBar;