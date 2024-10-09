export type PaginatedResponse<T> = {
  pages: number;
  total: number;
  page: number;
  results: T[];
};
