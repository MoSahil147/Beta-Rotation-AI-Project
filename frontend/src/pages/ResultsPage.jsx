// This file is optional if you're showing results on AnalyzerPage itself.
// But in case you want a separate page to view results after redirect, here's a template.

import React from "react";
import { useLocation } from "react-router-dom";
import ChartDisplay from "../components/ChartDisplay";
import ResultTable from "../components/ResultTable";
import SummaryCard from "../components/SummaryCard";

const ResultsPage = () => {
  const location = useLocation();
  const { results } = location.state || {};

  if (!results) {
    return (
      <div className="text-center py-10 text-gray-600">
        No data received. Please run the analysis again.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Analysis Results</h1>

      <SummaryCard
        marketTrend={results.market_trend}
        recommendations={results.recommendations}
      />

      <ChartDisplay
        betaData={results.betas}
        marketTrend={results.market_trend}
      />

      <ResultTable
        betaData={results.betas}
        recommendations={results.recommendations}
      />
    </div>
  );
};

export default ResultsPage;