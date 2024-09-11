import { RouterProvider } from 'react-router-dom';
import ThemeContextProvider from './customization/ThemeContext';
import routes from './routes';

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={routes} />
    </ThemeContextProvider>
  );
}

export default App;
