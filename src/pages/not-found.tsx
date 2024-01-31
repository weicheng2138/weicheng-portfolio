import Typography from '@/components/typography';
import { useEffect } from 'react';
import { TbError404 } from 'react-icons/tb';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError() as null | unknown;
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
      <div className="relative z-10 flex h-dvh w-full justify-center pb-[3.5rem] pt-[4.5rem]">
        <section className="flex h-full w-full max-w-5xl flex-col items-center justify-center">
          <TbError404 className="h-40 w-40" />
          <Typography variant="h1">Page Not Found</Typography>
          {error !== null && (
            <Typography variant="p1">{errorMessage}</Typography>
          )}
        </section>
      </div>
    </>
  );
};

export default NotFound;
