import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react'
import logo from '../../assets/images/res-logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                {/* small screen */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" className='h-12' />
                    <a href='/' className="btn btn-ghost font-bold normal-case text-2xl">Trucking Delicious</a>
                </div>
                {/* large screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Item </a></li>
                        <li><a>Item </a></li>
                        <li><a>Item </a></li>
                        <li><a>Item </a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn btn-ghost font-bold normal-case text-2xl"><ShoppingBasketIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Header