import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { FC, ChangeEvent } from 'react';

type PaginationProps = {
  pages: number;
  activePage: number;
  total: number;
  onChange(page: number): void;
};

const Pagination: FC<PaginationProps> = ({
  pages,
  activePage,
  total,
  onChange,
}) => {
  const onPageChange = (_e: ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };
  return (
    <div className="w-full flex items-center justify-between mt-[24px]">
      <p className="text-sm text-secondary-light dark:text-secondary-dark">
        Number of results: {total}
      </p>
      <MuiPagination
        onChange={onPageChange}
        page={activePage}
        count={pages}
        shape="rounded"
        renderItem={(props) => (
          <PaginationItem
            {...props}
            className={`!w-[36px] !h-[36px] !rounded-[5px] flex items-center justify-center transition-all hover:!bg-primary hover:text-white dark:hover:text-white dark:hover:bg-primary text-primary-light dark:text-primary-dark ${props.selected ? '!bg-primary !text-white' : 'bg-transparent'}`}
          />
        )}
      />
    </div>
  );
};

export default Pagination;
