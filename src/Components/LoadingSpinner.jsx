import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
    </>
  );
}

export default LoadingSpinner;