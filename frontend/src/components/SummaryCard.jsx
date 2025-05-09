import React from "react";

const SummaryCard = ({ marketTrend, recommendations }) => {
  if (!marketTrend || !recommendations) return null;

  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Market Overview</h2>
      
      <p className="mb-2">
        <strong>Market Trend:</strong>{" "}
        <span className={
          marketTrend === "Bullish" ? "text-green-600" :
          marketTrend === "Bearish" ? "text-red-600" :
          "text-yellow-600"
        }>
          {marketTrend}
        </span>
      </p>

      <p className="mb-2">
        <strong>Suggested Rotations:</strong>
        <ul className="list-disc list-inside ml-4 mt-1">
          {recommendations.rotate_into.length > 0 ? (
            recommendations.rotate_into.map(stock => (
              <li key={stock} className="text-green-700">Buy/Rotate Into: {stock}</li>
            ))
          ) : (
            <li className="text-gray-500">No defensive stocks recommended for rotation.</li>
          )}
        </ul>
      </p>

      <p>
        <strong>Stocks to Avoid:</strong>
        <ul className="list-disc list-inside ml-4 mt-1">
          {recommendations.avoid.length > 0 ? (
            recommendations.avoid.map(stock => (
              <li key={stock} className="text-red-600">Avoid: {stock}</li>
            ))
          ) : (
            <li className="text-gray-500">No aggressive stocks flagged to avoid.</li>
          )}
        </ul>
      </p>
    </div>
  );
};

export default SummaryCard;