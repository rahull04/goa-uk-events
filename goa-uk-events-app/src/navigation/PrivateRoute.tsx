import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isSignedIn: boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ isSignedIn, children }: PrivateRouteProps): JSX.Element => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default PrivateRoute;
