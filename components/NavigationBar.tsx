"use client";

import { MegaMenu, Navbar } from "flowbite-react";

interface NavigationBarProps {
  tab: number;
  setTab: (value: number) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ tab, setTab }) => {
  const handleContactClick = () => {
    if (tab === 0) {
      setTab(1);
    } else {
      setTab(0);
    }
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
              AISA home page
            </Navbar.Link>
            <Navbar.Link
              onClick={handleContactClick}
              className="cursor-pointer"
            >
              {tab === 0 ? "Contact us" : "Observatory data"}
            </Navbar.Link>
          </ul>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
};

export default NavigationBar;
