import { useContext } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Users from './components/Users';
import { userContext } from './contexts/UserContext';

function App() {
  const { toggle } = useContext(userContext);

  return (
    <>
      <div>
        <div>
          {toggle ?
            (
              <SignIn />
            )
            :
            (
              <SignUp />
            )
          }
        </div>
        <div>
          <Users />
        </div>
      </div>
    </>
  );
};

export default App;