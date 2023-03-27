import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import CryptoNews from "./Pages/CryptoNews";
import PricePractice from "./Pages/PricePrediction";
import AutomaticTrader from "./Pages/AutomaticTrader";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/crypto-news" component={CryptoNews} exact />
        <Route path="/price-prediction" component={PricePractice} exact />
        <Route path="/automatic-trader" component={AutomaticTrader} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
