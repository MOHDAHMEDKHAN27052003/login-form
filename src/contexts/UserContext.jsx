import { createContext, useState } from "react";

export const userContext = createContext();

function UserContext(props) {
    const [toggle, setToggle] = useState(true);
    const [users, setUsers] = useState([]);
    
    const addUser = (data) => {
        setUsers([...users, data]); // Keep adding new users
    };

    return (
        <>
            <userContext.Provider value={{toggle,setToggle,users,setUsers,addUser}}>
                {props.children}
            </userContext.Provider>
        </>
    );
};

export default UserContext;