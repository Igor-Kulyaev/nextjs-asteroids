export const addUrlParams = (url: string, queryParams: Record<string, string>) => {
  // Convert the queryParams object into a query string
  const queryString = new URLSearchParams(queryParams).toString();

  // Construct the URL with the query string
  return `${url}?${queryString}`;
}