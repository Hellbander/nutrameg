import React from 'react';
import { useRouteError } from "react-router-dom";
import './error-page.css';

function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <p>
        <i>{(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}</i>
      </p>
    </div>
  );
}

export default ErrorPage;