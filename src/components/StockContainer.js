import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBuyStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.id} stock={stock} handleStock={handleBuyStock}/>)}
    </div>
  );
}

export default StockContainer;
