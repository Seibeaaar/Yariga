import ThemeContextProvider from "./customization/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import router from "./router";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </PersistGate>
  </Provider>
);

export default App;
