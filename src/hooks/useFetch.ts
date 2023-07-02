import {useState, useEffect} from 'react';

interface FetchState<T extends object> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T extends object>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
