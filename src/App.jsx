import { useState } from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Users from './components/Users';

function App() {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    setUsers([...users, data]); // Keep adding new users
  };

  return (
    <>
      <div>
        <div>
          {
            toggle ?
              (
                <SignIn toggle={toggle} setToggle={setToggle} addUser={addUser} />
              )
              :
              (
                <SignUp toggle={toggle} setToggle={setToggle} addUser={addUser} users={users} />
              )
          }
        </div>
        <div>
          <Users users={users} setUsers={setUsers} />
        </div>
      </div>
    </>
  )
};

export default App;