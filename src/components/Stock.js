import React from "react";

function Stock({stock, handleStock}) {
  return (
    <div>
      <div onClick={() => handleStock(stock)} className="card">
        <div className="card-body">
          <h3 className="card-title">{stock.name}</h3>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
