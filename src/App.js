import React, { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
import axios from "axios";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //axios http request for api data on load
    const getData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setData(response.data);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <h1>apiii</h1>
      {data ? <CryptoList data={data} /> : "loading"}
    </div>
  );
}

export default App;
