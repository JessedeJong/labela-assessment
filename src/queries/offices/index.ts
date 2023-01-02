import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

export const fetchOffices = async (): Promise<i.Offices> => await (await fetch('/api/offices')).json();

export const useGetOffices = () => {
  return useQuery<i.Offices>(['office'], () => fetchOffices());
};
