import { useEffect } from 'react';
import { fetchEventRequest } from '../store/action/event.action';
import { useStore } from '../lib/hooks/useStore';
import { loginUserRequest, logOutUserRequest } from '../store/action/user.action';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    dispatchAction,
    states: {
      user: { isAuthenticated },
    },
  } = useStore();

  useEffect(() => {
    dispatchAction(fetchEventRequest);
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatchAction(isAuthenticated ? logOutUserRequest : loginUserRequest)}>{isAuthenticated ? 'SIGN OUT' : 'SIGN IN'} </button>
      <Link to={'/admin'}>Admin</Link>
    </div>
  );
};

export default Home;
