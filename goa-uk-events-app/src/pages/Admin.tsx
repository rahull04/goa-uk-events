import Button, { ButtonType } from '../components/common/Button.component';
import { useStore } from '../lib/hooks';
import { logOutUserRequest } from '../store/stores';

const Admin = () => {
  const { dispatchAction } = useStore();
  return (
    <div>
      <Button onClick={() => dispatchAction(logOutUserRequest)}>SIGN OUT</Button>
      <Button type={ButtonType.CLOSE} onClick={() => dispatchAction(logOutUserRequest)} />
      <h2>Admin screen</h2>
    </div>
  );
};

export default Admin;
