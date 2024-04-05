import Header from "./Components/Header/index";
import Main from "./Components/Main/index";
import { Provider } from "react-redux";
import store from "./ReduxStore/ReduxStore";

import "./App.css";

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
