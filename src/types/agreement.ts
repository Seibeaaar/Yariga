export enum AGREEMENT_TYPE {
  Sale = 'sale',
  Rent = 'rent',
}

export enum AGREEMENT_TOTAL_INTERVAL {
  Monthly = 'monthly',
  Daily = 'daily',
  Weekly = 'weekly',
  Yearly = 'yearly',
}

export type TotalByInterval = {
  name: string;
  value: number;
};
