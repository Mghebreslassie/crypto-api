import React from "react";
import { TableContainer } from "../stylesheets/cryptoList";

function mapCrypto(cryptoArr) {
  return cryptoArr.map((crypto) => {
    return (
      <tr>
        <td>
          <img width="30px" height="30px" src={crypto.image} />
        </td>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.current_price}</td>
        <td>{crypto.price_change_24h}</td>
        <td>{crypto.market_cap}</td>
      </tr>
    );
  });
}

function CryptoList({ data }) {
  return (
    <TableContainer>
      <table>
        <tbody>
          <tr>
            <th colSpan="4">Crypto Currencies</th>
          </tr>
          <tr>
            <td>logo</td>
            <td>name</td>
            <td>abrev</td>
            <td>price</td>
            <td>daily</td>
            <td>market cap</td>
          </tr>
          {data && mapCrypto(data)}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default CryptoList;
