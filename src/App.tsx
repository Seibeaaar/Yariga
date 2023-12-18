import ScreenContainer from "./components/ScreenContainer";
import ThemeContextProvider from "./customization/ThemeContext";

const App = () => (
  <ThemeContextProvider>
    <ScreenContainer>
      <h1>Yariga</h1>
    </ScreenContainer>
  </ThemeContextProvider>
);

export default App;
