import { useEffect } from 'react';
import { useStore } from '../lib/hooks/useStore';
import { fetchEventsRequest } from '../store/stores/event.store';
import { loginUserRequest, logOutUserRequest } from '../store/stores/user.store';

const Home = () => {
  const { dispatchAction, states } = useStore();
  const {
    user: { isAuthenticated },
    event: { events },
  } = states;
  useEffect(() => {
    dispatchAction(fetchEventsRequest);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatchAction(isAuthenticated ? logOutUserRequest : loginUserRequest)}>{isAuthenticated ? 'SIGN OUT' : 'SIGN IN'} </button>
      {isAuthenticated && events.length ? JSON.stringify(events) : null}
    </div>
  );
};

export default Home;
