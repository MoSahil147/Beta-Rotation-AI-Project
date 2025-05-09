import React, { useState } from "react";
import InputForm from "../components/InputForm";
import ChartDisplay from "../components/ChartDisplay";
import ResultTable from "../components/ResultTable";
import SummaryCard from "../components/SummaryCard";

const AnalyzerPage = () => {
  const [results, setResults] = useState(null);  // Stores full backend response

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Beta Rotation Strategy Analyzer
      </h1>

      {/* Form to enter input parameters */}
      <InputForm onResult={(data) => setResults(data)} />

      {/* Render results if available */}
      {results && (
        <>
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
        </>
      )}
    </div>
  );
};

export default AnalyzerPage;