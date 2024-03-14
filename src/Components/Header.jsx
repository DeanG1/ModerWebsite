import { useState } from "react";
import Button from "../Components/Button";
import { brainwave } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { Navigation } from "../Constants/Navigation";
const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div
      className={`fixed top-0 z-50 bg-n-8/90 w-full
    backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90
    lg:backdrop-blur-sm ${
      openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
    }`}
    >
      <div
        className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4"
      >
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          }hidden fixed top-[5rem] left-0
        right-0 bottom-0 bg-n-8 lg:static lg:flex
        lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col items-center
          justify-center m-auto lg:flex-row"
          >
            {Navigation.map((item) => (
              <a key={item.index} href={item.url}>
                {item.title}
              </a>
            ))}
            <a
              href="#signup"
              className="button hidden mr-8 text-n-1/50
        transition-colors hover:text-n-1 lg:block"
            >
              New account
            </a>
            <Button className="hidden lg:flex" href="#login">
              Sign in
            </Button>
          </div>
          <HamburgerMenu />
        </nav>
      </div>
    </div>
  );
};

export default Header;
