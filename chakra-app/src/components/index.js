import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const NavBar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/text" activeStyle>
                        Text
                    </NavLink>
                    <NavLink to="/buttons" activeStyle>
                        Buttons
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;