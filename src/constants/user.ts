import { USER_ROLE } from '@/types/user';
import { Sell, LocalMall } from '@mui/icons-material';

export const USER_ROLE_OPTIONS = [
  {
    icon: LocalMall,
    role: USER_ROLE.Tenant,
    title: 'Find the best property for your needs',
  },
  {
    icon: Sell,
    role: USER_ROLE.Landlord,
    title: 'Sell or rent out property for your profit',
  },
];
