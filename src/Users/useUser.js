import React from "react";
import { useUser } from "./user";

const User = () => {
    const {data:userData,getUsers,resetUsers,loading} = useUser();

    const getUserButtonText = loading ? "Loading ..." : "Get User"
    
    return <>
        {!userData && <button onClick={getUsers}>{getUserButtonText}</button>}
        {userData && <button onClick={resetUsers}>reset Users</button>}
        {userData && userData.map((user) => <li key={user.id}>{user.name}</li>)}
    </>
}

export default User