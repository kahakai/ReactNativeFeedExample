import {useState, useEffect} from 'react';

interface FetchState<T extends object> {
  data?: T;
  isLoading: boolean;
  error?: Error;
}

const useFetch = <T extends object>(
  url?: string,
  options?: RequestInit,
): FetchState<T> => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [options, url]);

  return {
    data,
    isLoading,
    error,
  };
};

export {useFetch};
