import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const NavBar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;