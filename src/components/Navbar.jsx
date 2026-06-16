import { NavLink } from 'react-router';
import '../style/App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>TalentStack</h2>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Users
        </NavLink>
        <button className='btn btn-primary'>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;