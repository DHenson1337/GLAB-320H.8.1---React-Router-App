import { useState, useEffect } from "react";
import { useParams } from "react-router"; // Import useParams from react-router

export default function Price() {
  const { symbol } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "0C7D3A14-3B5C-4E7F-BF81-C50926CDCC57";
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  if (loading) return <h1>Loading...</h1>;
  if (!coin || !coin.rate) return <h1>Error fetching data</h1>;

  return (
    <div>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>Price: ${coin.rate.toFixed(2)}</h2>
    </div>
  );
}
