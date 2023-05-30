import React from "react";
import Logo from "../Images/Logo.png";
import {
  Nav,
  NavLink,
  NavMenu,
  Lego,
  Bars,
  NavBtn,
  NavBtnLink,
} from "./Header.style.js";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <Lego src={Logo} alt="logo" />
          <NavLink to="/" ActiveStyle>
            Home
          </NavLink>
          <NavLink to="/toDo" ActiveStyle>
            ToDo's
          </NavLink>
          <NavLink to="/Hotels" ActiveStyle>
            Hotels
          </NavLink>
          <NavLink to="/Places" ActiveStyle>
            Places
          </NavLink>
        </NavMenu>
        {isAuthenticated ? (
          <NavBtn>
            <NavBtnLink
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </NavBtnLink>
          </NavBtn>
        ) : (
          <NavBtn>
            <NavBtnLink onClick={() => loginWithRedirect()}>Sign In</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};
export default Header;
