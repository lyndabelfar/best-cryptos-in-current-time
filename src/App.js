import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";


function App() {
  const url = "https://api.coincap.io/v2/assets";

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data.data)
    console.log(data.data)
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Top 100 Cryptocurrencies</h1>
      {apiData.map((cryptoData)=>{
        return <CryptoList cryptoData={cryptoData} />
      })}
      
    </div>
  );
}

export default App;
