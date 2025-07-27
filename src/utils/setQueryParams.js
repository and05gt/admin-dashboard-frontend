export const setQueryParams = filters => {
  const queryParams = [];

  if (filters) {
    queryParams.push(`&name=${filters}`);
  }
  return queryParams;
};
