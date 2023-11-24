import { NavLink, Link } from "react-router-dom";
import { teamsoftlogo } from "../../assets/index";
import { navLinks } from "../../constants/index";
import "./Navbar.css";
import styles from "../../style";
import { useState } from "react";
const Navbar = () => {
  const [showPhoneMenu, setshowPhoneMenu] = useState(false);
  return (
    <nav>
      <div className={`container ${styles.flexBetween} py-[12px]`}>
        <div className="navbar-brand">
          <Link to={"/"}>
            <figure>
              <img
                src={teamsoftlogo}
                alt="teamsoftlogo"
                className="w-[120px]"
              />
            </figure>
          </Link>
        </div>
        <div className={`navbar-menu ${styles.flex} gap-7 lg:flex hidden`}>
          {navLinks.map((item) => {
            return (
              <NavLink
                to={item.id === "home" ? "/" : item.id}
                key={item.id}
                className="text-[var(--paragraph-color)] text-[17px] font-bold"
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <div className="navbar-end lg:hidden block">
          <span
            onClick={() => {
              setshowPhoneMenu(true);
            }}
            className="icon-menu text-[28px] text-[var(--main-color)] cursor-pointer"
          ></span>
        </div>
      </div>
      {showPhoneMenu && (
        <div className="phone-menu fixed inset-0 z-[99999] lg:hidden block">
          <div
            className={`phone-menu-content ${styles.flexColumn} justify-start gap-4 bg-[#fff] w-[85%] md:w-[70%] my-[100px] mx-auto px-[38px] py-[30px] rounded-xl`}
          >
            <div
              onClick={() => {
                setshowPhoneMenu(false);
              }}
              className="close-icon text-left hover:text-[var(--main-color)] transition-all"
            >
              <button className="icon-cross border-none hover:rotate-[180deg] transition-all"></button>
            </div>
            {navLinks.map((item) => {
              return (
                <NavLink
                  to={item.id === "home" ? "/" : item.id}
                  key={item.id}
                  onClick={() => {
                    setshowPhoneMenu(false);
                  }}
                  className="text-[var(--paragraph-color)] text-[17px] font-bold w-[80%] hover:mr-[6px] transition-all"
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
