import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ onResult }) => {
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");
  const [marketIndex, setMarketIndex] = useState("^NSEI");
  const [sectors, setSectors] = useState("IT, Pharma, Banking");
  const [stocks, setStocks] = useState("INFY.NS, TCS.NS, SUNPHARMA.NS");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        start_date: startDate,
        end_date: endDate,
        market_index: marketIndex,
        sectors: sectors.split(",").map(s => s.trim()),
        stocks: stocks.split(",").map(s => s.trim())
      });

      onResult(response.data);
    } catch (err) {
      console.error("Error during analysis:", err);
      alert("Failed to analyze. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded shadow-md">
      <div>
        <label className="block font-medium">Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input" />
      </div>
      <div>
        <label className="block font-medium">End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input" />
      </div>
      <div>
        <label className="block font-medium">Market Index:</label>
        <input type="text" value={marketIndex} onChange={(e) => setMarketIndex(e.target.value)} className="input" />
      </div>
      <div>
        <label className="block font-medium">Sectors (comma-separated):</label>
        <input type="text" value={sectors} onChange={(e) => setSectors(e.target.value)} className="input" />
      </div>
      <div>
        <label className="block font-medium">Stock Tickers (comma-separated):</label>
        <input type="text" value={stocks} onChange={(e) => setStocks(e.target.value)} className="input" />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Analyze</button>
    </form>
  );
};

export default InputForm;