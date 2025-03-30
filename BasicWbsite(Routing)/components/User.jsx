import React from "react";
import { useParams } from "react-router";

const User = () => {
    const {id} =useParams()
    return ( 
        <div className="text-black">USER: {id}</div>
     );
}
 
export default User;