import { useEffect } from 'react';
import { fetchEventRequest } from '../store/action/event.action';
import { useStore } from '../lib/hooks/useStore';
import { loginUserRequest, logOutUserRequest } from '../store/action/user.action';
import Loader from '../components/Loader.component';

const Home = () => {
  const {
    dispatchAction,
    states: {
      user: { isAuthenticated },
      event: { isLoading, events },
    },
  } = useStore();

  useEffect(() => {
    dispatchAction(fetchEventRequest);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatchAction(isAuthenticated ? logOutUserRequest : loginUserRequest)}>{isAuthenticated ? 'SIGN OUT' : 'SIGN IN'} </button>
      {isAuthenticated && events.length ? JSON.stringify(events) : null}
      {isLoading ? <Loader /> : null}
    </div>
  );
};

export default Home;
