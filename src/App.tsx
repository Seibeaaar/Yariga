import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux';
import ThemeContextProvider from './customization/ThemeContext';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <RouterProvider router={routes} />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
