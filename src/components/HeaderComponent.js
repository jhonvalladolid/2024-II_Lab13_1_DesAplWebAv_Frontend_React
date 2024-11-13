import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg fixed-top'>
          <div className='container'>
            <ul className='navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll'>
              <li className='nav-item'>
                <a className='nav-link formato01' href='/'>Inicio</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link formato01' href='#'>Almacen</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link formato01' href='#'>Ventas</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link formato01' href='#'>Compras</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent