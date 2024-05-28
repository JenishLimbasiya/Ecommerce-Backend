export function getQueryOptions(query: any) {
  const page = query.page * 1 || 1;
  const limit = query.limit * 1 || 30;
  const skip = (page - 1) * limit;

  const searchTerm = query.searchTerm;

  return {
    limit,
    skip,
    page,
    searchTerm,
  };
}
