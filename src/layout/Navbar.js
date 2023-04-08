import logo from '../assest/img/Logo.png';
import searchicon from '../assest/img/Search.png';
import arr_right from '../assest/img/arrow-right.png';
import '../assest/css/Navbar.css'
 import React from 'react'
 import {Outlet, Link} from 'react-router-dom'
function Navbar() {
  return (
    <header className="navbar-container flex flex-row items-center justify-center">
      <div className='navbar-content-container'>
          <div className='inline-block float-left'>
            <div className='flex flex-row justify-items-center items-center'>
              <Link to="/"><img className="logo" alt="Vue logo" src={logo}/></Link>
            </div>
          </div>
          <div className='inline-block float-right ml-6 mt-2 search-input w-auto md:w-96'>
             <img src={searchicon}></img><input className='text-sm bg-transparent outline-none text-gray-500 w-full' placeholder='Search by address, token symbol, name, transaction'></input>
          </div>
          <div className="inline-block float-right mt-4 max-lg:block">
              <div className="navbar-menu grid grid-cols-5 gap-8">
                  <div className="navbar-menu-item flex flex-row items-center text-xs font-medium self-center"><Link to="/blocks">Blocks</Link>  <img className='ml-2' src={arr_right}></img></div>
                  <div className="navbar-menu-item flex flex-row items-center text-xs font-medium self-center"> <Link to="/trans">Transaction</Link> <img className='ml-2' src={arr_right}></img></div>
                  <div className="navbar-menu-item flex flex-row items-center text-xs font-medium self-center"> <Link to="/tokens">Tokens</Link> <img className='ml-2' src={arr_right}></img></div>
                  <div className="navbar-menu-item flex flex-row items-center text-xs font-medium self-center"> <Link to="/api">APIs</Link> <img className='ml-2' src={arr_right}></img></div>
                  <div className="navbar-menu-item flex flex-row items-center text-xs font-medium self-center"> <Link to="/dbx">DBX</Link> <img className='ml-2' src={arr_right}></img></div>
              </div>
          </div>
        </div>
        <Outlet/>
    </header>
  );
}

export default Navbar;