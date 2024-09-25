import React, {useContext} from "react";
import usercontext from "../Context/usercontext";



const Profile=()=>{

   const{user}=useContext(usercontext);




    return(

   <div className="mx-20">

              <h3> Welcome ! {user.username}</h3>




   </div>


    )
}


export default Profile