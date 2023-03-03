import { useEffect } from 'react';
import './App.scss';
import { fetchEventRequest } from './store/action/event';
import { useStore } from './lib/hooks/useStore';

function App() {
  const { dispatchAction } = useStore();

  useEffect(() => {
    dispatchAction(fetchEventRequest);
  }, []);

  return <div className="App"></div>;
}

export default App;
