import { COLORS } from '@/constants/styles';
import { ThemeContext } from '@/customization/ThemeContext';
import { LoaderSizeMarginProps } from 'react-spinners/helpers/props';
import { FC, JSX, useContext } from 'react';

type CustomLoaderProps = LoaderSizeMarginProps & {
  loader(props: LoaderSizeMarginProps): JSX.Element | null;
  size?: number;
};

const CustomLoader: FC<CustomLoaderProps> = ({ loader, ...rest }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const loaderColor = isDarkTheme
    ? COLORS['primary-dark']
    : COLORS['primary-light'];

  const LoaderComponent = loader;
  return <LoaderComponent color={loaderColor} {...rest} />;
};

export default CustomLoader;
