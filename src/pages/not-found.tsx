import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { TbError404 } from 'react-icons/tb';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation('common');
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

  return (
    <>
      <div className="relative z-10 flex h-dvh w-full justify-center pt-18 pb-14">
        <section className="flex h-full w-full max-w-5xl flex-col items-center justify-center px-2">
          <TbError404 className="h-40 w-40" />
          <Typography variant="h2" className="mb-20 max-w-96 text-center">
            {t('not-found.content')}
          </Typography>
          {error !== null && (
            <Typography variant="p1">{errorMessage}</Typography>
          )}
        </section>
      </div>
    </>
  );
};

export default NotFound;
