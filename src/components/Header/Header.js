import React from 'react'
import logo from '../../assets/images/res-logo.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <div>
            <div className="navbar font-semibold text-lg h-20 border-b-2 mb-5">
                {/* small screen */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><Link to='/' className='hover:bg-red-200 ' >Home </Link></li>
                            <li ><Link to='/' className='hover:bg-red-200'>Foods </Link></li>
                            <li ><Link to='/' className='hover:bg-red-200'>Cart</Link></li>
                            <li ><Link to='/' className='hover:bg-red-200'>Contact </Link></li>
                            <li ><Link to='/' className="font-bold normal-case text-2xl"><ShoppingBasketIcon /> <sup >0</sup></Link></li>
                            <li ><Link to='/' className=" font-bold normal-case text-2xl"><AccountCircleIcon /></Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" className='h-12 ' />
                    <Link to='/' className="btn btn-ghost font-extrabold normal-case lg:text-2xl ">Trucking Delicious</Link>
                </div>
                {/* large screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li ><Link to='/' className='hover:bg-red-200 ' >Home </Link></li>
                        <li ><Link to='/' className='hover:bg-red-200'>Foods </Link></li>
                        <li ><Link to='/' className='hover:bg-red-200'>Cart</Link></li>
                        <li ><Link to='/' className='hover:bg-red-200'>Contact </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-2xl"><ShoppingBasketIcon /> <sup >{totalQuantity}</sup></Link>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-2xl"><AccountCircleIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header