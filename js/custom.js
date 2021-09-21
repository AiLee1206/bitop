function openStock(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}

/* stock list */
let stocks = [
  { brand: "BTC", name: "BTC", pts: "$51,773.02", reb: "1.82%" },
  { brand: "ETH", name: "ETH", pts: "$3,946.60", reb: "3.19%" },
  { brand: "Icons_Market_Crypto_ADA", name: "ADA", pts: "$2.90", reb: "2.56%" },
  { brand: "Icons_Market_Crypto_BNB", name: "BNB", pts: "$504.40", reb: "1.84%" },
  { brand: "Icons_Market_Crypto_USDT", name: "USDT", pts: "$0.9996", reb: "0.02%" },
  { brand: "XRP", name: "XRP", pts: "$1.34", reb: "6.4%" },
  { brand: "Icons_Market_Crypto_SOL", name: "SOL", pts: "$145.11", reb: "3.0%" },
  { brand: "Icons_Market_Crypto_DOGE", name: "DOGE", pts: "$0.313726", reb: "4.3%" },
  { brand: "Icons_Market_Crypto_DOT", name: "DOT", pts: "$34.62", reb: "6.6%" }
];

let images = ["image1.jpg", "photo.jpg", "graphic.png", "animation.gif"];

const dataPanel = document.querySelector("#data-panel");

function displayPlayerList(stocks) {
  let html = "";
  stocks.forEach((stock) => {
    html += `
        <tr>
          <td><img src="images/${stock.brand}.png" alt="Icons_Market_Crypto_BNB"></td>
          <td>${stock.name}</td>
          <td>
            <span>${stock.pts}</span>
          </td>
          <td>
            <span class="upPrice">${stock.reb}</span>
          </td>
          <td>
            <span class="stock-line">${stock.ast}</span>

          </td>
          <td>
            <button class="stock-button" onclick="buyStock()">交易</button>
          </td>
        </tr>
      `;
  });
  dataPanel.innerHTML = html;
}

displayPlayerList(stocks);
