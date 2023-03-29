import { useContext, useState, useCallback, useRef, useEffect } from 'react';

import { MarkdownContext } from '../context/markdownContext';

export const useHttpClient = () => {
  const [ error, setError ] = useState();
  const { isLoading, setIsLoading } = useContext(MarkdownContext);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (
    url, 
    method = 'GET', 
    body = null, 
    headers = {}
  ) => {

    setIsLoading(true);

    const httpAbortCtrl = new AbortController();

    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal
      });
    
      const responseData = await response.json();

      if (response.ok) {
        throw new Error(responseData.message);
      }

      setIsLoading(false);

      return responseData;
    } catch(err) {
      setError(err.message || 'Something went wrong, please try again');
      setIsLoading(false);
      throw err;
    }

  }, [ setIsLoading ]);

  const clearError = () => {
    setError(null);
  }

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abortCtrl())
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};