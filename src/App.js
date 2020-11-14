import "./App.css";
import Navigation from "./components/navigation";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import handleLogin from "./containers/handleLogin";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
          <handleLogin />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
