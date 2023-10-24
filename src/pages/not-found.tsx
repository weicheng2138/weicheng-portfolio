import Typography from '@/components/typography';
import { useEffect } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timerId);
  }, [navigate]);
  return (
    <>
      <Typography variant="h1">404 - Page Not Found</Typography>
      {error && <p>{errorMessage}</p>}
    </>
  );
};

export default NotFound;
