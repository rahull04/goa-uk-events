import { useEffect, useState } from 'react';
import Modal from '../components/common/Modal.component';
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
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <h2>Home</h2>
      <Button onClick={() => dispatchAction(isAuthenticated ? logOutUserRequest : loginUserRequest)}>{isAuthenticated ? 'SIGN OUT' : 'SIGN IN'} </Button>
      <Button onClick={() => setModalVisible(true)}>SHOW MODAL </Button>
      {isAuthenticated ? <Alert variant={AlertVariant.SUCCESS}>Logged In</Alert> : null}
      {isAuthenticated && events.length ? JSON.stringify(events) : null}
      <Modal title="Show modal " isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default Home;
