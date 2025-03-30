import React from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children}/*Comnponents are received and passed as it is*/)=>{
    const [user, setuser]=React.useState(null)
    return (
        <UserContext.Provider value={{user,setuser}}>
            {children} 
        </UserContext.Provider>
        /*These components (children) will be able to access user,setuser*/
    )
}
//Can do this inside the app.jsx or main.jsx file itself also
export default UserContextProvider