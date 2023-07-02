import {useState, useEffect} from 'react';

interface FetchState<T extends object> {
  data?: T;
  isLoading: boolean;
  error?: Error;
}

const useFetch = <T extends object>(url: string): FetchState<T> => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export {useFetch};
