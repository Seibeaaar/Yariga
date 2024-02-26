import ThemeContextProvider from "./customization/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import router from "./router";

const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </Provider>
);

export default App;
