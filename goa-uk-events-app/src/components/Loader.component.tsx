import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner className="m-1" animation="grow" variant="danger" />
      <Spinner className="m-1" animation="grow" variant="warning" />
      <Spinner className="m-1" animation="grow" variant="info" />
    </div>
  );
};

export default Loader;
