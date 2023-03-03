import { Provider } from "react-redux";
import { initializeStore } from "./src/Store";
import Navigation from "./src/Navigation";

const App = () => {
  const store = initializeStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
