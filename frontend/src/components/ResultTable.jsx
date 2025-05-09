import React from "react";

const ResultTable = ({ betaData, recommendations }) => {
  if (!betaData || betaData.length === 0) {
    return <p className="text-gray-500">No stock results to display.</p>;
  }

  const isRecommended = (stock) => recommendations?.rotate_into?.includes(stock);
  const isAvoided = (stock) => recommendations?.avoid?.includes(stock);

  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Detailed Stock Analysis</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Stock</th>
            <th className="px-4 py-2 border border-gray-300">Beta</th>
            <th className="px-4 py-2 border border-gray-300">Risk Type</th>
            <th className="px-4 py-2 border border-gray-300">Advice</th>
          </tr>
        </thead>
        <tbody>
          {betaData.map(({ stock, beta, risk_type }) => (
            <tr key={stock} className="text-center">
              <td className="px-4 py-2 border border-gray-300">{stock}</td>
              <td className="px-4 py-2 border border-gray-300">{beta}</td>
              <td className="px-4 py-2 border border-gray-300">{risk_type}</td>
              <td className="px-4 py-2 border border-gray-300">
                {isRecommended(stock) && <span className="text-green-600 font-semibold">Rotate Into</span>}
                {isAvoided(stock) && <span className="text-red-600 font-semibold">Avoid</span>}
                {!isRecommended(stock) && !isAvoided(stock) && <span className="text-gray-500">Hold</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;