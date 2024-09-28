import {
  DashboardOutlined,
  AccountCircleOutlined,
  CorporateFareOutlined,
  HandshakeOutlined,
  StarBorderOutlined,
  ChatOutlined,
} from '@mui/icons-material';

export const NAV_LINKS = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: DashboardOutlined,
  },
  {
    label: 'Property',
    route: '/properties',
    icon: CorporateFareOutlined,
  },
  {
    label: 'Agreements',
    route: '/agreements',
    icon: HandshakeOutlined,
  },
  {
    label: 'Messages',
    route: '/chats',
    icon: ChatOutlined,
  },
  {
    label: 'Reviews',
    route: '/reviews',
    icon: StarBorderOutlined,
  },
  {
    label: 'My profile',
    route: '/profile',
    icon: AccountCircleOutlined,
  },
];
