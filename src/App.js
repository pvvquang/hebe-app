import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import AppProvider from "./app/Context/AppProvider";
import Collection from "./pages/Collection";
import Detail from "./pages/Detail";
import Home from "./pages/Home/index";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/:id/detail" component={Detail} />
          <Route path="/collection/:type" component={Collection} />
          <Route path="/collection" component={Collection} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
