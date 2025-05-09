function Users(props) {
    const { users, setUsers } = props;

    const handleDelete = (id) => {
        const copyUsers = [...users];
        const filteredUsers = copyUsers.filter(user => user.id != id);
        setUsers(filteredUsers);
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-8 px-4 py-20">
                {
                    users.map(user => (
                        <div key={user.id} className="bg-blue-500 p-8 rounded-2xl">
                            <div>
                                <h1 className="text-4xl">{user.name}</h1>
                                <p>{user.email}</p>
                            </div>
                            <div className="text-right">
                                <span onClick={()=>handleDelete(user.id)} className="text-red-500">Delete</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default Users;