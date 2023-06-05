import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
 
function Logout(){
    const {user, isAuthenticated, isLoading}=useAuth0();

    if(isLoading){
        return <div>Loading!</div>
    }
    return(

        isAuthenticated && (
            <div>
                img src={user.picture}
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
};
export default Logout;