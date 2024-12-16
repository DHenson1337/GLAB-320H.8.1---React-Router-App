import React from "react";
import { Link } from "react-router";

function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Stellar", symbol: "ETH" },
    { name: "FatouFacts", symbol: "FFA" },
  ];
  return (
    <div className="currencies">
      {currencies.map((coin) => (
        <Link key={coin.symbol} to={`/price/${coin.symbol}`}>
          <h2>{coin.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Currencies;
