import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

export const fetchTeam = async (): Promise<i.Team> => await (await fetch('/api/team')).json();

export const useGetTeam = () => {
  return useQuery<i.Team>(['team'], () => fetchTeam());
};
