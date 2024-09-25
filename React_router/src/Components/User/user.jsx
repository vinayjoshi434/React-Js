import { useParams } from "react-router-dom";
// this is used to acces the id or data passed on the the url . that use for user logical operation i.e db call based on id 


const User=()=>{
    const {id}=useParams();
    return (
    <div className="bg-slate-500 text-center text-lg p-2"> User: {id}</div>

    )
}

export default User
