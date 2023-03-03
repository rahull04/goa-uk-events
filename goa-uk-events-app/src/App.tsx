import { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from './store/action/user';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state);
  console.log('data', data);
  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  return <div className="App"></div>;
}

export default App;
