import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Define colors for pie chart slices
const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const ChartDisplay = ({ betaData, marketTrend }) => {
  if (!betaData || betaData.length === 0) {
    return <p className="text-gray-500">No data to display yet.</p>;
  }

  // Prepare pie chart data
  const pieData = [
    {
      name: "Aggressive",
      value: betaData.filter(d => d.risk_type === "Aggressive").length,
    },
    {
      name: "Moderate",
      value: betaData.filter(d => d.risk_type === "Moderate").length,
    },
    {
      name: "Defensive",
      value: betaData.filter(d => d.risk_type === "Defensive").length,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Stock Beta Values</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={betaData}>
            <XAxis dataKey="stock" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="beta" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Risk Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 md:col-span-2">
        <h2 className="text-lg font-semibold mb-2">Market Trend</h2>
        <div className="p-4 bg-gray-100 rounded">
          <p className="text-xl font-bold text-blue-700">{marketTrend}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartDisplay;