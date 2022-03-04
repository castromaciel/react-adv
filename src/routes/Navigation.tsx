import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'


function Navigation() {
  return (
    <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>
            <NavLink to='/'
              className={ ({isActive}) => isActive ? 'nav-active' : ''}
            >
              Home 
            </NavLink>
          </li>
          <li>
            <NavLink to='/users'
              className={ ({isActive}) => isActive ? 'nav-active' : ''}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'
              className={ ({isActive}) => isActive ? 'nav-active' : ''}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="about" element={<h1>About</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/*" element={ <Navigate to='home' replace /> }/>
      </Routes>

    </div>
    </BrowserRouter>
    )
}

export default Navigation