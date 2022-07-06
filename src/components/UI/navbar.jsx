import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { FaRegNewspaper } from "react-icons/fa";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import Button from "./btn";
import { Modal } from "./modal";
import tw from "twin.macro";
import "../../App.css";
import { Container } from "../styledElements";

const AppNav = styled.nav`
  background: ${({ scrollNavbar }) =>
    scrollNavbar ? "#252e48" : "rgba(255, 255, 255, 0.1)"};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0px;
  // margin-top: -80px;
  // z-index: 10;
  @media screen (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
const AppNavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  // height: 80px;
  z-index: 1;
  // width: 100%;
  ${Container}
`;
const AppNavLogo = styled.a`
  ${tw`text-2xl lg:text-4xl`}
  color: #010101;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  // font-size: 2rem;
  display: flex;
  align-items: center;
`;

function Navbar() {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const ChangeBackground = () => {
    if (window.pageYOffset >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ChangeBackground());
  }, [window]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <IconContext.Provider value={{ color: "#010101" }}>
        <AppNav scrollNavbar={scrollNavbar}>
          <AppNavContainer>
            <AppNavLogo href="/" className="navbar-logo " onClick={toggleHome}>
              <FaRegNewspaper className="navbar-icon" />
              TheNews
            </AppNavLogo>

            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
              onClick={openModal}
            >
              Add News
            </Button>
          </AppNavContainer>
        </AppNav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
