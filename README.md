# Angular-Node-Crypto-Tax-Beautifier
This stand alone project was inspired by the spirit of decentralization.
An open resource to parse and display csv files in a customizable AngularJS format.
Although bitcoin.tax does a fine job of calculating cost basis and capital gains
for a fee, I felt a project where users can download and run calculations 
locally falls more in line with cryptocurrencies ideal.



To run this properly these are the following steps to take:

_____

npm install csvtojson
npm install cryptocompare

node server.js
grunt serve (while keeping the node server running)

The csv file is file which has a few trades from Bittrex. I have also included 
the price of BTC (hour by hour) for the months of Aug-Dec 2017. Feel free to 
do with them as you see fit.
