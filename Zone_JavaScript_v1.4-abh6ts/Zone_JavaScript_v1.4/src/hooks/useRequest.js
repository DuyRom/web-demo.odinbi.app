import useSWR from 'swr';
// utils
import axios from '../utils/axios';

// ----------------------------------------------------------------------

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useRequest(url, options) {
  const { data, error, isValidating, mutate } = useSWR(url, fetcher, options);

  return {
    data,
    error,
    mutate,
    isValidating,
    isLoading: !error && !data,
  };
}
