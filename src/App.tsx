import ScreenContainer from "./components/ScreenContainer";
import ThemeContextProvider from "./customization/ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => (
  <ThemeContextProvider>
    <ScreenContainer>
      <RouterProvider router={router} />
    </ScreenContainer>
  </ThemeContextProvider>
);

export default App;
