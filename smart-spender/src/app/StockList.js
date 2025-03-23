import axios from 'axios';
import { useEffect, useState } from 'react';
import './stockList.css';

const StockList = ({ json, title, }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStocks(json.slice(0, 5)); // Fetch only the first 5 items
      } catch (error) {
        console.error(`Error fetching ${title} data:`, error);
      }
    };  

    fetchData();
  }, [json, title]);

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>
        {stocks.map((stock) => (
            <div key={stock.symbol} className="stock-container">
            <div className="stock-info">
                <span className="stock-symbol">{stock.symbol}</span>
                <span className="stock-name">{stock.name}</span>
            </div>
            <div className="stock-value">
                <span className="block">${stock.price.toFixed(2)}</span>
                <span className={`stock-change ${stock.changesPercentage > 0 ? 'text-green' : 'text-red'}`}>
                {stock.changesPercentage.toFixed(2)}%
                </span>
            </div>
            </div>
        ))}
        </div>

    </div>
  );
};

export default StockList;