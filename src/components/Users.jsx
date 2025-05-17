import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

function Users() {
    const { users, setUsers } = useContext(userContext);

    const handleDelete = (id) => {
        const copyUsers = [...users];
        const filteredUsers = copyUsers.filter(user => user.id !== id);
        setUsers(filteredUsers);
    };

    return (
        <>
            <div className="flex justify-center px-4 py-20">
                {users.length === 0 ? (
                    <h1 className="text-4xl text-center font-semibold">No User have Signed In/Up yet.</h1>
                    )
                    :
                    (
                    <div className="flex flex-wrap justify-center gap-8 text-white">
                        {users.map(user => (
                            <div key={user.id} className="bg-blue-500 p-8 rounded-2xl">
                                <div>
                                    <h1 className="text-4xl">{user.name}</h1>
                                    <p>{user.email}</p>
                                </div>
                                <div className="text-right">
                                    <small onClick={() => handleDelete(user.id)} className="text-red-500 hover:cursor-pointer">Delete</small>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Users;