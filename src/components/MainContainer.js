import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [ portfolioStocks, setPortfolioStocks ] = useState([])
  const [ filter, setFilter ] = useState("")
  const [ radioFilter, setRadioFilter ] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, [])

  function handleBuyStock (stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }

  function handleSellPortFolio (sellingStock) {
    setPortfolioStocks(portfolioStocks.filter(stock => {
      if (stock.id === sellingStock.id) {
        return false
      }
      return true
    }))
  }

  function handleFilter (event) {
    setFilter(event.target.value)
  }

  function handlePriceFilter (event) {
    setRadioFilter("price")
  }

  function handleTickerFilter (event) {
    setRadioFilter("ticker")
  }

  const filteredStocks = stocks.filter(stock => {
    if (filter === "") {
      return true
    }
    else if (stock.type === filter) {
      return true
    }
    else {
      return false
    }

  })

  if (radioFilter === "price") {
    filteredStocks.sort((a, b) => b.price - a.price)
  } 
  else if (radioFilter === "ticker") {
    filteredStocks.sort((a, b) => (a.ticker > b.ticker) ? 1 : -1)
  }

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handlePriceFilter={handlePriceFilter}  handleTickerFilter={handleTickerFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleBuyStock={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} handleSellPortFolio={handleSellPortFolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
