import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../components/login"
import Logout from "../components/logout"

const Menu = () =>{
    const {isAuthenticated}=useAuth0();
     return(
        <>
            {!isAuthenticated && (
                <div className="nav">
                        <nav>
                            <h2 className="logo">Joelene <span>Ciel</span></h2>
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/kontakt">Contact</a></li>
                            <li><a href="/about">About us</a></li>
                            </ul> 
                            <Login/>
                        </nav>
                    </div>
            )}
            {isAuthenticated && (
                <div className="nav">
                            <nav>
                                <h2 className="logo">Joelene <span>Ciel</span></h2>
                                <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/kontakt">Contact</a></li>
                                <li><a href="/forum">Forum</a></li>
                                <li><a href="/about">About us</a></li>
                                </ul> 
                                <Logout/>
                              </nav>
                        </div>

            )}
        </>
                        
        );

};

export default Menu;