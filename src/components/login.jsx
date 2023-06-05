import { useAuth0 } from "@auth0/auth0-react";
 
function Login(){
    const {loginWithRedirect}=useAuth0();
    return(

        <div  class="outer button">
            <button onClick={()=>loginWithRedirect()}>Log In</button>
            <span></span>
            <span></span>
        </div>


    )
};
export default Login;
