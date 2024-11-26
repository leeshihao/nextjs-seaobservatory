"use client";

import { Button, MegaMenu, Navbar } from "flowbite-react";

const NavigationBar: React.FC = () => {
  const handleContactClick = () => {
    console.log("Contact us button clicked");
  };

  return (
    <MegaMenu className="w-full">
      <div
        id="navbarContainer"
        className="mx-3 flex w-full flex-wrap items-center pt-4 pb-2 pl-4 pr-4 justify-between md:space-x-8"
      >
        <Navbar.Brand href="/">
          {/*<img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />*/}
          <span
            className="self-start whitespace-nowrap text-4xl font-semibold dark:text-white"
            style={{ color: "#459773" }}
          >
            AISA
          </span>
        </Navbar.Brand>

        <Navbar.Toggle className="size-10" />
        <Navbar.Collapse>
          <ul>
            <Navbar.Link href="https://www.aisafety.asia/" target="_blank">
              Home
            </Navbar.Link>
            <Navbar.Link onClick={handleContactClick}>Contact us</Navbar.Link>
          </ul>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
};

export default NavigationBar;
