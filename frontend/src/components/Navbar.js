import logo from '../assets/Logo.png';
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return(
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-16" />
      </div>
      <div className='m-8 flex items-ceenter justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/yusufolmezz/"><FaLinkedin /> </a>
        <a href="https://github.com/yusufolmez"><FaGithub /></a>
        <a href="https://www.instagram.com/yusufolmeezz/"><FaInstagram /></a>
        <a href="https://x.com/yusufolmeez"><FaSquareXTwitter /></a>
        
        
        
      </div>
    </nav>

  );
};

export default Navbar;