import React from "react";
import { useEffect,useRef } from "react";
import logo from "../../assets/images/logo.png";
import userLogo from '../../assets/images/avatar-icon.png'
import { NavLink,Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/contacts",
    display: "Contact",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('stickyHeader')
      }else{
        headerRef.current.classList.remove('stickyHeader')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('showMenu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* MENU */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => 
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* NAV RIGHT */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to='/'>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={userLogo} alt="" />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className="bg-primaryColor py-2 px-2 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Login
              </button>
            </Link>

            <span onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
