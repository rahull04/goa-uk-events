import { useStore } from '../lib/hooks';
import { logOutUserRequest } from '../store/action/user.action';

const Admin = () => {
  const { dispatchAction } = useStore();
  return (
    <div>
      <button onClick={() => dispatchAction(logOutUserRequest)}>SIGN OUT</button>
      <h2>Admin screen</h2>
    </div>
  );
};

export default Admin;
