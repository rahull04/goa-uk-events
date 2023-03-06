import { useEffect } from 'react';
import Alert, { AlertVariant } from '../components/common/Alert.component';
import Button from '../components/common/Button.component';
import { useStore } from '../lib/hooks';
import { fetchEventsRequest } from '../store/stores';
import { loginUserRequest, logOutUserRequest } from '../store/stores';

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
      <Button onClick={() => dispatchAction(isAuthenticated ? logOutUserRequest : loginUserRequest)}>{isAuthenticated ? 'SIGN OUT' : 'SIGN IN'} </Button>
      {isAuthenticated ? <Alert variant={AlertVariant.SUCCESS}>Logged In</Alert> : null}
      {isAuthenticated && events.length ? JSON.stringify(events) : null}
    </div>
  );
};

export default Home;
