import { useEffect } from 'react';
import { fetchEventRequest } from '../store/action/event';
import { useStore } from '../lib/hooks/useStore';

const Home = () => {
  const { dispatchAction } = useStore();

  useEffect(() => {
    dispatchAction(fetchEventRequest);
  }, []);
  return <div>Home</div>;
};

export default Home;
