async function getMoney() {
    //identifying the container(div) to put the info in
    let div = document.querySelector("#coinList");
    //gathering info from API
    var apiResponse = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    //converting info into json so the computer can understand it
    var coinData = await apiResponse.json();
    //displaying info in console
    console.log(coinData); 

    for(let i = 0; i<coinData.length; i++) {
        //store current coin we're inside of
        let currentCoin = coinData[i];
        //create p tags
        let pTag = document.createElement("p");
        //fill p tags with current coin name
        pTag.innerText = currentCoin.name + " - " + currentCoin.current_price;

        pTag.classList.add("coin");
        //put the p tag in our div coinList
        // console.log(pTag);
        div.appendChild(pTag);
    }
}