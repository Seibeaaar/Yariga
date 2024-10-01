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

export enum AGREEMENT_STATUS {
  Pending = 'pending',
  Declined = 'declined',
  Accepted = 'accepted',
  Countered = 'countered',
}

export type TotalByInterval = {
  name: string;
  value: number;
};

export type Agreement = {
  id: string;
  creator: string;
  tenant: string;
  landlord: string;
  updatedAt: string | null;
  createdAt: string;
  property: string;
  amount: number;
  type: AGREEMENT_TYPE;
  status: AGREEMENT_STATUS;
  parent: string | null;
  startDate: string;
  endDate?: string;
};
