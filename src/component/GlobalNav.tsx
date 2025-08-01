import logo from '../assets/logo.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react'

function GlobalNav(){
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className={`${path=="/"?"home":"child"} ${isOpen?"open":undefined}`}>
      <div className='header-close' onClick={()=>setIsOpen(false)}></div>
      <Link to="/"><img src={logo} alt="kamome-no-salad logo" className='logo' /></Link>
      <h1>かもめのサラダ</h1>
      <div className={isOpen?"menu-btn open":"menu-btn"} onClick={()=>setIsOpen(!isOpen)}><span></span></div>
      <ul className={isOpen?"open":undefined}>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={()=>setIsOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Works" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={()=>setIsOpen(false)}>Works</NavLink>
        </li>
        <li>
          <NavLink to="/Member" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={()=>setIsOpen(false)}>Member</NavLink>
        </li>
        <li>
          <NavLink to="/History" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={()=>setIsOpen(false)}>History</NavLink>
        </li>
        <li>
          <NavLink to="/Articles" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={()=>setIsOpen(false)}>Articles</NavLink>
        </li>
      </ul>
    </header>
    </>
  )
}

export default GlobalNav