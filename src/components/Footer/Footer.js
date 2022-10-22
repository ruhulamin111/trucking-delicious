import React from 'react'
import logo from '../../assets/images/res-logo.png'

const Footer = () => {
    return (
        <footer className="footer text-base-content border-t-2 py-5 my-5">
            <div>
                <img src={logo} alt="" className='h-20 mb-4' />
                <p>Trucking Delicious Resturant<br />
                    Providing delicious food with reasonable prize <br />
                    Since 2020</p>
            </div>
            <div>
                <span className="footer-title">Delivery Time</span>
                <span >Sunday - Thursday</span>
                <span >10:00 AM - 10:00 PM </span>
                <span >Friday - Saturday </span>
                <span >Weekend</span>
            </div>
            <div>
                <span className="footer-title">Contact:</span>
                <span>Location:</span>
                <span>
                    Dhanmondi,Dhaka, Bangladesh <br />
                    Mirpur,Dhaka, Bangladesh <br />
                </span>
                <span>
                    +8801725262423 <br />
                    trucking-delicious@gmail.com <br />
                    trucking-delicious.com <br />
                </span>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer