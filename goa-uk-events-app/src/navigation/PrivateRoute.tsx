import { Navigate } from 'react-router-dom';
import { useStore } from '../lib/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const {
    states: {
      user: { isAuthenticated },
    },
  } = useStore();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default PrivateRoute;
