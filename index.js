const BankApp = require("./app/BankApp");
const BankView = require("./app/BankView")
const Bank = new BankApp();
const BankViewer = new BankView(Bank);




BankViewer.displayStatements(Bank);
