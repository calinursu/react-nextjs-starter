import { contentRoutes } from 'constants/apiRoutes';
import serverFetch from 'lib/api/server-fetch';

export const getContent = async (
  id: number | string,
): Promise<any | null> => {
  const url = `${contentRoutes.base}/${id}`;
  return await serverFetch(encodeURI(url));
};
