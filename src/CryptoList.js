import React from 'react'

function CryptoList({cryptoData}) {
    let changePercentage =parseFloat(cryptoData.changePercent24Hr).toFixed(3);
  return (
    <div className='crypto'>
        <div className="left-crypto">
            <div className="rank">{cryptoData.rank}</div>
            <div className="crypto-data">
                <div className="crypto-name">{cryptoData.name}</div>
                <div className="symbol">{cryptoData.symbol}</div>
            </div>
        </div>  
        <div className="right-crypto">
            <div className="price">${parseFloat(cryptoData.priceUsd).toFixed(3)}</div>
            <div className={`change-percent ${cryptoData.changePercent24Hr>0?"green":"red"}`}>%{changePercentage}</div>
            
        </div>
    </div>
  )
}

export default CryptoList