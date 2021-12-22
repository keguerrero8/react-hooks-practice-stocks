import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, handleSellPortFolio}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} handleStock={handleSellPortFolio}/>)}
    </div>
  );
}

export default PortfolioContainer;
