import { useAuth0 } from "@auth0/auth0-react";
 
function Logout(){
    const {logout}=useAuth0();
    return(

        <div  class="outer button">
            <button onClick={()=>logout({returnTo:window.location.origin})}>Log Out</button>
            <span></span>
            <span></span>
        </div>


    )
};
export default Logout;