import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/res-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div>
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
                    <span>Dhaka, Bangladesh</span>
                    <span> +8801725262423 <br />
                        trucking-delicious@gmail.com <br />
                        trucking-delicious.com <br /> </span>

                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered  w-full pr-16" />
                            <button className="btn  bg-[#ff4d6d] border-[#ff4d6d] absolute top-0 right-0 rounded-l-none hover:bg-[#c9184a] hover:border-[#c9184a]">Subscribe  <span className='ml-2'> <SendIcon /></span></button>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='flex justify-between'>
                <div>
                    <p>&copy; Copyright {year}, Trucking Delicious All right reserved</p>
                </div>
                <div>
                    <span className='flex gap-4'>
                        <Link to='/'><YouTubeIcon /></Link>
                        <Link to='/'><FacebookIcon /></Link>
                        <Link to='/'><LinkedInIcon /></Link>
                        <Link to='/'><InstagramIcon /></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer